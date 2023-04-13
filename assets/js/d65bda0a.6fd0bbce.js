"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7568],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9696:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"Query Parser",date:new Date("2023-04-13T03:56:23.000Z")},s="Query Parser",u={unversionedId:"query-parser",id:"query-parser",isDocsHomePage:!1,title:"Query Parser",description:"We can parse a GraphQL query string into a programmable Java object, i.e. a Document, even without knowing schema. For",source:"@site/documentation/query-parser.md",sourceDirName:".",slug:"/query-parser",permalink:"/graphql-java-page/documentation/master/query-parser",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/documentation/query-parser.md",tags:[],version:"current",frontMatter:{title:"Query Parser",date:"2023-04-13T03:56:23.000Z"},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/graphql-java-page/documentation/master/logging"},next:{title:"Relay",permalink:"/graphql-java-page/documentation/master/relay"}},p=[{value:"Retrieving Query Components through Visitor",id:"retrieving-query-components-through-visitor",children:[{value:"Visitor Design Pattern",id:"visitor-design-pattern",children:[{value:"Example",id:"example",children:[],level:6},{value:"Using Visitor in GraphQL",id:"using-visitor-in-graphql",children:[],level:5}],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query-parser"},"Query Parser"),(0,a.kt)("p",null,"We can parse a GraphQL query string into a programmable Java object, i.e. a Document, even without knowing schema. For\nexample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import graphql.language.Document;\nimport graphql.parser.Parser;\n\nDocument document = Parser.parse("{ Instrument(id: \\"1234\\") { Reference { Name } } }");\n')),(0,a.kt)("h2",{id:"retrieving-query-components-through-visitor"},"Retrieving Query Components through Visitor"),(0,a.kt)("h3",{id:"visitor-design-pattern"},"Visitor Design Pattern"),(0,a.kt)("p",null,"The purpose of a Visitor pattern is to define a new operation without introducing the modifications to an existing\nobject structure."),(0,a.kt)("p",null,"Imagine that we have a ",(0,a.kt)("a",{parentName:"p",href:"https://www.baeldung.com/java-composite-pattern"},"composite")," object which consists of components.\nThe object's structure is fixed - we either can't change it, or we don't plan to add new types of elements to the\nstructure."),(0,a.kt)("p",null,"Now, how could we add new functionality to our code without modification of existing classes? The Visitor design pattern\nmight be an answer. Simply put, what we will do is to ",(0,a.kt)("strong",{parentName:"p"},"add a function which accepts the visitor class to each element\nof the structure.")),(0,a.kt)("p",null,'That way our components will allow the visitor implementation to "visit" them and perform any required action on that\nelement. In other words, we\'ll ',(0,a.kt)("em",{parentName:"p"},"extract the algorithm which will be applied to the object structure from the classes"),"."),(0,a.kt)("p",null,"Consequently, ",(0,a.kt)("strong",{parentName:"p"},"we'll make good use of the Open/Closed principle")," as we won't modify the code, but we'll still be able\nto extend the functionality by providing a new Visitor implementation."),(0,a.kt)("h6",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Error loading visitor-uml.png",src:n(561).Z})),(0,a.kt)("p",null,"On the UML diagram above, we have two implementation hierarchies"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"specialized visitors, and"),(0,a.kt)("li",{parentName:"ol"},"concrete elements.")),(0,a.kt)("p",null,"The client uses a Visitor implementation and applies it to the object structure. The composite object iterates over its\ncomponents and applies the visitor to each of them."),(0,a.kt)("p",null,"Concrete elements (",(0,a.kt)("inlineCode",{parentName:"p"},"ConcreteElementA")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ConcreteElementB"),") are accepting a ",(0,a.kt)("inlineCode",{parentName:"p"},"Visitor"),", simply allowing it to visit\nthem. This method is the same for all elements in the structure, it performs double dispatch (we will explain it blow)\nwith passing itself (via the ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," keyword) to the visitor's visit method."),(0,a.kt)("p",null,"Our example will be custom ",(0,a.kt)("inlineCode",{parentName:"p"},"Document")," object that consists of JSON (",(0,a.kt)("inlineCode",{parentName:"p"},"ConcreteElementA"),") and XML (",(0,a.kt)("inlineCode",{parentName:"p"},"ConcreteElementB"),")\nconcrete elements; the elements have a common abstract superclass, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Element")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class Document extends Element {\n\n    List<Element> elements = new ArrayList<>();\n\n    // ...\n\n    @Override\n    public void accept(Visitor visitor) {\n        for (Element element : this.elements) {\n            element.accept(visitor);\n        }\n    }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"Element")," class has an abstract method which accepts the Visitor interface:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public abstract void accept(Visitor v);\n"))),(0,a.kt)("p",null,"We will also have to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"accept()")," for all other elements, i.e. JSON element & XML element. Due to nature of the\nVisitor pattern, the implementation will be the same for both, so in most cases, it would require us to copy-paste the\nboilerplate code from other, already existing element:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class JsonElement extends Element {\n\n    // ...\n\n    public void accept(Visitor visitor) {\n        visitor.visit(this);\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class XmlElement extends Element {\n\n    // ...\n\n    public void accept(Visitor visitor) {\n        visitor.visit(this);\n    }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"visitor.visit(this)")," is the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Double_dispatch"},"double dispatch")," form\naforementioned.")),(0,a.kt)("p",null,"Since our elements allow visiting them by any visitor, let's say that we want to process our Document elements, but each\nof them in a different way, depending on its class type. Therefore, our visitor will have a separate method for the JSON\nand XML element type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class ElementVisitor implements Visitor {\n\n    @Override\n    public void visit(XmlElement xe) {\n        System.out.println("processing an XML element with uuid: " + xe.uuid);\n    }\n\n    @Override\n    public void visit(JsonElement je) {\n        System.out.println("processing a JSON element with uuid: " + je.uuid);\n    }\n}\n')),(0,a.kt)("p",null,"Here, our concrete visitor implements two methods, correspondingly one per each type of the Element. This gives us\naccess to the particular object of the structure on which we can perform necessary actions."),(0,a.kt)("h5",{id:"using-visitor-in-graphql"},"Using Visitor in GraphQL"),(0,a.kt)("p",null,"Our action would be to read any component of a GraphQL query ",(0,a.kt)("em",{parentName:"p"},"programmatically")," and, thus, visitor would be a natural\nfit."),(0,a.kt)("p",null,"GraphQL offers a public visitor API called ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/language/NodeVisitor.java"},"NodeVisitor")),", which allows us to define our custom\naction at each visit of GraphQL ANTLR component, such as SelectionSet and Argument. But, since it's an interface without\ndefault implementation, are we going to implement all of these when all we need is two or three of those\nimplementations? No, because GraphQL offers provides a stub implementation called\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/language/NodeVisitorStub.java"},"NodeVisitorStub")),', with which we simply need to override what we care about. Here is an\nexample implementation that extracts the "0x3" from the query below'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n   getTask(id: "0x3") {\n      id\n      title\n      completed\n   }\n   getAssignee(id: "EWGETBSDF") {\n      name\n      title\n      department\n   }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import graphql.language.Argument;\nimport graphql.language.Document;\nimport graphql.language.Field;\nimport graphql.language.Node;\nimport graphql.language.NodeVisitor;\nimport graphql.language.NodeVisitorStub;\nimport graphql.language.OperationDefinition;\nimport graphql.language.SelectionSet;\nimport graphql.language.StringValue;\nimport graphql.util.TraversalControl;\nimport graphql.util.TraverserContext;\nimport jakarta.validation.constraints.NotNull;\nimport net.jcip.annotations.NotThreadSafe;\n\nimport java.util.Optional;\n\n/**\n * {@link TopSelectionFieldIdArgumentExtractor} is a visitor that, by the end of its visit of a {@link Document},\n * returns the first selection field argument value whose key is "id".\n * <p>\n * For example, when a {@link Document} below is visited\n * <pre>\n * {@code\n * query {\n *     getTask(id: "0x3") {\n *         id\n *         title\n *         completed\n *     }\n *     getAssignee(id: "EWGETBSDF") {\n *         name\n *         title\n *         department\n *     }\n * }\n * }\n * </pre>\n * The "0x3" would be picked up and will be available as the return value of {@link #getArgumentValue()}\n * <p>\n * Note that there are constraints where {@link TopSelectionFieldIdArgumentExtractor} can be applied:\n * <ul>\n *     <li> The argument must exist in the first definition in the definition sequence of the {@link Document} query and\n *          the first definition must be an {@link OperationDefinition}. For example, in the query above,\n *          {@code getTask} and {@code getAssignee} together compose the "first" and it is itself a\n *          {@link OperationDefinition}\n *     <li> The {@link OperationDefinition} above must be defined by a {@link SelectionSet} and the argument must exist\n *          in the first {@link graphql.language.Selection}. For example, the {@code getTask} would be the "first"\n *          selection that has the target argument\n *     <li> The target argument has "id" as argument key and value must be a string. For instance, the argument\n *          {@code id: "0x3"} of {@code getTask} field has the matching key and matching value type\n * </ul>\n */\n@NotThreadSafe\npublic class TopSelectionFieldIdArgumentExtractor extends NodeVisitorStub {\n\n    private String id;\n\n    /**\n     * Returns a new instance of fully initialized {@link TopSelectionFieldIdArgumentExtractor}.\n     *\n     * @return the new instance\n     */\n    @NotNull\n    public static NodeVisitor newInstance() {\n        return new TopSelectionFieldIdArgumentExtractor();\n    }\n\n    /**\n     * Visits the first definition, which must be a {@link OperationDefinition}, in a specified {@link Document}.\n     *\n     * @param node  A {@link Document} with the first definition being an {@link OperationDefinition}, cannot be\n     * {@code null}\n     * @param context  A traversal context object used during visit\n     *\n     * @return not intend to be used\n     */\n    @Override\n    public TraversalControl visitDocument(@NotNull final Document node, final TraverserContext<Node> context) {\n        return visitOperationDefinition((OperationDefinition) node.getDefinitions().get(0), context);\n    }\n\n    /**\n     * Visits the {@link SelectionSet}, which must exist, of a specified {@link OperationDefinition}.\n     *\n     * @param node  An {@link OperationDefinition} that is guaranteed to contain a non-null {@link SelectionSet}.\n     * @param context  A traversal context object used during visit\n     *\n     * @return not intend to be used\n     */\n    @Override\n    public TraversalControl visitOperationDefinition(\n            @NotNull final OperationDefinition node,\n            final TraverserContext<Node> context\n    ) {\n        return visitSelectionSet(node.getSelectionSet(), context);\n    }\n\n    /**\n     * Visits the first {@link graphql.language.Selection}, which must be a {@link Field}, within a specified\n     * {@link SelectionSet}.\n     *\n     * @param node  A {@link SelectionSet} with the first {@link graphql.language.Selection} being a {@link Field},\n     * cannot be {@code null}\n     * @param context  A traversal context object used during visit\n     *\n     * @return not intend to be used\n     */\n    @Override\n    public TraversalControl visitSelectionSet(@NotNull final SelectionSet node, final TraverserContext<Node> context) {\n        return visitField((Field) node.getSelections().get(0), context);\n    }\n\n    /**\n     * Visits all {@link Argument}s of a specified {@link Field} and picks up the value of the argument, whose key is\n     * "id", as the return value of {@link #getArgumentValue()}.\n     * <p>\n     * If no such argument exists, the {@link #getArgumentValue()} would return {@link Optional#empty()}\n     *\n     * @param node  A {@link Field} instance\n     * @param context  A traversal context object used during visit\n     *\n     * @return not intend to be used\n     */\n    @Override\n    public TraversalControl visitField(@NotNull final Field node, final TraverserContext<Node> context) {\n        for (final Argument argument : node.getArguments()) {\n            if (visitArgument(argument, context) == TraversalControl.QUIT) {\n                break;\n            }\n        }\n\n        return TraversalControl.QUIT;\n    }\n\n    /**\n     * Visits an {@link Argument} and, if the argument key is "id", picks up the value of that argument as a string\n     * value and make it as the return value of {@link #getArgumentValue()}.\n     *\n     * @param node  An {@link Argument} instance\n     * @param context  A traversal context object used during visit\n     *\n     * @return a signal to stop the whole visit if the argument key is "id" or a signal to continue, otherwise\n     */\n    @NotNull\n    @Override\n    public TraversalControl visitArgument(@NotNull final Argument node, final TraverserContext<Node> context) {\n        if ("id".equals(node.getName())) {\n            visitStringValue((StringValue) node.getValue(), context);\n            return TraversalControl.QUIT;\n        }\n\n        return TraversalControl.CONTINUE;\n    }\n\n    /**\n     * Visits a specified {@link StringValue} node and always assign the value to the target argument value, i.e. the\n     * return value of {@link #getArgumentValue()}.\n     *\n     * @param node  A {@link StringValue} instance\n     * @param context  A traversal context object used during visit\n     *\n     * @return not intend to be used\n     */\n    @NotNull\n    @Override\n    public TraversalControl visitStringValue(@NotNull final StringValue node, final TraverserContext<Node> context) {\n        id = node.getValue();\n        return TraversalControl.QUIT;\n    }\n\n    /**\n     * Returns the visit result of this visitor, i.e. the top selection field id argument value.\n     *\n     * @return the id argument value or empty if not exists\n     */\n    @NotNull\n    public Optional<String> getArgumentValue() {\n        return id == null ? Optional.empty() : Optional.of(id);\n    }\n}\n')))}d.isMDXComponent=!0},561:function(e,t){t.Z="data:image/png;base64,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"}}]);