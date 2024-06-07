"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9644],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,b=h["".concat(c,".").concat(d)]||h[d]||l[d]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7343:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Subscriptions",date:new Date("2018-09-09T02:52:46.000Z"),description:"Graphql subscriptions allow you subscribe to a reactive source and as new data arrives a graphql query is applied over that data and the results are passed on."},c="Subscriptions",u={unversionedId:"subscriptions",id:"subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"Graphql subscriptions allow you subscribe to a reactive source and as new data arrives a graphql query is applied over that data and the results are passed on.",source:"@site/documentation/subscriptions.md",sourceDirName:".",slug:"/subscriptions",permalink:"/graphql-java-page/documentation/master/subscriptions",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/documentation/subscriptions.md",tags:[],version:"current",frontMatter:{title:"Subscriptions",date:"2018-09-09T02:52:46.000Z",description:"Graphql subscriptions allow you subscribe to a reactive source and as new data arrives a graphql query is applied over that data and the results are passed on."},sidebar:"tutorialSidebar",previous:{title:"SDL directives",permalink:"/graphql-java-page/documentation/master/sdl-directives"}},p=[{value:"Subscription Queries",id:"subscription-queries",children:[],level:2},{value:"Subscription Data Fetchers",id:"subscription-data-fetchers",children:[],level:2}],l={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"subscriptions"},"Subscriptions"),(0,i.kt)("h2",{id:"subscription-queries"},"Subscription Queries"),(0,i.kt)("p",null,"Graphql subscriptions allow you subscribe to a reactive source and as new data arrives\na graphql query is applied over that data and the results are passed on."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"http://graphql.org/blog/subscriptions-in-graphql-and-relay/"},"http://graphql.org/blog/subscriptions-in-graphql-and-relay/")," for more general details on\ngraphql subscriptions."),(0,i.kt)("p",null,"Imagine you have an stock market pricing service and you make a graphql subscription to it like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'subscription StockCodeSubscription {\n  stockQuotes(stockCode:"IBM") {\n    dateTime\n    stockCode\n    stockPrice\n    stockPriceChange\n  }\n}\n')),(0,i.kt)("p",null,"graphql subscriptions allow a stream of ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecutionResult")," objects to be sent down each time the stock price\nchanges.  The field selection set will applied to the underlying data and are represented just like any other\ngraphql query."),(0,i.kt)("p",null,"What is special is that the initial result of a subscription query is a reactive-streams ",(0,i.kt)("inlineCode",{parentName:"p"},"Publisher")," object which you\nneed to use to get the future values."),(0,i.kt)("p",null,"You need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"SubscriptionExecutionStrategy")," as your execution strategy as it has the support for the reactive-streams APIs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"GraphQL graphQL = GraphQL\n        .newGraphQL(schema)\n        .subscriptionExecutionStrategy(new SubscriptionExecutionStrategy())\n        .build();\n\nExecutionResult executionResult = graphQL.execute(query);\n\nPublisher<ExecutionResult> stockPriceStream = executionResult.getData();\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Publisher<ExecutionResult>")," here is the publisher of a stream of events.  You need to subscribe to this with your processing\ncode which will look something like the following"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GraphQL graphQL = GraphQL\n        .newGraphQL(schema)\n        .subscriptionExecutionStrategy(new SubscriptionExecutionStrategy())\n        .build();\n\nString query = "" +\n        "    subscription StockCodeSubscription {\\n" +\n        "        stockQuotes(stockCode:\\"IBM\\") {\\n" +\n        "            dateTime\\n" +\n        "            stockCode\\n" +\n        "            stockPrice\\n" +\n        "            stockPriceChange\\n" +\n        "        }\\n" +\n        "    }\\n";\n\nExecutionResult executionResult = graphQL.execute(query);\n\nPublisher<ExecutionResult> stockPriceStream = executionResult.getData();\n\nAtomicReference<Subscription> subscriptionRef = new AtomicReference<>();\nstockPriceStream.subscribe(new Subscriber<ExecutionResult>() {\n\n    @Override\n    public void onSubscribe(Subscription s) {\n        subscriptionRef.set(s);\n        s.request(1);\n    }\n\n    @Override\n    public void onNext(ExecutionResult er) {\n        //\n        // process the next stock price\n        //\n        processStockPriceChange(er.getData());\n\n        //\n        // ask the publisher for one more item please\n        //\n        subscriptionRef.get().request(1);\n    }\n\n    @Override\n    public void onError(Throwable t) {\n        //\n        // The upstream publishing data source has encountered an error\n        // and the subscription is now terminated.  Real production code needs\n        // to decide on a error handling strategy.\n        //\n    }\n\n    @Override\n    public void onComplete() {\n        //\n        // the subscription has completed.  There is not more data\n        //\n    }\n});\n')),(0,i.kt)("p",null,"You are now writing reactive-streams code to consume a series of ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecutionResults"),".  You can see\nmore details on reactive-streams code here ",(0,i.kt)("a",{parentName:"p",href:"http://www.reactive-streams.org/"},"http://www.reactive-streams.org/")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RxJava")," is a popular implementation of reactive-streams.  Check out ",(0,i.kt)("a",{parentName:"p",href:"http://reactivex.io/intro.html"},"http://reactivex.io/intro.html")," to find out more\nabout creating Publishers of data and Subscriptions to that data."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Project Reactor")," is another popular implementation of reactive-streams.  Check out ",(0,i.kt)("a",{parentName:"p",href:"https://projectreactor.io/"},"https://projectreactor.io/")," as well."),(0,i.kt)("p",null,"graphql-java only produces a stream of results.  It does not concern itself with sending these over the network on things\nlike web sockets and so on.  That is important but not a concern of the base graphql-java library."),(0,i.kt)("p",null,"We have put together a basic example of using websockets (backed by Jetty) with a simulated stock price application that\nis built using RxJava."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java-subscription-example"},"https://github.com/graphql-java/graphql-java-subscription-example")," for more detailed code on handling network concerns and\nthe like."),(0,i.kt)("h2",{id:"subscription-data-fetchers"},"Subscription Data Fetchers"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DataFetcher")," behind a subscription field is responsible for creating the ",(0,i.kt)("inlineCode",{parentName:"p"},"Publisher")," of data.  The objects\nreturn by this Publisher will be mapped over the graphql query as each arrives and then sent back out as an execution result."),(0,i.kt)("p",null,"You data fetcher is going to look something like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'DataFetcher<Publisher<StockInfo>> publisherDataFetcher = new DataFetcher<Publisher<StockInfo>>() {\n    @Override\n    public Publisher<StockInfo> get(DataFetchingEnvironment environment) {\n        String stockCodeArg = environment.getArgument("stockCode");\n        return buildPublisherForStockCode(stockCodeArg);\n    }\n};\n')),(0,i.kt)("p",null,"Now the exact details of how you get that stream of events is up to you and your reactive code.  graphql-java\ngives you a way to map the graphql query fields over that stream of objects just like a standard graphql query."))}h.isMDXComponent=!0}}]);