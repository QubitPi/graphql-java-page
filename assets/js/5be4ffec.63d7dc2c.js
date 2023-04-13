"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5551],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(y,l(l({ref:t},s),{},{components:r})):a.createElement(y,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4391:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"Relay",date:new Date("2018-09-09T02:52:46.000Z"),description:"graphql-java has support for Relay"},p="Relay Support",u={unversionedId:"relay",id:"relay",isDocsHomePage:!1,title:"Relay",description:"graphql-java has support for Relay",source:"@site/documentation/relay.md",sourceDirName:".",slug:"/relay",permalink:"/graphql-java-page/documentation/master/relay",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/documentation/relay.md",tags:[],version:"current",frontMatter:{title:"Relay",date:"2018-09-09T02:52:46.000Z",description:"graphql-java has support for Relay"},sidebar:"tutorialSidebar",previous:{title:"Query Parser",permalink:"/graphql-java-page/documentation/master/query-parser"},next:{title:"Scalars",permalink:"/graphql-java-page/documentation/master/scalars"}},s=[{value:"Apollo Support",id:"apollo-support",children:[],level:2}],c={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"relay-support"},"Relay Support"),(0,o.kt)("p",null,"Very basic support for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/relay"},"Relay")," is included."),(0,o.kt)("p",null,"Please look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/todomvc-relay-java"},"https://github.com/graphql-java/todomvc-relay-java")," for a full example project."),(0,o.kt)("p",null,"Relay sends queries to the GraphQL server as JSON containing a ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," field and a ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," field. The ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," field is a JSON string,\nand the ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," field is a map of variable definitions. A relay-compatible server will need to parse this JSON and pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"query"),"\nstring to this library as the query and the ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," map as the third argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," as shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@RequestMapping(value = "/graphql", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)\n@ResponseBody\npublic Object executeOperation(@RequestBody Map body) {\n    String query = (String) body.get("query");\n    Map<String, Object> variables = (Map<String, Object>) body.get("variables");\n    if (variables == null) {\n        variables = new LinkedHashMap<>();\n    }\n    ExecutionResult executionResult = graphql.execute(query, (Object) null, variables);\n    Map<String, Object> result = new LinkedHashMap<>();\n    if (executionResult.getErrors().size() > 0) {\n        result.put("errors", executionResult.getErrors());\n        log.error("Errors: {}", executionResult.getErrors());\n    }\n    result.put("data", executionResult.getData());\n    return result;\n}\n')),(0,o.kt)("h2",{id:"apollo-support"},"Apollo Support"),(0,o.kt)("p",null,"There is no special support for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apollographql/apollo-client"},"Apollo")," included: Apollo works with any schema."),(0,o.kt)("p",null,"The Controller example shown above works with Apollo too."))}d.isMDXComponent=!0}}]);