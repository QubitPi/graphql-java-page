"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3647],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},h),{},{components:r})):a.createElement(f,i({ref:t},h))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8878:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return h},toc:function(){return u},default:function(){return m}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"GraphQL spec releases are not important",authors:"andi",slug:"spec-releases-are-not-important"},l=void 0,p={permalink:"/graphql-java-page/blog/spec-releases-are-not-important",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/blog/blog/2021-02-12-spec-releases-are-not-important.md",source:"@site/blog/2021-02-12-spec-releases-are-not-important.md",title:"GraphQL spec releases are not important",description:"Every once in a while somebody asks which version of the GraphQL spec",date:"2021-02-12T00:00:00.000Z",formattedDate:"February 12, 2021",tags:[],readingTime:1.945,truncated:!1,authors:[{name:"Andreas Marek",title:"Maintainer of GraphQL Java",url:"https://github.com/andimarek",imageURL:"https://github.com/andimarek.png",key:"andi"}],prevItem:{title:"GraphQL Java 17 released and an update about LTS",permalink:"/graphql-java-page/blog/17-released-and-lts"},nextItem:{title:"GraphQL Java and Threads",permalink:"/graphql-java-page/blog/threads"}},h={authorsImageUrls:[void 0]},u=[],c={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Every once in a while somebody asks which version of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphql-spec"},"GraphQL spec"),"\nGraphQL Java supports. The general answer is: the current draft."),(0,o.kt)("p",null,"The bigger question behind this is: what is the information you want get out of this question?\nWhy do you ask this question?"),(0,o.kt)("p",null,"The thing is: spec releases are not really important and people misinterpret what they mean."),(0,o.kt)("h1",{id:"evolution-of-the-spec-process"},"Evolution of the spec process"),(0,o.kt)("p",null,"The GraphQL spec has five releases so far:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"two in 2015 (including the first published version)"),(0,o.kt)("li",{parentName:"ul"},"two in 2016"),(0,o.kt)("li",{parentName:"ul"},"one in 2018")),(0,o.kt)("p",null,"As you can see in the first two years spec releases where quite frequently, but after the one in 2018,\nthere has not been a release."),(0,o.kt)("p",null,"2017 was also the year the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphql-wg"},"GraphQL Working Group")," was established.\nThis group is the main forum to evolve the spec since then. Over time this group established a very high bar\nfor every PR to be merged into the spec. (See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphql-spec/blob/main/CONTRIBUTING.md"},"Contributing guidelines"),")"),(0,o.kt)("p",null,"With this high standard set, nearly all implementations (including GraphQL Java) started to implement every\nmerged PR instead of waiting for a big release. Because they are very confident this change will be released\nin this form, it is safe to implement it right away."),(0,o.kt)("p",null,"This treatment of merged PRs as de-factor releases is now an established rule in the GraphQL community.\nThis explains why the whole GraphQL ecosystem has evolved a lot since 2018, even without a release."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A release is not needed anymore if every merged PR is like a mini release.")),(0,o.kt)("p",null,"Future releases are more like an\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphql-wg/blob/main/notes/2021-02-04.md#promoting-and-documenting-spec-release-5m-brian"},"opportunity to look back and promote the work since the last release.")),(0,o.kt)("p",null,'I personally hope that we make this de-facto rule, that evey PR is a mini release, more official.\nWe should not use the word "draft" any more, but every merged PR should automatically result in a\nnew GraphQL spec version which is formally approved by the ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphql-wg/blob/main/GraphQL-TSC.md"},"GraphQL TSC.")),(0,o.kt)("p",null,'Coming back to the question: "Which spec version of GraphQL is supported"?\nI hope by now it is clear why this question is probably not really helpful.'),(0,o.kt)("p",null,"It is better to think about certain features you want to discuss instead referring to the spec releases."),(0,o.kt)("h1",{id:"feedback-or-questions"},"Feedback or questions"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/discussions"},"GitHub Discussions")," for general feedback and questions."),(0,o.kt)("p",null,"You can also contact us on Twitter: ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/graphql_java"},"@graphql_java")))}m.isMDXComponent=!0}}]);