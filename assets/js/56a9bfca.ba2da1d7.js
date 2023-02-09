"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5192],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return t?n.createElement(h,l(l({ref:a},c),{},{components:t})):n.createElement(h,l({ref:a},c))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2582:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],o={title:"Scalars",date:new Date("2018-09-09T02:52:46.000Z"),description:"How scalar types work in graphql and how to write your own scalars"},s="Scalars in GraphQL",p={unversionedId:"scalars",id:"version-v19/scalars",isDocsHomePage:!1,title:"Scalars",description:"How scalar types work in graphql and how to write your own scalars",source:"@site/versioned_docs/version-v19/scalars.md",sourceDirName:".",slug:"/scalars",permalink:"/graphql-java-page/documentation/v19/scalars",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/versioned_docs/version-v19/scalars.md",tags:[],version:"v19",frontMatter:{title:"Scalars",date:"2018-09-09T02:52:46.000Z",description:"How scalar types work in graphql and how to write your own scalars"},sidebar:"version-v19/tutorialSidebar",previous:{title:"Relay",permalink:"/graphql-java-page/documentation/v19/relay"},next:{title:"Schema",permalink:"/graphql-java-page/documentation/v19/schema"}},c=[{value:"Scalars",id:"scalars",children:[],level:2},{value:"Writing your own Custom Scalars",id:"writing-your-own-custom-scalars",children:[],level:2},{value:"Coercing values",id:"coercing-values",children:[],level:2},{value:"Validation of input and output",id:"validation-of-input-and-output",children:[],level:2},{value:"Example implementation",id:"example-implementation",children:[],level:2}],u={toc:c};function m(e){var a=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scalars-in-graphql"},"Scalars in GraphQL"),(0,r.kt)("h2",{id:"scalars"},"Scalars"),(0,r.kt)("p",null,"The leaf nodes of the GraphQL type system are called scalars. Once you reach a scalar type, you\ncannot descend any further into the type hierarchy. A scalar type is meant to represent\nan indivisible value."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://spec.graphql.org/draft/#sec-Scalars"},"GraphQL specification")," states that all implementations must have the following scalar types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"String aka ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQLString")," - A UTF\u20108 character sequence."),(0,r.kt)("li",{parentName:"ul"},"Boolean aka ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQLBoolean")," - true or false."),(0,r.kt)("li",{parentName:"ul"},"Int aka ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQLInt")," - A signed 32\u2010bit integer."),(0,r.kt)("li",{parentName:"ul"},"Float aka ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQLFloat")," - A signed double-precision floating-point value."),(0,r.kt)("li",{parentName:"ul"},"ID aka ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQLID")," - A unique identifier which is serialized in the same way as a String. However, defining it as an ID signifies that it is not intended to be human\u2010readable.")),(0,r.kt)("p",null,"The class ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.Scalars")," contains singleton instances of the provided scalar types."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java-extended-scalars"},"graphql-java-extended-scalars")," adds the following scalar types which are useful in Java based systems:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Long aka ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQLLong")," - a java.lang.Long based scalar"),(0,r.kt)("li",{parentName:"ul"},"Short aka ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQLShort")," - a java.lang.Short based scalar"),(0,r.kt)("li",{parentName:"ul"},"Byte aka ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQLByte"),"  - a java.lang.Byte based scalar"),(0,r.kt)("li",{parentName:"ul"},"BigDecimal aka ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQLBigDecimal")," - a java.math.BigDecimal based scalar"),(0,r.kt)("li",{parentName:"ul"},"BigInteger aka ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQLBigInteger")," - a java.math.BigInteger based scalar")),(0,r.kt)("h2",{id:"writing-your-own-custom-scalars"},"Writing your own Custom Scalars"),(0,r.kt)("p",null,"You can write your own custom scalar implementations. In doing so you take on the responsibility for coercing values\nat runtime, which we will explain in a moment."),(0,r.kt)("p",null,"Imagine we decide we need to have an email scalar type.  It will take email addresses as input and output."),(0,r.kt)("p",null,"We would create a singleton ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.schema.GraphQLScalarType")," instance for this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public static final GraphQLScalarType EMAIL = GraphQLScalarType.newScalar()\n        .name("email")\n        .description("A custom scalar that handles emails")\n        .coercing(new Coercing() {\n            @Override\n            public Object serialize(Object dataFetcherResult) {\n                return serializeEmail(dataFetcherResult);\n            }\n\n            @Override\n            public Object parseValue(Object input) {\n                return parseEmailFromVariable(input);\n            }\n\n            @Override\n            public Object parseLiteral(Object input) {\n                return parseEmailFromAstLiteral(input);\n            }\n        })\n        .build();\n')),(0,r.kt)("h2",{id:"coercing-values"},"Coercing values"),(0,r.kt)("p",null,"The real work in any custom scalar implementation is the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.schema.Coercing")," implementation. This is responsible for 3 functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parseValue")," - takes a variable input object and converts into the Java runtime representation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parseLiteral")," - takes an AST literal ",(0,r.kt)("inlineCode",{parentName:"li"},"graphql.language.Value")," as input and converts into the Java runtime representation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"serialize")," - takes a Java object and converts it into the output shape for that scalar")),(0,r.kt)("p",null,"So your custom scalar code has to handle 2 forms of input (",(0,r.kt)("inlineCode",{parentName:"p"},"parseValue")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"parseLiteral"),") and 1 form of output (",(0,r.kt)("inlineCode",{parentName:"p"},"serialize"),")."),(0,r.kt)("p",null,"Imagine this query, which uses variables, AST literals and outputs our scalar type ",(0,r.kt)("inlineCode",{parentName:"p"},"email"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation Contact($mainContact: Email!) {\n  makeContact(mainContactEmail: $mainContact, backupContactEmail: "backup@company.com") {\n    id\n    mainContactEmail\n  }\n}\n')),(0,r.kt)("p",null,"Our custom Email scalar will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"be called via ",(0,r.kt)("inlineCode",{parentName:"li"},"parseValue")," to convert the ",(0,r.kt)("inlineCode",{parentName:"li"},"$mainContact")," variable value into a runtime object"),(0,r.kt)("li",{parentName:"ul"},"be called via ",(0,r.kt)("inlineCode",{parentName:"li"},"parseLiteral")," to convert the AST ",(0,r.kt)("inlineCode",{parentName:"li"},"graphql.language.StringValue"),' "',(0,r.kt)("a",{parentName:"li",href:"mailto:backup@company.com"},"backup@company.com"),'" into a runtime object'),(0,r.kt)("li",{parentName:"ul"},"be called via ",(0,r.kt)("inlineCode",{parentName:"li"},"serialize")," to turn the runtime representation of mainContactEmail into a form ready for output")),(0,r.kt)("h2",{id:"validation-of-input-and-output"},"Validation of input and output"),(0,r.kt)("p",null,"The methods can validate that the received input makes sense. For example our email scalar will try to validate that the input\nand output are indeed email addresses."),(0,r.kt)("p",null,"The JavaDoc method contract of ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.schema.Coercing")," says the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"serialize")," MUST ONLY allow ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.schema.CoercingSerializeException")," to be thrown from it. This indicates that the\nvalue cannot be serialized into an appropriate form.  You must not allow other runtime exceptions to escape this method to get\nthe normal graphql behaviour for validation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"parseValue")," MUST ONLY allow ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.schema.CoercingParseValueException")," to be thrown from it. This indicates that the\nvalue cannot be parsed as input into an appropriate form. You must not allow other runtime exceptions to escape this method to get\nthe normal graphql behaviour for validation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"parseLiteral")," MUST ONLY allow ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.schema.CoercingParseLiteralException")," to be thrown from it. This indicates that the\nAST value cannot be parsed as input into an appropriate form. You must not allow any runtime exceptions to escape this method to get\nthe normal graphql behaviour for validation."))),(0,r.kt)("p",null,"Some people try to rely on runtime exceptions for validation and hope that they come out as graphql errors. This is not the case. You\nMUST follow the ",(0,r.kt)("inlineCode",{parentName:"p"},"Coercing")," method contracts to allow the graphql-java engine to work according to the graphql specification on scalar types."),(0,r.kt)("h2",{id:"example-implementation"},"Example implementation"),(0,r.kt)("p",null,"The following is a really rough implementation of our imagined ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," scalar type to show you how one might implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Coercing")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public static class EmailScalar {\n\n    public static final GraphQLScalarType EMAIL = GraphQLScalarType.newScalar()\n            .name("email")\n            .description("A custom scalar that handles emails")\n            .coercing(new Coercing() {\n                @Override\n                public Object serialize(Object dataFetcherResult) {\n                    return serializeEmail(dataFetcherResult);\n                }\n\n                @Override\n                public Object parseValue(Object input) {\n                    return parseEmailFromVariable(input);\n                }\n\n                @Override\n                public Object parseLiteral(Object input) {\n                    return parseEmailFromAstLiteral(input);\n                }\n            })\n            .build();\n\n    private static boolean looksLikeAnEmailAddress(String possibleEmailValue) {\n        // ps.  I am not trying to replicate RFC-3696 clearly\n        return Pattern.matches("[A-Za-z0-9]@[.*]", possibleEmailValue);\n    }\n\n    private static Object serializeEmail(Object dataFetcherResult) {\n        String possibleEmailValue = String.valueOf(dataFetcherResult);\n        if (looksLikeAnEmailAddress(possibleEmailValue)) {\n            return possibleEmailValue;\n        } else {\n            throw new CoercingSerializeException("Unable to serialize " + possibleEmailValue + " as an email address");\n        }\n    }\n\n    private static Object parseEmailFromVariable(Object input) {\n        if (input instanceof String) {\n            String possibleEmailValue = input.toString();\n            if (looksLikeAnEmailAddress(possibleEmailValue)) {\n                return possibleEmailValue;\n            }\n        }\n        throw new CoercingParseValueException("Unable to parse variable value " + input + " as an email address");\n    }\n\n    private static Object parseEmailFromAstLiteral(Object input) {\n        if (input instanceof StringValue) {\n            String possibleEmailValue = ((StringValue) input).getValue();\n            if (looksLikeAnEmailAddress(possibleEmailValue)) {\n                return possibleEmailValue;\n            }\n        }\n        throw new CoercingParseLiteralException(\n                "Value is not any email address : \'" + String.valueOf(input) + "\'"\n        );\n    }\n}\n')))}m.isMDXComponent=!0}}]);