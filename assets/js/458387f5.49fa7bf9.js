"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6056],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),f=a,v=m["".concat(u,".").concat(f)]||m[f]||c[f]||o;return t?n.createElement(v,i(i({ref:r},s),{},{components:t})):n.createElement(v,i({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9694:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return c},default:function(){return f}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"GraphQL Java will require Java 11",authors:"andi",slug:"java-11-required"},u=void 0,p={permalink:"/graphql-java-page/blog/java-11-required",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/blog/blog/2022-12-14-java-11.md",source:"@site/blog/2022-12-14-java-11.md",title:"GraphQL Java will require Java 11",description:"GraphQL Java will require Java 11 as a minimum Java version, starting from version 21.",date:"2022-12-14T00:00:00.000Z",formattedDate:"December 14, 2022",tags:[],readingTime:.5,truncated:!1,authors:[{name:"Andreas Marek",title:"Maintainer of GraphQL Java",url:"https://github.com/andimarek",imageURL:"https://github.com/andimarek.png",key:"andi"}],nextItem:{title:"Version 20 released",permalink:"/graphql-java-page/blog/version-20-released"}},s={authorsImageUrls:[void 0]},c=[],m={toc:c};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQL Java will require Java 11 as a minimum Java version, starting from version 21."),(0,o.kt)("p",null,"With Java 8 being released over 8 years ago and Java 17 more than one year ago, we think now is the\nright time to upgrade the minimum Java version GraphQL Java is developed against."),(0,o.kt)("p",null,"This means starting with version 21 you need to use at least Java 11 to run GraphQL Java."),(0,o.kt)("p",null,"Depending on the feedback we get, we plan to release bugfix releases for version 20 for some time, but no longer\nthan until end of 2023."),(0,o.kt)("p",null,"Please discuss and leave feedback ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/discussions/3052"},"here")))}f.isMDXComponent=!0}}]);