"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2443],{3905:function(e,i,t){t.d(i,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function a(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?a(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var i=n.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},d=function(e){var i=c(e.components);return n.createElement(s.Provider,{value:i},e.children)},u={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},p=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return t?n.createElement(f,o(o({ref:i},d),{},{components:t})):n.createElement(f,o({ref:i},d))}));function m(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5671:function(e,i,t){t.r(i),t.d(i,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=t(7462),r=t(3366),a=(t(7294),t(3905)),o=["components"],l={title:"Field visibility",date:new Date("2019-02-12T02:00:00.000Z"),description:"How control the visibility of the fields defined in a schema"},s="Limiting Field Visibility",c={unversionedId:"field-visibility",id:"field-visibility",isDocsHomePage:!1,title:"Field visibility",description:"How control the visibility of the fields defined in a schema",source:"@site/documentation/field-visibility.md",sourceDirName:".",slug:"/field-visibility",permalink:"/documentation/master/field-visibility",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/documentation/field-visibility.md",tags:[],version:"current",frontMatter:{title:"Field visibility",date:"2019-02-12T02:00:00.000Z",description:"How control the visibility of the fields defined in a schema"},sidebar:"tutorialSidebar",previous:{title:"Field selection",permalink:"/documentation/master/field-selection"},next:{title:"Instrumentation",permalink:"/documentation/master/instrumentation"}},d=[],u={toc:d};function p(e){var i=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"limiting-field-visibility"},"Limiting Field Visibility"),(0,a.kt)("p",null,"By default every field defined in a ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphqlSchema")," is available.  There are cases where you may want to restrict certain fields\ndepending on the user."),(0,a.kt)("p",null,"You can do this by using a ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql.schema.visibility.GraphqlFieldVisibility")," implementation and attaching it to the schema."),(0,a.kt)("p",null,"A simple ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql.schema.visibility.BlockedFields")," implementation based on fully qualified field name is provided."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'GraphqlFieldVisibility blockedFields = BlockedFields.newBlock()\n        .addPattern("Character.id")\n        .addPattern("Droid.appearsIn")\n        .addPattern(".*\\\\.hero") // it uses regular expressions\n        .build();\nGraphQLCodeRegistry codeRegistry = GraphQLCodeRegistry.newCodeRegistry()\n        .fieldVisibility(blockedFields)\n        .build();\n\nGraphQLSchema schema = GraphQLSchema.newSchema()\n        .query(StarWarsSchema.queryType)\n        .codeRegistry(codeRegistry)\n        .build();\n')),(0,a.kt)("p",null,"There is also another implementation that prevents instrumentation from being able to be performed on your schema, if that is a requirement."),(0,a.kt)("p",null,"Note that this puts your server in contravention of the graphql specification and expectations of most clients so use this with caution."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"GraphQLCodeRegistry codeRegistry = GraphQLCodeRegistry.newCodeRegistry()\n        .fieldVisibility(NoIntrospectionGraphqlFieldVisibility.NO_INTROSPECTION_FIELD_VISIBILITY)\n        .build();\nGraphQLSchema schema = GraphQLSchema.newSchema()\n        .query(StarWarsSchema.queryType)\n        .codeRegistry(codeRegistry)\n        .build();\n")),(0,a.kt)("p",null,"You can create your own derivation of ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphqlFieldVisibility")," to check what ever you need to do to work out what fields\nshould be visible or not."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'class CustomFieldVisibility implements GraphqlFieldVisibility {\n\n    final YourUserAccessService userAccessService;\n\n    CustomFieldVisibility(YourUserAccessService userAccessService) {\n        this.userAccessService = userAccessService;\n    }\n\n    @Override\n    public List<GraphQLFieldDefinition> getFieldDefinitions(GraphQLFieldsContainer fieldsContainer) {\n        if ("AdminType".equals(fieldsContainer.getName())) {\n            if (!userAccessService.isAdminUser()) {\n                return Collections.emptyList();\n            }\n        }\n        return fieldsContainer.getFieldDefinitions();\n    }\n\n    @Override\n    public GraphQLFieldDefinition getFieldDefinition(GraphQLFieldsContainer fieldsContainer, String fieldName) {\n        if ("AdminType".equals(fieldsContainer.getName())) {\n            if (!userAccessService.isAdminUser()) {\n                return null;\n            }\n        }\n        return fieldsContainer.getFieldDefinition(fieldName);\n    }\n}\n')))}p.isMDXComponent=!0}}]);