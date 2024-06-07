"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4284],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1620:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],p={title:"Exceptions",date:new Date("2018-09-09T02:52:46.000Z"),description:"Outlines the exceptions used in graphql-java"},l="Runtime Exceptions",c={unversionedId:"exceptions",id:"exceptions",isDocsHomePage:!1,title:"Exceptions",description:"Outlines the exceptions used in graphql-java",source:"@site/documentation/exceptions.md",sourceDirName:".",slug:"/exceptions",permalink:"/graphql-java-page/documentation/master/exceptions",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/documentation/exceptions.md",tags:[],version:"current",frontMatter:{title:"Exceptions",date:"2018-09-09T02:52:46.000Z",description:"Outlines the exceptions used in graphql-java"},sidebar:"tutorialSidebar",previous:{title:"Data mapping",permalink:"/graphql-java-page/documentation/master/data-mapping"},next:{title:"Execution",permalink:"/graphql-java-page/documentation/master/execution"}},u=[],s={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"runtime-exceptions"},"Runtime Exceptions"),(0,i.kt)("p",null,"Runtime exceptions can be thrown by the graphql engine if certain exceptional situations are encountered.  The following\nare a list of the exceptions that can be thrown all the way out of a ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql.execute(...)")," call."),(0,i.kt)("p",null,"These are not graphql errors in execution but rather totally unacceptable conditions in which to execute a graphql query."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"graphql.schema.CoercingSerializeException")),(0,i.kt)("p",{parentName:"li"},"is thrown when a value cannot be serialised by a Scalar type, for example\na String value being coerced as an Int."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"graphql.schema.CoercingParseValueException")),(0,i.kt)("p",{parentName:"li"},"is thrown when a value cannot be parsed by a Scalar type, for example\na String input value being parsed as an Int."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"graphql.execution.UnresolvedTypeException")),(0,i.kt)("p",{parentName:"li"},"is thrown if a ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql.schema.TypeResolver")," fails to provide a concrete\nobject type given a interface or union type."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"graphql.execution.NonNullableValueCoercedAsNullException")),(0,i.kt)("p",{parentName:"li"},"is thrown if a non null variable argument is coerced as a\nnull value during execution."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"graphql.execution.InputMapDefinesTooManyFieldsException")),(0,i.kt)("p",{parentName:"li"},"is thrown if a map used for an input type object contains\nmore keys than is defined in that input type."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"graphql.schema.validation.InvalidSchemaException")),(0,i.kt)("p",{parentName:"li"},"is thrown if the schema is not valid when built via\n",(0,i.kt)("inlineCode",{parentName:"p"},"graphql.schema.GraphQLSchema.Builder#build()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"graphql.execution.UnknownOperationException")))),(0,i.kt)("p",null,"if multiple operations are defined in the query and\nthe operation name is missing or there is no matching operation name\ncontained in the GraphQL query."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"graphql.GraphQLException")),(0,i.kt)("p",{parentName:"li"},"is thrown as a general purpose runtime exception, for example if the code cant\naccess a named field when examining a POJO, it is analogous to a RuntimeException if you will."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"graphql.AssertException")),(0,i.kt)("p",{parentName:"li"}," is thrown as a low level code assertion exception for truly unexpected code conditions, things we assert\nshould never happen in practice."))))}m.isMDXComponent=!0}}]);