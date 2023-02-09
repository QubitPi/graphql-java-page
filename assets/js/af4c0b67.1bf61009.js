"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8582],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,u=m["".concat(p,".").concat(d)]||m[d]||h[d]||i;return t?a.createElement(u,l(l({ref:n},c),{},{components:t})):a.createElement(u,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7806:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={title:"Schema",date:new Date("2021-07-03T02:52:46.000Z"),description:"Your GraphQL API has a schema which defines each field that can be queried or mutated and what types those fields are."},p="Creating a schema",s={unversionedId:"schema",id:"version-v19/schema",isDocsHomePage:!1,title:"Schema",description:"Your GraphQL API has a schema which defines each field that can be queried or mutated and what types those fields are.",source:"@site/versioned_docs/version-v19/schema.md",sourceDirName:".",slug:"/schema",permalink:"/graphql-java-page/documentation/v19/schema",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/versioned_docs/version-v19/schema.md",tags:[],version:"v19",frontMatter:{title:"Schema",date:"2021-07-03T02:52:46.000Z",description:"Your GraphQL API has a schema which defines each field that can be queried or mutated and what types those fields are."},sidebar:"version-v19/tutorialSidebar",previous:{title:"Scalars",permalink:"/graphql-java-page/documentation/v19/scalars"},next:{title:"SDL directives",permalink:"/graphql-java-page/documentation/v19/sdl-directives"}},c=[{value:"DataFetcher and TypeResolver",id:"datafetcher-and-typeresolver",children:[],level:2},{value:"Creating a schema using the SDL",id:"creating-a-schema-using-the-sdl",children:[],level:2},{value:"Creating a schema programmatically",id:"creating-a-schema-programmatically",children:[],level:2},{value:"Types",id:"types",children:[{value:"Scalar",id:"scalar",children:[],level:3},{value:"Object",id:"object",children:[],level:3},{value:"Interface",id:"interface",children:[],level:3},{value:"Union",id:"union",children:[],level:3},{value:"InputObject",id:"inputobject",children:[],level:3},{value:"Enum",id:"enum",children:[],level:3}],level:2},{value:"Type References (recursive types)",id:"type-references-recursive-types",children:[],level:2},{value:"Modularising the Schema SDL",id:"modularising-the-schema-sdl",children:[],level:2},{value:"Subscription Support",id:"subscription-support",children:[],level:2},{value:"Changing Schema",id:"changing-schema",children:[],level:2}],h={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-a-schema"},"Creating a schema"),(0,i.kt)("p",null,"Your GraphQL API has a schema which defines each field that can be queried or mutated and what types those fields are."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java")," offers two different ways of defining the schema: Programmatically as Java code or via a special\ngraphql dsl (called SDL)."),(0,i.kt)("p",null,"If you are unsure which option to use we recommend the SDL."),(0,i.kt)("p",null,"SDL example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Foo {\n  bar: String\n}\n")),(0,i.kt)("p",null,"Java code example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GraphQLObjectType fooType = newObject()\n    .name("Foo")\n    .field(newFieldDefinition()\n            .name("bar")\n            .type(GraphQLString))\n    .build();\n')),(0,i.kt)("h2",{id:"datafetcher-and-typeresolver"},"DataFetcher and TypeResolver"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"DataFetcher")," provides the data for a field (and changes something, if it is a mutation)."),(0,i.kt)("p",null,"Every field definition has a ",(0,i.kt)("inlineCode",{parentName:"p"},"DataFetcher"),". When one is not configured, a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/schema/PropertyDataFetcher.java"},"PropertyDataFetcher"),"\nis used."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PropertyDataFetcher")," fetches data from ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," and Java Beans. So when the field name matches the Map key or the\nproperty name of the source Object, no ",(0,i.kt)("inlineCode",{parentName:"p"},"DataFetcher")," is needed."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeResolver")," helps ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java")," to decide which type a concrete value belongs to. This is needed\nfor ",(0,i.kt)("inlineCode",{parentName:"p"},"Interface")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Union"),"."),(0,i.kt)("p",null,"For example imagine you have an ",(0,i.kt)("inlineCode",{parentName:"p"},"Interface")," called ",(0,i.kt)("em",{parentName:"p"},"MagicUserType")," which resolves back to a series of Java classes\ncalled ",(0,i.kt)("em",{parentName:"p"},"Wizard"),", ",(0,i.kt)("em",{parentName:"p"},"Witch")," and ",(0,i.kt)("em",{parentName:"p"},"Necromancer"),". The type resolver is responsible for examining a runtime object and deciding\nwhat ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphqlObjectType")," should be used to represent it, and hence what data fetchers and fields will be invoked."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'new TypeResolver() {\n    @Override\n    public GraphQLObjectType getType(TypeResolutionEnvironment env) {\n        Object javaObject = env.getObject();\n        if (javaObject instanceof Wizard) {\n            return env.getSchema().getObjectType("WizardType");\n        } else if (javaObject instanceof Witch) {\n            return env.getSchema().getObjectType("WitchType");\n        } else {\n            return env.getSchema().getObjectType("NecromancerType");\n        }\n    }\n};\n')),(0,i.kt)("h2",{id:"creating-a-schema-using-the-sdl"},"Creating a schema using the SDL"),(0,i.kt)("p",null,"When defining a schema via SDL, you provide the needed ",(0,i.kt)("inlineCode",{parentName:"p"},"DataFetcher")," s and ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeResolver")," s when the executable\nschema is created."),(0,i.kt)("p",null,"Take for example the following static schema definition file called ",(0,i.kt)("inlineCode",{parentName:"p"},"starWarsSchema.graphqls"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: QueryType\n}\n\ntype QueryType {\n  hero(episode: Episode): Character\n  human(id : String) : Human\n  droid(id: ID!): Droid\n}\n\n\nenum Episode {\n  NEWHOPE\n  EMPIRE\n  JEDI\n}\n\ninterface Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n}\n\ntype Human implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n  homePlanet: String\n}\n\ntype Droid implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n  primaryFunction: String\n}\n")),(0,i.kt)("p",null,"The static schema definition file ",(0,i.kt)("inlineCode",{parentName:"p"},"starWarsSchema.graphqls")," contains the field and type definitions, but you need a\nruntime wiring to make it a truly executable schema."),(0,i.kt)("p",null,"The runtime wiring contains ",(0,i.kt)("inlineCode",{parentName:"p"},"DataFetcher")," s, ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeResolvers")," s and custom ",(0,i.kt)("inlineCode",{parentName:"p"},"Scalar")," s that are needed to make a\nfully executable schema."),(0,i.kt)("p",null,"You wire this together using this builder pattern:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'RuntimeWiring buildRuntimeWiring() {\n    return RuntimeWiring.newRuntimeWiring()\n            .scalar(CustomScalar)\n            // this uses builder function lambda syntax\n            .type("QueryType", typeWiring -> typeWiring\n                    .dataFetcher("hero", new StaticDataFetcher(StarWarsData.getArtoo()))\n                    .dataFetcher("human", StarWarsData.getHumanDataFetcher())\n                    .dataFetcher("droid", StarWarsData.getDroidDataFetcher())\n            )\n            .type("Human", typeWiring -> typeWiring\n                    .dataFetcher("friends", StarWarsData.getFriendsDataFetcher())\n            )\n            // you can use builder syntax if you don\'t like the lambda syntax\n            .type("Droid", typeWiring -> typeWiring\n                    .dataFetcher("friends", StarWarsData.getFriendsDataFetcher())\n            )\n            // or full builder syntax if that takes your fancy\n            .type(\n                    newTypeWiring("Character")\n                            .typeResolver(StarWarsData.getCharacterTypeResolver())\n                            .build()\n            )\n            .build();\n}\n')),(0,i.kt)("p",null,"Finally, you can generate an executable schema by combining the static schema and the wiring together as shown in this\nexample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'SchemaParser schemaParser = new SchemaParser();\nSchemaGenerator schemaGenerator = new SchemaGenerator();\n\nFile schemaFile = loadSchema("starWarsSchema.graphqls");\n\nTypeDefinitionRegistry typeRegistry = schemaParser.parse(schemaFile);\nRuntimeWiring wiring = buildRuntimeWiring();\nGraphQLSchema graphQLSchema = schemaGenerator.makeExecutableSchema(typeRegistry, wiring);\n')),(0,i.kt)("p",null,"In addition to the builder style shown above, ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeResolver")," s and ",(0,i.kt)("inlineCode",{parentName:"p"},"DataFetcher")," s can also be wired in using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"WiringFactory")," interface. This allows for a more dynamic runtime wiring since the SDL definitions can be examined in\norder to decide what to wire in. You could for example look at SDL directives, or some other aspect of the SDL\ndefinition to help you decide what runtime to create."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'RuntimeWiring buildDynamicRuntimeWiring() {\n    WiringFactory dynamicWiringFactory = new WiringFactory() {\n        @Override\n        public boolean providesTypeResolver(TypeDefinitionRegistry registry, InterfaceTypeDefinition definition) {\n            return getDirective(definition,"specialMarker") != null;\n        }\n\n        @Override\n        public boolean providesTypeResolver(TypeDefinitionRegistry registry, UnionTypeDefinition definition) {\n            return getDirective(definition,"specialMarker") != null;\n        }\n\n        @Override\n        public TypeResolver getTypeResolver(TypeDefinitionRegistry registry, InterfaceTypeDefinition definition) {\n            Directive directive  = getDirective(definition,"specialMarker");\n            return createTypeResolver(definition,directive);\n        }\n\n        @Override\n        public TypeResolver getTypeResolver(TypeDefinitionRegistry registry, UnionTypeDefinition definition) {\n            Directive directive  = getDirective(definition,"specialMarker");\n            return createTypeResolver(definition,directive);\n        }\n\n        @Override\n        public boolean providesDataFetcher(TypeDefinitionRegistry registry, FieldDefinition definition) {\n            return getDirective(definition,"dataFetcher") != null;\n        }\n\n        @Override\n        public DataFetcher getDataFetcher(TypeDefinitionRegistry registry, FieldDefinition definition) {\n            Directive directive = getDirective(definition, "dataFetcher");\n            return createDataFetcher(definition,directive);\n        }\n    };\n    return RuntimeWiring.newRuntimeWiring()\n            .wiringFactory(dynamicWiringFactory).build();\n}\n')),(0,i.kt)("h2",{id:"creating-a-schema-programmatically"},"Creating a schema programmatically"),(0,i.kt)("p",null,"When the schema is created programmatically ",(0,i.kt)("inlineCode",{parentName:"p"},"DataFetcher")," s and ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeResolver")," s are provided at type creation:"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'DataFetcher<Foo> fooDataFetcher = new DataFetcher<Foo>() {\n    @Override\n    public Foo get(DataFetchingEnvironment environment) {\n        // environment.getSource() is the value of the surrounding\n        // object. In this case described by objectType\n        Foo value = perhapsFromDatabase(); // Perhaps getting from a DB or whatever\n        return value;\n    }\n};\n\nGraphQLObjectType objectType = newObject()\n        .name("ObjectType")\n        .field(newFieldDefinition()\n                .name("foo")\n                .type(GraphQLString)\n        )\n        .build();\n\nGraphQLCodeRegistry codeRegistry = newCodeRegistry()\n        .dataFetcher(\n                coordinates("ObjectType", "foo"),\n                fooDataFetcher)\n        .build();\n')),(0,i.kt)("h2",{id:"types"},"Types"),(0,i.kt)("p",null,"The GraphQL type system supports the following kind of types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scalar"),(0,i.kt)("li",{parentName:"ul"},"Object"),(0,i.kt)("li",{parentName:"ul"},"Interface"),(0,i.kt)("li",{parentName:"ul"},"Union"),(0,i.kt)("li",{parentName:"ul"},"InputObject"),(0,i.kt)("li",{parentName:"ul"},"Enum")),(0,i.kt)("h3",{id:"scalar"},"Scalar"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java")," supports the following Scalars:"),(0,i.kt)("p",null,"Standard graphql scalars :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GraphQLString")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GraphQLBoolean")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GraphQLInt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GraphQLFloat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GraphQLID"))),(0,i.kt)("p",null,"Extended graphql-java scalars"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GraphQLLong")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GraphQLShort")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GraphQLByte")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GraphQLFloat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GraphQLBigDecimal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GraphQLBigInteger"))),(0,i.kt)("p",null,"Note that the semantics around the extended scalars might not be understood by your clients. For example mapping a Java\nLong (max value 2^63-1) into a JavaScript Number ( max value 2^53 - 1)\nmay be problematic for you."),(0,i.kt)("h3",{id:"object"},"Object"),(0,i.kt)("p",null,"SDL Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SimpsonCharacter {\n  name: String\n  mainCharacter: Boolean\n}\n")),(0,i.kt)("p",null,"Java Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GraphQLObjectType simpsonCharacter = newObject()\n    .name("SimpsonCharacter")\n    .description("A Simpson character")\n    .field(newFieldDefinition()\n            .name("name")\n            .description("The name of the character.")\n            .type(GraphQLString))\n    .field(newFieldDefinition()\n            .name("mainCharacter")\n            .description("One of the main Simpson characters?")\n            .type(GraphQLBoolean))\n    .build();\n')),(0,i.kt)("h3",{id:"interface"},"Interface"),(0,i.kt)("p",null,"Interfaces are abstract definitions of types."),(0,i.kt)("p",null,"SDL Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"interface ComicCharacter {\n  name: String\n}\n")),(0,i.kt)("p",null,"Java Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GraphQLInterfaceType comicCharacter = newInterface()\n    .name("ComicCharacter")\n    .description("An abstract comic character.")\n    .field(newFieldDefinition()\n            .name("name")\n            .description("The name of the character.")\n            .type(GraphQLString))\n    .build();\n')),(0,i.kt)("h3",{id:"union"},"Union"),(0,i.kt)("p",null,"SDL Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Cat {\n  name: String\n  lives: Int\n}\n\ntype Dog {\n  name: String\n  bonesOwned: Int\n}\n\nunion Pet = Cat | Dog\n")),(0,i.kt)("p",null,"Java Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'TypeResolver typeResolver = new TypeResolver() {\n    @Override\n    public GraphQLObjectType getType(TypeResolutionEnvironment env) {\n        if (env.getObject() instanceof Cat) {\n            return CatType;\n        }\n        if (env.getObject() instanceof Dog) {\n            return DogType;\n        }\n        return null;\n    }\n};\nGraphQLUnionType PetType = newUnionType()\n        .name("Pet")\n        .possibleType(CatType)\n        .possibleType(DogType)\n        .build();\n\nGraphQLCodeRegistry codeRegistry = newCodeRegistry()\n        .typeResolver("Pet", typeResolver)\n        .build();\n')),(0,i.kt)("h3",{id:"inputobject"},"InputObject"),(0,i.kt)("p",null,"SDL Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input Character {\n  name: String\n}\n")),(0,i.kt)("p",null,"Java Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GraphQLInputObjectType inputObjectType = newInputObject()\n    .name("inputObjectType")\n    .field(newInputObjectField()\n            .name("field")\n            .type(GraphQLString))\n    .build();\n')),(0,i.kt)("h3",{id:"enum"},"Enum"),(0,i.kt)("p",null,"SDL Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum Color {\n  RED\n  GREEN\n  BLUE\n}\n")),(0,i.kt)("p",null,"Java Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GraphQLEnumType colorEnum = newEnum()\n        .name("Color")\n        .description("Supported colors.")\n        .value("RED")\n        .value("GREEN")\n        .value("BLUE")\n        .build();\n')),(0,i.kt)("h2",{id:"type-references-recursive-types"},"Type References (recursive types)"),(0,i.kt)("p",null,"GraphQL supports recursive types: For example a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," can contain a list of friends of the same type."),(0,i.kt)("p",null,"To be able to declare such a type, ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLTypeReference")," class."),(0,i.kt)("p",null,"When the schema is created, the ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLTypeReference")," is replaced with the actual real type Object."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GraphQLObjectType person = newObject()\n        .name("Person")\n        .field(newFieldDefinition()\n                .name("friends")\n                .type(GraphQLList.list(GraphQLTypeReference.typeRef("Person"))))\n        .build();\n')),(0,i.kt)("p",null,"When the schema is declared via SDL, no special handling of recursive types is needed as it is detected and done for\nyou."),(0,i.kt)("h2",{id:"modularising-the-schema-sdl"},"Modularising the Schema SDL"),(0,i.kt)("p",null,"Having one large schema file is not always viable. You can modularise you schema using two techniques."),(0,i.kt)("p",null,"The first technique is to merge multiple Schema SDL files into one logic unit. In the case below the schema has been\nsplit into multiple files and merged all together just before schema generation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'SchemaParser schemaParser = new SchemaParser();\nSchemaGenerator schemaGenerator = new SchemaGenerator();\n\nFile schemaFile1 = loadSchema("starWarsSchemaPart1.graphqls");\nFile schemaFile2 = loadSchema("starWarsSchemaPart2.graphqls");\nFile schemaFile3 = loadSchema("starWarsSchemaPart3.graphqls");\n\nTypeDefinitionRegistry typeRegistry = new TypeDefinitionRegistry();\n\n// each registry is merged into the main registry\ntypeRegistry.merge(schemaParser.parse(schemaFile1));\ntypeRegistry.merge(schemaParser.parse(schemaFile2));\ntypeRegistry.merge(schemaParser.parse(schemaFile3));\n\nGraphQLSchema graphQLSchema = schemaGenerator.makeExecutableSchema(typeRegistry, buildRuntimeWiring());\n')),(0,i.kt)("p",null,"The Graphql SDL type system has another construct for modularising a schema. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"type extensions")," to add extra\nfields and interfaces to a type."),(0,i.kt)("p",null,"Imagine you start with a type like this in one schema file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Human {\n  id: ID!\n  name: String!\n}\n")),(0,i.kt)("p",null,"Another part of your system can extend this type to add more shape to it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"extend type Human implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n}\n")),(0,i.kt)("p",null,"You can have as many extensions as you think sensible. They will be combined in the order in which they are encountered.\nDuplicate fields will be merged as one (however field re-definitions into new types are not allowed)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"extend type Human {\n  homePlanet: String\n}\n")),(0,i.kt)("p",null,"With all these type extensions in place the ",(0,i.kt)("inlineCode",{parentName:"p"},"Human")," type now looks like this at runtime."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Human implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n  homePlanet: String\n}\n")),(0,i.kt)("p",null,'This is especially useful at the top level. You can use extension types to add new fields to the top level schema "\nquery". Teams could contribute "sections" on what is being offered as the total graphql query.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: CombinedQueryFromMultipleTeams\n}\n\ntype CombinedQueryFromMultipleTeams {\n  createdTimestamp: String\n}\n\n# maybe the invoicing system team puts in this set of attributes\nextend type CombinedQueryFromMultipleTeams {\n  invoicing: Invoicing\n}\n\n# and the billing system team puts in this set of attributes\nextend type CombinedQueryFromMultipleTeams {\n  billing: Billing\n}\n\n# and so and so forth\nextend type CombinedQueryFromMultipleTeams {\n  auditing: Auditing\n}\n")),(0,i.kt)("h2",{id:"subscription-support"},"Subscription Support"),(0,i.kt)("p",null,"Subscriptions allow you to perform a query and whenever a backing object for that query changes an updated will be sent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"subscription foo {\n  # normal graphql query\n}\n")),(0,i.kt)("p",null,"See the page on ",(0,i.kt)("a",{parentName:"p",href:"/graphql-java-page/documentation/v19/subscriptions"},"subscriptions")," for more details"),(0,i.kt)("h2",{id:"changing-schema"},"Changing Schema"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," is an immutable object once its is built. To make things more complicated it is in fact an immutable\ncyclic graph."),(0,i.kt)("p",null,"If you need to change the schema after it has been built then you need to use special API to ",(0,i.kt)("inlineCode",{parentName:"p"},"transform")," it into a new\nshape."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql.schema.SchemaTransformer")," is the class that can transform an existing schema into a new one."),(0,i.kt)("p",null,'It uses a visitor pattern with "commands" that allow you to insert, update or delete elements in the schema.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GraphQLTypeVisitorStub visitor = new GraphQLTypeVisitorStub() {\n    @Override\n    public TraversalControl visitGraphQLObjectType(GraphQLObjectType objectType, TraverserContext<GraphQLSchemaElement> context) {\n        GraphQLCodeRegistry.Builder codeRegistry = context.getVarFromParents(GraphQLCodeRegistry.Builder.class);\n        // we need to change __XXX introspection types to have directive extensions\n        if (someConditionalLogic(objectType)) {\n            GraphQLObjectType newObjectType = buildChangedObjectType(objectType, codeRegistry);\n            return changeNode(context, newObjectType);\n        }\n        return CONTINUE;\n    }\n\n    private boolean someConditionalLogic(GraphQLObjectType objectType) {\n        // up to you to decide what causes a change, perhaps a directive is on the element\n        return objectType.hasDirective("specialDirective");\n    }\n\n    private GraphQLObjectType buildChangedObjectType(GraphQLObjectType objectType, GraphQLCodeRegistry.Builder codeRegistry) {\n        GraphQLFieldDefinition newField = GraphQLFieldDefinition.newFieldDefinition()\n                .name("newField").type(Scalars.GraphQLString).build();\n        GraphQLObjectType newObjectType = objectType.transform(builder -> builder.field(newField));\n\n        DataFetcher newDataFetcher = dataFetchingEnvironment -> {\n            return "someValueForTheNewField";\n        };\n        FieldCoordinates coordinates = FieldCoordinates.coordinates(objectType.getName(), newField.getName());\n        codeRegistry.dataFetcher(coordinates, newDataFetcher);\n        return newObjectType;\n    }\n};\nGraphQLSchema newSchema = SchemaTransformer.transformSchema(schema, visitor);\n')),(0,i.kt)("p",null,'You return "command" methods in your visitor that causes the ',(0,i.kt)("inlineCode",{parentName:"p"},"SchemaTransformer")," to modify the schema while maintain its cyclic graph semantic\ncorrectness."),(0,i.kt)("p",null,"You can update elements, insert new ones or delete elements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"GraphQLTypeVisitorStub visitor = new GraphQLTypeVisitorStub() {\n    @Override\n    public TraversalControl visitGraphQLObjectType(GraphQLObjectType objectType, TraverserContext<GraphQLSchemaElement> context) {\n\n        // changes the current element in the schema\n        return changeNode(context, updatedElement);\n\n        // inserts a new element after the current one in the schema\n        return insertAfter(context, newElement);\n\n        // inserts a new element before the current one in teh schema\n        return insertBefore(context, newElement);\n\n        // deletes the current element from the schema\n        return deleteNode(context);\n\n        // just continue with no change\n        return CONTINUE;\n    }\n};\n")),(0,i.kt)("p",null,"Obviously the above code does not compile, it's there to show the different command methods the visitor must return\nto instruct the ",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaTransformer")," to change the schema DAG."))}m.isMDXComponent=!0}}]);