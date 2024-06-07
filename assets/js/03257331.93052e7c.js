"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2530],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,d=m["".concat(c,".").concat(h)]||m[h]||l[h]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8188:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={title:"Moving to spectrum and new documentation home",authors:"andi",slug:"spectrum-and-new-doc"},c=void 0,s={permalink:"/blog/spectrum-and-new-doc",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/blog/blog/2018-10-10-spectrum-and-new-doc.md",source:"@site/blog/2018-10-10-spectrum-and-new-doc.md",title:"Moving to spectrum and new documentation home",description:"Update: we now use GitHub Discussions on the GitHub repository.",date:"2018-10-10T00:00:00.000Z",formattedDate:"October 10, 2018",tags:[],readingTime:.87,truncated:!1,authors:[{name:"Andreas Marek",title:"Maintainer of GraphQL Java",url:"https://github.com/andimarek",imageURL:"https://github.com/andimarek.png",key:"andi"}],prevItem:{title:"About breaking changes and Long-term support",permalink:"/blog/breaking-changes-and-lts"},nextItem:{title:"Moving projects out of the GraphQL Java org",permalink:"/blog/moving-projects"}},u={authorsImageUrls:[void 0]},l=[],m={toc:l};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Update: we now use GitHub Discussions on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/discussions"},"GitHub repository"),"."))),(0,o.kt)("p",null,"We have two exciting changes to announce:"),(0,o.kt)("h1",{id:"new-support-channel-at-spectrum"},"New support channel at spectrum"),(0,o.kt)("p",null,"We are moving our support channel from ",(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/graphql-java/graphql-java"},"gitter")," to ",(0,o.kt)("a",{parentName:"p",href:"https://spectrum.chat/graphql-java"},"spectrum"),". Gitter served us well over the years, but with more and more people using GraphQL Java we are looking for better ways to support our community and we think spectrum is the right place to do that. Especially the Threads oriented view compared to one chat room is something we are looking forward to."),(0,o.kt)("p",null,"Please ask new questions at ",(0,o.kt)("a",{parentName:"p",href:"https://spectrum.chat/graphql-java"},"https://spectrum.chat/graphql-java"),". We will stop answering questions in the gitter room and direct people to spectrum. The gitter room will be closed in a couple of weeks."),(0,o.kt)("h1",{id:"new-documentation-home"},"New documentation home"),(0,o.kt)("p",null,"We are also moving our documentation from ",(0,o.kt)("a",{parentName:"p",href:"https://graphql-java.readthedocs.io"},"readthedocs")," to our own page at ",(0,o.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/"},"graphql-java.com/documentation"),"."),(0,o.kt)("p",null,"While the the new documentation is currently similar to the old one the layout is already an improvement and code examples are much easier readable than before. We are planning more improvements over time."),(0,o.kt)("p",null,"Cheers,"),(0,o.kt)("p",null,"Andi"))}h.isMDXComponent=!0}}]);