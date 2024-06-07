"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9834],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return h}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),h=a,f=u["".concat(l,".").concat(h)]||u[h]||g[h]||i;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4076:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return g}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],p={title:"Spring for GraphQL is the recommended Spring integration",authors:"donna",slug:"spring-for-graphql"},l=void 0,s={permalink:"/blog/spring-for-graphql",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/blog/blog/2022-09-20-spring-for-graphql-naming.md",source:"@site/blog/2022-09-20-spring-for-graphql-naming.md",title:"Spring for GraphQL is the recommended Spring integration",description:"If you are building a GraphQL application with Spring, we recommend using the official Spring for GraphQL integration. This integration is a collaboration between the Spring and GraphQL Java teams, and is maintained by the Spring team. In May 2022, Spring for GraphQL 1.0 GA was released.",date:"2022-09-20T00:00:00.000Z",formattedDate:"September 20, 2022",tags:[],readingTime:.705,truncated:!1,authors:[{name:"Donna Zhou",title:"Maintainer of GraphQL Java",url:"https://github.com/dondonz",imageURL:"https://github.com/dondonz.png",key:"donna"}],prevItem:{title:"Version 20 released",permalink:"/blog/version-20-released"},nextItem:{title:"GraphQL Java 17 released and an update about LTS",permalink:"/blog/17-released-and-lts"}},c={authorsImageUrls:[void 0]},g=[],u={toc:g};function h(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you are building a GraphQL application with Spring, we recommend using the official ",(0,i.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-graphql"},"Spring for GraphQL")," integration. This integration is a collaboration between the Spring and GraphQL Java teams, and is maintained by the Spring team. In May 2022, Spring for GraphQL 1.0 GA was ",(0,i.kt)("a",{parentName:"p",href:"https://spring.io/blog/2022/05/19/spring-for-graphql-1-0-release"},"released"),"."),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://start.spring.io/"},"Spring Initializr")," to create a GraphQL application. For a quick tutorial, please see our ",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/tutorials/getting-started-with-spring-boot"},"Spring for GraphQL tutorial"),"."),(0,i.kt)("p",null,"See also the Spring for GraphQL ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-graphql/docs/current/reference/html/"},"documentation")," and the repo on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-graphql"},"GitHub"),"."),(0,i.kt)("p",null,"Before the official Spring for GraphQL integration was released, there were many other GraphQL integrations for Spring, including the similarly named ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql-java-kickstart/graphql-spring-boot"},"GraphQL Java Spring")," project from the GraphQL Java team, published under the ",(0,i.kt)("inlineCode",{parentName:"p"},"com.graphql-java")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"com.graphql-java-kickstart")," group IDs. Many tutorials are still referring to this unrelated project."),(0,i.kt)("p",null,"Please use the official integration named ",(0,i.kt)("strong",{parentName:"p"},'"Spring for GraphQL"'),", published under ",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework")," and related group IDs."))}h.isMDXComponent=!0}}]);