---
title: "Query Parser"
date: 2023-04-13T11:56:23+8:00
---

# Query Parser

We can parse a GraphQL query string into a programmable Java object, i.e. a Document, even without knowing schema. For 
example:

```java
import graphql.language.Document;
import graphql.parser.Parser;

Document document = Parser.parse("{ Instrument(id: \"1234\") { Reference { Name } } }");
```

## Retrieving Query Components through Visitor

### Visitor Design Pattern

The purpose of a Visitor pattern is to define a new operation without introducing the modifications to an existing
object structure.

Imagine that we have a [composite](https://www.baeldung.com/java-composite-pattern) object which consists of components.
The object's structure is fixed - we either can't change it, or we don't plan to add new types of elements to the
structure.

Now, how could we add new functionality to our code without modification of existing classes? The Visitor design pattern
might be an answer. Simply put, what we will do is to **add a function which accepts the visitor class to each element
of the structure.**

That way our components will allow the visitor implementation to "visit" them and perform any required action on that
element. In other words, we'll _extract the algorithm which will be applied to the object structure from the classes_.

Consequently, **we'll make good use of the Open/Closed principle** as we won't modify the code, but we'll still be able
to extend the functionality by providing a new Visitor implementation.

###### Example

![Error loading visitor-uml.png](./img/visitor-uml.png)

On the UML diagram above, we have two implementation hierarchies

1. specialized visitors, and
2. concrete elements.

The client uses a Visitor implementation and applies it to the object structure. The composite object iterates over its
components and applies the visitor to each of them.

Concrete elements (`ConcreteElementA` and `ConcreteElementB`) are accepting a `Visitor`, simply allowing it to visit
them. This method is the same for all elements in the structure, it performs double dispatch (we will explain it blow)
with passing itself (via the `this` keyword) to the visitor's visit method.

Our example will be custom `Document` object that consists of JSON (`ConcreteElementA`) and XML (`ConcreteElementB`)
concrete elements; the elements have a common abstract superclass, the `Element`

```java
public class Document extends Element {

    List<Element> elements = new ArrayList<>();

    // ...

    @Override
    public void accept(Visitor visitor) {
        for (Element element : this.elements) {
            element.accept(visitor);
        }
    }
}
```

> Note that the `Element` class has an abstract method which accepts the Visitor interface:
>
> ```java
> public abstract void accept(Visitor v);
> ```

We will also have to implement `accept()` for all other elements, i.e. JSON element & XML element. Due to nature of the
Visitor pattern, the implementation will be the same for both, so in most cases, it would require us to copy-paste the
boilerplate code from other, already existing element:

```java
public class JsonElement extends Element {

    // ...

    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
}
```

```java
public class XmlElement extends Element {

    // ...

    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
}
```

> Note that `visitor.visit(this)` is the [double dispatch](https://en.wikipedia.org/wiki/Double_dispatch) form
> aforementioned.

Since our elements allow visiting them by any visitor, let's say that we want to process our Document elements, but each
of them in a different way, depending on its class type. Therefore, our visitor will have a separate method for the JSON
and XML element type:

```java
public class ElementVisitor implements Visitor {

    @Override
    public void visit(XmlElement xe) {
        System.out.println("processing an XML element with uuid: " + xe.uuid);
    }

    @Override
    public void visit(JsonElement je) {
        System.out.println("processing a JSON element with uuid: " + je.uuid);
    }
}
```

Here, our concrete visitor implements two methods, correspondingly one per each type of the Element. This gives us
access to the particular object of the structure on which we can perform necessary actions.

##### Using Visitor in GraphQL

Our action would be to read any component of a GraphQL query _programmatically_ and, thus, visitor would be a natural
fit.

GraphQL offers a public visitor API called **[NodeVisitor][NodeVisitor.java]**, which allows us to define our custom
action at each visit of GraphQL ANTLR component, such as SelectionSet and Argument. But, since it's an interface without
default implementation, are we going to implement all of these when all we need is two or three of those
implementations? No, because GraphQL offers provides a stub implementation called
**[NodeVisitorStub][NodeVisitorStub.java]**, with which we simply need to override what we care about. Here is an
example implementation that extracts the "0x3" from the query below

```graphql
query {
   getTask(id: "0x3") {
      id
      title
      completed
   }
   getAssignee(id: "EWGETBSDF") {
      name
      title
      department
   }
}
```

```java
import graphql.language.Argument;
import graphql.language.Document;
import graphql.language.Field;
import graphql.language.Node;
import graphql.language.NodeVisitor;
import graphql.language.NodeVisitorStub;
import graphql.language.OperationDefinition;
import graphql.language.SelectionSet;
import graphql.language.StringValue;
import graphql.util.TraversalControl;
import graphql.util.TraverserContext;
import jakarta.validation.constraints.NotNull;
import net.jcip.annotations.NotThreadSafe;

import java.util.Optional;

/**
 * {@link TopSelectionFieldIdArgumentExtractor} is a visitor that, by the end of its visit of a {@link Document},
 * returns the first selection field argument value whose key is "id".
 * <p>
 * For example, when a {@link Document} below is visited
 * <pre>
 * {@code
 * query {
 *     getTask(id: "0x3") {
 *         id
 *         title
 *         completed
 *     }
 *     getAssignee(id: "EWGETBSDF") {
 *         name
 *         title
 *         department
 *     }
 * }
 * }
 * </pre>
 * The "0x3" would be picked up and will be available as the return value of {@link #getArgumentValue()}
 * <p>
 * Note that there are constraints where {@link TopSelectionFieldIdArgumentExtractor} can be applied:
 * <ul>
 *     <li> The argument must exist in the first definition in the definition sequence of the {@link Document} query and
 *          the first definition must be an {@link OperationDefinition}. For example, in the query above,
 *          {@code getTask} and {@code getAssignee} together compose the "first" and it is itself a
 *          {@link OperationDefinition}
 *     <li> The {@link OperationDefinition} above must be defined by a {@link SelectionSet} and the argument must exist
 *          in the first {@link graphql.language.Selection}. For example, the {@code getTask} would be the "first"
 *          selection that has the target argument
 *     <li> The target argument has "id" as argument key and value must be a string. For instance, the argument
 *          {@code id: "0x3"} of {@code getTask} field has the matching key and matching value type
 * </ul>
 */
@NotThreadSafe
public class TopSelectionFieldIdArgumentExtractor extends NodeVisitorStub {

    private String id;

    /**
     * Returns a new instance of fully initialized {@link TopSelectionFieldIdArgumentExtractor}.
     *
     * @return the new instance
     */
    @NotNull
    public static NodeVisitor newInstance() {
        return new TopSelectionFieldIdArgumentExtractor();
    }

    /**
     * Visits the first definition, which must be a {@link OperationDefinition}, in a specified {@link Document}.
     *
     * @param node  A {@link Document} with the first definition being an {@link OperationDefinition}, cannot be
     * {@code null}
     * @param context  A traversal context object used during visit
     *
     * @return not intend to be used
     */
    @Override
    public TraversalControl visitDocument(@NotNull final Document node, final TraverserContext<Node> context) {
        return visitOperationDefinition((OperationDefinition) node.getDefinitions().get(0), context);
    }

    /**
     * Visits the {@link SelectionSet}, which must exist, of a specified {@link OperationDefinition}.
     *
     * @param node  An {@link OperationDefinition} that is guaranteed to contain a non-null {@link SelectionSet}.
     * @param context  A traversal context object used during visit
     *
     * @return not intend to be used
     */
    @Override
    public TraversalControl visitOperationDefinition(
            @NotNull final OperationDefinition node,
            final TraverserContext<Node> context
    ) {
        return visitSelectionSet(node.getSelectionSet(), context);
    }

    /**
     * Visits the first {@link graphql.language.Selection}, which must be a {@link Field}, within a specified
     * {@link SelectionSet}.
     *
     * @param node  A {@link SelectionSet} with the first {@link graphql.language.Selection} being a {@link Field},
     * cannot be {@code null}
     * @param context  A traversal context object used during visit
     *
     * @return not intend to be used
     */
    @Override
    public TraversalControl visitSelectionSet(@NotNull final SelectionSet node, final TraverserContext<Node> context) {
        return visitField((Field) node.getSelections().get(0), context);
    }

    /**
     * Visits all {@link Argument}s of a specified {@link Field} and picks up the value of the argument, whose key is
     * "id", as the return value of {@link #getArgumentValue()}.
     * <p>
     * If no such argument exists, the {@link #getArgumentValue()} would return {@link Optional#empty()}
     *
     * @param node  A {@link Field} instance
     * @param context  A traversal context object used during visit
     *
     * @return not intend to be used
     */
    @Override
    public TraversalControl visitField(@NotNull final Field node, final TraverserContext<Node> context) {
        for (final Argument argument : node.getArguments()) {
            if (visitArgument(argument, context) == TraversalControl.QUIT) {
                break;
            }
        }

        return TraversalControl.QUIT;
    }

    /**
     * Visits an {@link Argument} and, if the argument key is "id", picks up the value of that argument as a string
     * value and make it as the return value of {@link #getArgumentValue()}.
     *
     * @param node  An {@link Argument} instance
     * @param context  A traversal context object used during visit
     *
     * @return a signal to stop the whole visit if the argument key is "id" or a signal to continue, otherwise
     */
    @NotNull
    @Override
    public TraversalControl visitArgument(@NotNull final Argument node, final TraverserContext<Node> context) {
        if ("id".equals(node.getName())) {
            visitStringValue((StringValue) node.getValue(), context);
            return TraversalControl.QUIT;
        }

        return TraversalControl.CONTINUE;
    }

    /**
     * Visits a specified {@link StringValue} node and always assign the value to the target argument value, i.e. the
     * return value of {@link #getArgumentValue()}.
     *
     * @param node  A {@link StringValue} instance
     * @param context  A traversal context object used during visit
     *
     * @return not intend to be used
     */
    @NotNull
    @Override
    public TraversalControl visitStringValue(@NotNull final StringValue node, final TraverserContext<Node> context) {
        id = node.getValue();
        return TraversalControl.QUIT;
    }

    /**
     * Returns the visit result of this visitor, i.e. the top selection field id argument value.
     *
     * @return the id argument value or empty if not exists
     */
    @NotNull
    public Optional<String> getArgumentValue() {
        return id == null ? Optional.empty() : Optional.of(id);
    }
}
```

[NodeVisitor.java]: https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/language/NodeVisitor.java
[NodeVisitorStub.java]: https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/language/NodeVisitorStub.java