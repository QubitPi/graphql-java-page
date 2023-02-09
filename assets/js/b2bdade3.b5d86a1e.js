"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3474],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9746:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={title:"SDL directives",date:new Date("2018-09-09T02:52:46.000Z"),description:"How SDL Directives can be used to adjust the behavior of your graphql API"},c="Schema Directives",d={unversionedId:"sdl-directives",id:"sdl-directives",isDocsHomePage:!1,title:"SDL directives",description:"How SDL Directives can be used to adjust the behavior of your graphql API",source:"@site/documentation/sdl-directives.md",sourceDirName:".",slug:"/sdl-directives",permalink:"/graphql-java-page/documentation/master/sdl-directives",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/documentation/sdl-directives.md",tags:[],version:"current",frontMatter:{title:"SDL directives",date:"2018-09-09T02:52:46.000Z",description:"How SDL Directives can be used to adjust the behavior of your graphql API"},sidebar:"tutorialSidebar",previous:{title:"Schema",permalink:"/graphql-java-page/documentation/master/schema"},next:{title:"Subscriptions",permalink:"/graphql-java-page/documentation/master/subscriptions"}},s=[{value:"Adding Behaviour",id:"adding-behaviour",children:[],level:2},{value:"Declaring Directives",id:"declaring-directives",children:[],level:2},{value:"Another Example - Date Formatting",id:"another-example---date-formatting",children:[],level:2},{value:"Chaining Behaviour",id:"chaining-behaviour",children:[],level:2}],u={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schema-directives"},"Schema Directives"),(0,r.kt)("h2",{id:"adding-behaviour"},"Adding Behaviour"),(0,r.kt)("p",null,"Schema Definition Language (SDL) allows you to define your graphql types in a declarative manner without using code.  However you still need to wire in all the\nlogic that backs those types and their fields."),(0,r.kt)("p",null,"Schema directives allow you to do this.  You can place directives on SDL elements and then write the backing logic\nonce and have it apply in many places."),(0,r.kt)("p",null,'This idea of "writing it once" is the key concept here.  There is only code place where\nlogic needs to be written and it is then applied to all the places in the SDL that have a named directive.'),(0,r.kt)("p",null,"This is a more powerful model than wiring in 10-100s of data fetchers like you might\nwith the conventional runtime wiring."),(0,r.kt)("p",null,"For example imagine you have a type like the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Employee\n  id : ID\n  name : String!\n  startDate : String!\n  salary : Float\n}\n")),(0,r.kt)("p",null,"Publishing ",(0,r.kt)("inlineCode",{parentName:"p"},"salary")," information to every one who can see this employee's ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," might not be want you want.  Rather you want some sort of access control\nto be in place such that if your role is that of a manager, you can see salaries, otherwise you get no data back."),(0,r.kt)("p",null,"Directives can help you declare this more easily.  Our declaration above would become something like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'directive @auth(role : String!) on FIELD_DEFINITION\n\ntype Employee\n  id : ID\n  name : String!\n  startDate : String!\n  salary : Float @auth(role : "manager")\n}\n')),(0,r.kt)("p",null,"So we have said that only people who have the role ",(0,r.kt)("inlineCode",{parentName:"p"},"manager")," are authorised to see this field.  We can now use this directive on ANY field\nthat needs manager role authorisation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'directive @auth(role : String!) on FIELD_DEFINITION\n\ntype Employee\n  id : ID\n  name : String!\n  startDate : String!\n  salary : Float @auth(role : "manager")\n}\n\ntype Department {\n  id : ID\n  name : String\n  yearlyOperatingBudget : Float @auth(role : "manager")\n  monthlyMarketingBudget : Float @auth(role : "manager")\n}\n')),(0,r.kt)("p",null,"We now need to wire in the code that can handle any field with this ",(0,r.kt)("inlineCode",{parentName:"p"},"@auth")," directive.  We use ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.schema.idl.SchemaDirectiveWiring")," to do this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class AuthorisationDirective implements SchemaDirectiveWiring {\n\n    @Override\n    public GraphQLFieldDefinition onField(SchemaDirectiveWiringEnvironment<GraphQLFieldDefinition> environment) {\n        String targetAuthRole = (String) environment.getDirective().getArgument("role").getValue();\n\n        GraphQLFieldDefinition field = environment.getElement();\n        GraphQLFieldsContainer parentType = environment.getFieldsContainer();\n        //\n        // build a data fetcher that first checks authorisation roles before then calling the original data fetcher\n        //\n        DataFetcher originalDataFetcher = environment.getCodeRegistry().getDataFetcher(parentType, field);\n        DataFetcher authDataFetcher = new DataFetcher() {\n            @Override\n            public Object get(DataFetchingEnvironment dataFetchingEnvironment) throws Exception {\n                Map<String, Object> contextMap = dataFetchingEnvironment.getContext();\n                AuthorisationCtx authContext = (AuthorisationCtx) contextMap.get("authContext");\n\n                if (authContext.hasRole(targetAuthRole)) {\n                    return originalDataFetcher.get(dataFetchingEnvironment);\n                } else {\n                    return null;\n                }\n            }\n        };\n        //\n        // now change the field definition to have the new authorising data fetcher\n        environment.getCodeRegistry().dataFetcher(parentType, field, authDataFetcher);\n        return field;\n    }\n}\n\n//\n// we wire this into the runtime by directive name\n//\nRuntimeWiring.newRuntimeWiring()\n        .directive("auth", new AuthorisationDirective())\n        .build();\n')),(0,r.kt)("p",null,"This has modified the ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLFieldDefinition")," so that its original data fetcher will ONLY be called if the current authorisation context\nhas the ",(0,r.kt)("inlineCode",{parentName:"p"},"manager")," role.  Exactly what mechanisms you use for authorisation is up to you.  You could use Spring Security for example say, graphql-java doesn't\nreally care."),(0,r.kt)("p",null,'You would provide this authorisation checker into the execution "context" object of the graphql input so it can then be accessed later in the\n',(0,r.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"AuthorisationCtx authCtx = AuthorisationCtx.obtain();\n\nExecutionInput executionInput = ExecutionInput.newExecutionInput()\n        .query(query)\n        .context(authCtx)\n        .build();\n")),(0,r.kt)("h2",{id:"declaring-directives"},"Declaring Directives"),(0,r.kt)("p",null,"In order to use a directive in SDL, the graphql specification requires that you MUST declare its shape before using it.  Our ",(0,r.kt)("inlineCode",{parentName:"p"},"@auth")," directive example above needs to be\ndeclared like so before use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'# This is a directive declaration\ndirective @auth(role : String!) on FIELD_DEFINITION\n\ntype Employee\n  id : ID\n\n  # and this is a usage of that declared directive\n  salary : Float @auth(role : "manager")\n}\n')),(0,r.kt)("p",null,"The one exception to this is the ",(0,r.kt)("inlineCode",{parentName:"p"},"@deprecated")," directive which is implicitly declared for you as follows :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'directive @deprecated(reason: String = "No longer supported") on FIELD_DEFINITION | ENUM_VALUE\n')),(0,r.kt)("p",null,"The valid SDL directive locations are as follows :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"SCHEMA,\nSCALAR,\nOBJECT,\nFIELD_DEFINITION,\nARGUMENT_DEFINITION,\nINTERFACE,\nUNION,\nENUM,\nENUM_VALUE,\nINPUT_OBJECT,\nINPUT_FIELD_DEFINITION\n")),(0,r.kt)("p",null,"Directives are commonly applied to fields definitions but as you can see there are a number of places they can be applied."),(0,r.kt)("h2",{id:"another-example---date-formatting"},"Another Example - Date Formatting"),(0,r.kt)("p",null,"Date formatting is a cross cutting concern that we should only have to write once and apply it in many areas."),(0,r.kt)("p",null,"The following demonstrates an example schema directive that can apply date formatting to fields that are ",(0,r.kt)("inlineCode",{parentName:"p"},"LocaleDate")," objects."),(0,r.kt)("p",null,"Whats great in this example is that it adds an extra ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," argument to each field that it is applied to.  So the clients can\nopt into what ever date formatting you provide per request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @dateFormat on FIELD_DEFINITION\n\ntype Query {\n  dateField : String @dateFormat\n}\n")),(0,r.kt)("p",null,"Then our runtime code could be :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public static class DateFormatting implements SchemaDirectiveWiring {\n    @Override\n    public GraphQLFieldDefinition onField(SchemaDirectiveWiringEnvironment<GraphQLFieldDefinition> environment) {\n        GraphQLFieldDefinition field = environment.getElement();\n        GraphQLFieldsContainer parentType = environment.getFieldsContainer();\n        //\n        // DataFetcherFactories.wrapDataFetcher is a helper to wrap data fetchers so that CompletionStage is handled correctly\n        // along with POJOs\n        //\n        DataFetcher originalFetcher = environment.getCodeRegistry().getDataFetcher(parentType, field);\n        DataFetcher dataFetcher = DataFetcherFactories.wrapDataFetcher(originalFetcher, ((dataFetchingEnvironment, value) -> {\n            DateTimeFormatter dateTimeFormatter = buildFormatter(dataFetchingEnvironment.getArgument("format"));\n            if (value instanceof LocalDateTime) {\n                return dateTimeFormatter.format((LocalDateTime) value);\n            }\n            return value;\n        }));\n\n        //\n        // This will extend the field by adding a new "format" argument to it for the date formatting\n        // which allows clients to opt into that as well as wrapping the base data fetcher so it\n        // performs the formatting over top of the base values.\n        //\n        FieldCoordinates coordinates = FieldCoordinates.coordinates(parentType, field);\n        environment.getCodeRegistry().dataFetcher(coordinates, dataFetcher);\n\n        return field.transform(builder -> builder\n                .argument(GraphQLArgument\n                        .newArgument()\n                        .name("format")\n                        .type(Scalars.GraphQLString)\n                        .defaultValueProgrammatic("dd-MM-YYYY")\n                )\n        );\n    }\n\n    private DateTimeFormatter buildFormatter(String format) {\n        String dtFormat = format != null ? format : "dd-MM-YYYY";\n        return DateTimeFormatter.ofPattern(dtFormat);\n    }\n}\n\nstatic GraphQLSchema buildSchema() {\n\n    String sdlSpec = "directive @dateFormat on FIELD_DEFINITION\\n" +\n                  "type Query {\\n" +\n                  "    dateField : String @dateFormat \\n" +\n                  "}";\n\n    TypeDefinitionRegistry registry = new SchemaParser().parse(sdlSpec);\n\n    RuntimeWiring runtimeWiring = RuntimeWiring.newRuntimeWiring()\n            .directive("dateFormat", new DateFormatting())\n            .build();\n\n    return new SchemaGenerator().makeExecutableSchema(registry, runtimeWiring);\n}\n\npublic static void main(String[] args) {\n    GraphQLSchema schema = buildSchema();\n    GraphQL graphql = GraphQL.newGraphQL(schema).build();\n\n    Map<String, Object> root = new HashMap<>();\n    root.put("dateField", LocalDateTime.of(1969, 10, 8, 0, 0));\n\n    String query = "" +\n            "query {\\n" +\n            "    default : dateField \\n" +\n            "    usa : dateField(format : \\"MM-dd-YYYY\\") \\n" +\n            "}";\n\n    ExecutionInput executionInput = ExecutionInput.newExecutionInput()\n            .root(root)\n            .query(query)\n            .build();\n\n    ExecutionResult executionResult = graphql.execute(executionInput);\n    Map<String, Object> data = executionResult.getData();\n\n    // data[\'default\'] == \'08-10-1969\'\n    // data[\'usa\'] == \'10-08-1969\'\n}\n')),(0,r.kt)("p",null,"Notice the SDL definition did not have a ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," argument yet once the directive wiring is applied, it is added\nto the field definition and hence clients can begin to use it."),(0,r.kt)("p",null,"Please note that graphql-java does not ship with this implementation.  It is merely provided here as\nan example of what you could add yourself."),(0,r.kt)("h2",{id:"chaining-behaviour"},"Chaining Behaviour"),(0,r.kt)("p",null,"The directives are applied in the order they are encountered.  For example imagine directives that changed the case of a field value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @uppercase on FIELD_DEFINITION\ndirective @lowercase on FIELD_DEFINITION\ndirective @mixedcase on FIELD_DEFINITION\ndirective @reversed on FIELD_DEFINITION\n\ntype Query {\n  lowerCaseValue : String @uppercase\n  upperCaseValue : String @lowercase\n  mixedCaseValue : String @mixedcase\n\n  #\n  # directives are applied in order hence this will be lower, then upper, then mixed then reversed\n  #\n  allTogetherNow : String @lowercase @uppercase @mixedcase @reversed\n}\n")),(0,r.kt)("p",null,"When the above was executed each directive would be applied one on top of the other.  Each directive implementation should be careful\nto preserve the previous data fetcher to retain behaviour (unless of course you mean to throw it away)"))}p.isMDXComponent=!0}}]);