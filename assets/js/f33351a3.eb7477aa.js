"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[556],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1878:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],i={title:"Introducing graphql-java-extended-scalars",authors:"brad",slug:"introducing-extended-scalars"},p=void 0,s={permalink:"/graphql-java-page/blog/introducing-extended-scalars",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/blog/blog/2018-11-24-introducing-extended-scalars.md",source:"@site/blog/2018-11-24-introducing-extended-scalars.md",title:"Introducing graphql-java-extended-scalars",description:'One of the most common questions we get in GraphQL Java land is "can we have a datetime scalar".',date:"2018-11-24T00:00:00.000Z",formattedDate:"November 24, 2018",tags:[],readingTime:.965,truncated:!1,authors:[{name:"Brad Baker",title:"Maintainer of GraphQL Java",url:"https://github.com/bbakerman",imageURL:"https://github.com/bbakerman.png",key:"brad"}],prevItem:{title:"First release of GraphQL Java Spring",permalink:"/graphql-java-page/blog/graphql-java-spring-support"},nextItem:{title:"GraphQL Java aims to be used directly",permalink:"/graphql-java-page/blog/graphql-java-aims-to-be-used-directly"}},c={authorsImageUrls:[void 0]},u=[],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'One of the most common questions we get in GraphQL Java land is "can we have a datetime scalar".'),(0,l.kt)("p",null,"This is not defined by the graphql specification per se so we are reluctant to add it to the core library and then have it turn\nup later as an officially specified type."),(0,l.kt)("p",null,"But it really is a badly needed type in your GraphQL arsenal and hence ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-java-extended-scalars")," was born"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java-extended-scalars"},"https://github.com/graphql-java/graphql-java-extended-scalars")),(0,l.kt)("p",null,"This will be a place where we can add non standard but useful extensions to GraphQL Java."),(0,l.kt)("p",null,"The major scalars we have added on day one are"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The aforementioned DateTime scalar as well as a Date and Time scalar")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A Object scalar or sometimes know as a JSON scalar that allows a map of values to be returned as a scalar value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Some numeric scalars that constrain the values allowed such as ",(0,l.kt)("inlineCode",{parentName:"p"},"PositiveInt"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A Regex scalar that allows a string to fit a regular expression")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A Url scalar that produces ",(0,l.kt)("inlineCode",{parentName:"p"},"java.net.URL")," objects at runtime")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"And finally an aliasing technique that allows you to create more meaningfully named scalar values"),(0,l.kt)("p",{parentName:"li"},"We hope you find them useful."))),(0,l.kt)("p",null,"Cheers,"),(0,l.kt)("p",null,"Brad"))}m.isMDXComponent=!0}}]);