"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3198],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4742:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"GraphQL Java 17 released and an update about LTS",authors:"andi",slug:"17-released-and-lts"},p=void 0,u={permalink:"/graphql-java-page/blog/17-released-and-lts",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/blog/blog/2021-08-03-17-released-and-lts.md",source:"@site/blog/2021-08-03-17-released-and-lts.md",title:"GraphQL Java 17 released and an update about LTS",description:"We are happy to announce the availability of GraphQL Java 17.0.",date:"2021-08-03T00:00:00.000Z",formattedDate:"August 3, 2021",tags:[],readingTime:.8,truncated:!1,authors:[{name:"Andreas Marek",title:"Maintainer of GraphQL Java",url:"https://github.com/andimarek",imageURL:"https://github.com/andimarek.png",key:"andi"}],prevItem:{title:"Spring for GraphQL is the recommended Spring integration",permalink:"/graphql-java-page/blog/spring-for-graphql"},nextItem:{title:"GraphQL spec releases are not important",permalink:"/graphql-java-page/blog/spec-releases-are-not-important"}},c={authorsImageUrls:[void 0]},s=[],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are happy to announce the availability of GraphQL Java 17.0.\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/releases/tag/v17.0"},"17.0 release notes")," for all the details."),(0,o.kt)("p",null,"At the same time we wanted to give an update regarding our LTS (Long Term Support) policy.\nPreviously we maintained a LTS version of 9.x and after quite some time we announced 14.x as the next LTS."),(0,o.kt)("p",null,"The reality is that we didn't maintain 14.x really as a LTS version (we only released one bugfix release).\nThis was mainly caused by the minimal community feedback and our limited time and resources."),(0,o.kt)("p",null,"Going forward we decided to no offer any LTS versions anymore. We will only actively maintain and bugfix\nthe latest version (currently 17). We may backport critical bugfixes, but we are not committed to it."),(0,o.kt)("p",null,"If this is a huge problem for you or your Company and you are willing to help us with maintaining a LTS\nversion you can reach us via email at\nhello at graphql-java dot com."))}d.isMDXComponent=!0}}]);