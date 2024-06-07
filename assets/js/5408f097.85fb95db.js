"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6677],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1354:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Concerns",date:new Date("2018-09-09T02:52:46.000Z"),description:"Outlines certain application level concerns and how to address them"},l="Application concerns",u={unversionedId:"concerns",id:"concerns",isDocsHomePage:!1,title:"Concerns",description:"Outlines certain application level concerns and how to address them",source:"@site/documentation/concerns.md",sourceDirName:".",slug:"/concerns",permalink:"/documentation/master/concerns",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/documentation/concerns.md",tags:[],version:"current",frontMatter:{title:"Concerns",date:"2018-09-09T02:52:46.000Z",description:"Outlines certain application level concerns and how to address them"},sidebar:"tutorialSidebar",previous:{title:"Batching",permalink:"/documentation/master/batching"},next:{title:"Contributions",permalink:"/documentation/master/contributions"}},s=[{value:"Context Objects",id:"context-objects",children:[],level:2}],p={toc:s};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"application-concerns"},"Application concerns"),(0,a.kt)("p",null,"The graphql-java library concentrates on providing an engine for the execution of queries according to the specification."),(0,a.kt)("p",null,"It does not concern itself about other high level application concerns such as the following :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Database access"),(0,a.kt)("li",{parentName:"ul"},"Caching data"),(0,a.kt)("li",{parentName:"ul"},"Data authorisation"),(0,a.kt)("li",{parentName:"ul"},"Data pagination"),(0,a.kt)("li",{parentName:"ul"},"HTTP transfer"),(0,a.kt)("li",{parentName:"ul"},"JSON encoding"),(0,a.kt)("li",{parentName:"ul"},"Code wiring via dependency injection")),(0,a.kt)("p",null,"You need to push these concerns into your business logic layers."),(0,a.kt)("p",null,"The following are great links to read more about this"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://graphql.org/learn/serving-over-http/"},"http://graphql.org/learn/serving-over-http/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://graphql.org/learn/authorization/"},"http://graphql.org/learn/authorization/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://graphql.org/learn/pagination/"},"http://graphql.org/learn/pagination/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://graphql.org/learn/caching/"},"http://graphql.org/learn/caching/"))),(0,a.kt)("h2",{id:"context-objects"},"Context Objects"),(0,a.kt)("p",null,"You can pass in a context object during query execution that will allow you to better invoke that business logic."),(0,a.kt)("p",null,"For example the edge of your application could be performing user detection and you need that information inside the\ngraphql execution to perform authorisation."),(0,a.kt)("p",null,"This made up example shows how you can pass yourself information to help execute your queries."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//\n// this could be code that authorises the user in some way and sets up enough context\n// that can be used later inside data fetchers allowing them\n// to do their job\n//\nUserContext contextForUser = YourGraphqlContextBuilder.getContextForUser(getCurrentUser());\n\nExecutionInput executionInput = ExecutionInput.newExecutionInput()\n        .context(contextForUser)\n        .build();\n\nExecutionResult executionResult = graphQL.execute(executionInput);\n\n// ...\n//\n// later you are able to use this context object when a data fetcher is invoked\n//\n\nDataFetcher dataFetcher = new DataFetcher() {\n    @Override\n    public Object get(DataFetchingEnvironment environment) {\n        UserContext userCtx = environment.getContext();\n        Long businessObjId = environment.getArgument("businessObjId");\n\n        return invokeBusinessLayerMethod(userCtx, businessObjId);\n    }\n};\n')))}h.isMDXComponent=!0}}]);