"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5296],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,b=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9765:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Contributions",date:new Date("2018-09-09T02:52:46.000Z"),description:"Every contribution to make this project better is welcome. Thank you!"},u="Contributions",p={unversionedId:"contributions",id:"contributions",isDocsHomePage:!1,title:"Contributions",description:"Every contribution to make this project better is welcome. Thank you!",source:"@site/documentation/contributions.md",sourceDirName:".",slug:"/contributions",permalink:"/documentation/master/contributions",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/documentation/contributions.md",tags:[],version:"current",frontMatter:{title:"Contributions",date:"2018-09-09T02:52:46.000Z",description:"Every contribution to make this project better is welcome. Thank you!"},sidebar:"tutorialSidebar",previous:{title:"Concerns",permalink:"/documentation/master/concerns"},next:{title:"Data fetching",permalink:"/documentation/master/data-fetching"}},c=[{value:"Build and test locally",id:"build-and-test-locally",children:[],level:2}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributions"},"Contributions"),(0,o.kt)("p",null,"Every contribution to make this project better is welcome: Thank you!"),(0,o.kt)("p",null,"In order to make this as pleasant as possible for everybody involved, here are some tips:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Respect the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/blob/master/CODE_OF_CONDUCT.md"},"Code of Conduct"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Before opening an Issue to report a bug, please try the latest development version. It can happen that the problem has been already solved.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Please use Markdown to format your comments properly. If you are not familiar with that: ",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/articles/getting-started-with-writing-and-formatting-on-github"},"Getting started with writing and formatting on GitHub"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For Pull Requests:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Here are some ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/blog/1943-how-to-write-the-perfect-pull-request"},"general tips"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Please be as focused and clear as possible and don't mix concerns. This includes refactorings mixed with bug-fixes/features, see ",(0,o.kt)("a",{parentName:"p",href:"http://tirania.org/blog/archive/2010/Dec-31.html"},"Open Source Contribution Etiquette"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It would be good to add automatic tests. All tests are written in ",(0,o.kt)("a",{parentName:"p",href:"http://spockframework.github.io/spock/docs/1.0/index.html"},"Spock"),"."))))),(0,o.kt)("h2",{id:"build-and-test-locally"},"Build and test locally"),(0,o.kt)("p",null,"Clone the repo and type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew build\n")),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"build/libs")," you will find the jar file."),(0,o.kt)("p",null,"Running the tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew test\n")),(0,o.kt)("p",null,"Installing in the local Maven repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew install\n")))}m.isMDXComponent=!0}}]);