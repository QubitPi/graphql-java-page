"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1431],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),p=r,m=u["".concat(c,".").concat(p)]||u[p]||h[p]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3349:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={title:"Batching",date:new Date("2021-08-10T02:52:46.000Z"),description:"How to avoid the dreaded N+1 calls for data and make your graphql system more efficient"},c="Using Dataloader",s={unversionedId:"batching",id:"version-v22/batching",isDocsHomePage:!1,title:"Batching",description:"How to avoid the dreaded N+1 calls for data and make your graphql system more efficient",source:"@site/versioned_docs/version-v22/batching.md",sourceDirName:".",slug:"/batching",permalink:"/graphql-java-page/documentation/batching",editUrl:"https://github.com/graphql-java/graphql-java-page/edit/master/versioned_docs/version-v22/batching.md",tags:[],version:"v22",frontMatter:{title:"Batching",date:"2021-08-10T02:52:46.000Z",description:"How to avoid the dreaded N+1 calls for data and make your graphql system more efficient"},sidebar:"version-v22/tutorialSidebar",previous:{title:"Getting started",permalink:"/graphql-java-page/documentation/getting-started"},next:{title:"Concerns",permalink:"/graphql-java-page/documentation/concerns"}},d=[{value:"Data Loader only works with AsyncExecutionStrategy",id:"data-loader-only-works-with-asyncexecutionstrategy",children:[],level:2},{value:"Per Request Data Loaders",id:"per-request-data-loaders",children:[],level:2},{value:"Async Calls On Your Batch Loader Function Only",id:"async-calls-on-your-batch-loader-function-only",children:[],level:2},{value:"Passing context to your data loader",id:"passing-context-to-your-data-loader",children:[],level:2}],h={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-dataloader"},"Using Dataloader"),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql"),", you are likely to making queries on a graph of data (no surprises there).  However, it's easy\nto implement inefficient code with naive loading of a graph of data."),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"java-dataloader")," will help you to make this a more efficient process by both caching and batching requests for that graph of data items.  If ",(0,o.kt)("inlineCode",{parentName:"p"},"dataloader"),"\nhas seen a data item before, it will have cached the value and will return it without having to ask for it again."),(0,o.kt)("p",null,"Imagine we have the StarWars query outlined below.  It asks us to find a hero, and their friend's names, and their friend's friend's\nnames.  It is likely that many of these people will be friends in common."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  hero {\n    name\n    friends {\n      name\n      friends {\n        name\n      }\n    }\n  }\n}\n")),(0,o.kt)("p",null,"The result of this query is displayed below. You can see that Han, Leia, Luke and R2-D2 are a tight-knit bunch of friends and\nshare many friends in common."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hero": {\n    "name": "R2-D2",\n    "friends": [\n      {\n        "name": "Luke Skywalker",\n        "friends": [\n          {"name": "Han Solo"},\n          {"name": "Leia Organa"},\n          {"name": "C-3PO"},\n          {"name": "R2-D2"}\n        ]\n      },\n      {\n        "name": "Han Solo",\n        "friends": [\n          {"name": "Luke Skywalker"},\n          {"name": "Leia Organa"},\n          {"name": "R2-D2"}\n        ]\n      },\n      {\n        "name": "Leia Organa",\n        "friends": [\n          {"name": "Luke Skywalker"},\n          {"name": "Han Solo"},\n          {"name": "C-3PO"},\n          {"name": "R2-D2"}\n        ]\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"A naive implementation would call a ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFetcher")," to retrieve a person object every time it was invoked."),(0,o.kt)("p",null,"In this case it would be ",(0,o.kt)("em",{parentName:"p"},"15")," calls over the network, even though the group of people have a lot of common friends.\nWith ",(0,o.kt)("inlineCode",{parentName:"p"},"dataloader")," you can make the ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql")," query much more efficient."),(0,o.kt)("p",null,"As ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql")," descends each level of the query (e.g., as it processes ",(0,o.kt)("inlineCode",{parentName:"p"},"hero")," and then ",(0,o.kt)("inlineCode",{parentName:"p"},"friends")," and then for each of their ",(0,o.kt)("inlineCode",{parentName:"p"},"friends"),'),\nthe data loader is called to "promise" to deliver a person object.  At each level ',(0,o.kt)("inlineCode",{parentName:"p"},"dataloader.dispatch()")," will be\ncalled to fire off the batch requests for that part of the query. With caching turned on (the default) then\nany previously returned person will be returned as-is for no cost."),(0,o.kt)("p",null,"In the above example there are only ",(0,o.kt)("em",{parentName:"p"},"5")," unique people mentioned but with caching and batching retrieval in place there will be only\n",(0,o.kt)("em",{parentName:"p"},"3")," calls to the batch loader function.  ",(0,o.kt)("em",{parentName:"p"},"3")," calls over the network or to a database is much better than ",(0,o.kt)("em",{parentName:"p"},"15")," calls, you will agree."),(0,o.kt)("p",null,"If you use capabilities like ",(0,o.kt)("inlineCode",{parentName:"p"},"java.util.concurrent.CompletableFuture.supplyAsync()")," then you can make it even more efficient by making the\nremote calls asynchronous to the rest of the query.  This will make it even more timely since multiple calls can happen at once\nif need be."),(0,o.kt)("p",null,"Here is how you might put this in place:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'//\n// a batch loader function that will be called with N or more keys for batch loading\n// This can be a singleton object since it\'s stateless\n//\nBatchLoader<String, Object> characterBatchLoader = new BatchLoader<String, Object>() {\n    @Override\n    public CompletionStage<List<Object>> load(List<String> keys) {\n        //\n        // we use supplyAsync() of values here for maximum parallelisation\n        //\n        return CompletableFuture.supplyAsync(() -> getCharacterDataViaBatchHTTPApi(keys));\n    }\n};\n\n//\n// use this data loader in the data fetchers associated with characters and put them into\n// the graphql schema (not shown)\n//\nDataFetcher<?> heroDataFetcher = new DataFetcher<Object>() {\n    @Override\n    public Object get(DataFetchingEnvironment environment) {\n        DataLoader<String, Object> dataLoader = environment.getDataLoader("character");\n        return dataLoader.load("2001"); // R2D2\n    }\n};\n\nDataFetcher<?> friendsDataFetcher = new DataFetcher<Object>() {\n    @Override\n    public Object get(DataFetchingEnvironment environment) {\n        StarWarsCharacter starWarsCharacter = environment.getSource();\n        List<String> friendIds = starWarsCharacter.getFriendIds();\n        DataLoader<String, Object> dataLoader = environment.getDataLoader("character");\n        return dataLoader.loadMany(friendIds);\n    }\n};\n\n//\n// this instrumentation implementation will dispatch all the data loaders\n// as each level of the graphql query is executed and hence make batched objects\n// available to the query and the associated DataFetchers\n//\n// In this case we use options to make it keep statistics on the batching efficiency\n//\nDataLoaderDispatcherInstrumentationOptions options = DataLoaderDispatcherInstrumentationOptions\n        .newOptions().includeStatistics(true);\n\nDataLoaderDispatcherInstrumentation dispatcherInstrumentation\n        = new DataLoaderDispatcherInstrumentation(options);\n\n//\n// now build your graphql object and execute queries on it.\n// the data loader will be invoked via the data fetchers on the\n// schema fields\n//\nGraphQL graphQL = GraphQL.newGraphQL(buildSchema())\n        .instrumentation(dispatcherInstrumentation)\n        .build();\n\n//\n// a data loader for characters that points to the character batch loader\n//\n// Since data loaders are stateful, they are created per execution request.\n//\nDataLoader<String, Object> characterDataLoader = DataLoaderFactory.newDataLoader(characterBatchLoader);\n\n//\n// DataLoaderRegistry is a place to register all data loaders in that needs to be dispatched together\n// in this case there is 1 but you can have many.\n//\n// Also note that the data loaders are created per execution request\n//\nDataLoaderRegistry registry = new DataLoaderRegistry();\nregistry.register("character", characterDataLoader);\n\nExecutionInput executionInput = newExecutionInput()\n        .query(getQuery())\n        .dataLoaderRegistry(registry)\n        .build();\n\nExecutionResult executionResult = graphQL.execute(executionInput);\n')),(0,o.kt)("p",null,"In this example we explicitly added the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaderDispatcherInstrumentation")," because we wanted to tweak its options.  However,\nit will be automatically added for you if you don't add it manually."),(0,o.kt)("p",null,"You can read a lot more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"java-dataloader")," API in detail over\nat ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/java-dataloader#readme"},"https://github.com/graphql-java/java-dataloader"),"."),(0,o.kt)("h2",{id:"data-loader-only-works-with-asyncexecutionstrategy"},"Data Loader only works with AsyncExecutionStrategy"),(0,o.kt)("p",null,"The only execution that works with DataLoader is ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql.execution.AsyncExecutionStrategy"),".  This is because this execution strategy knows\nwhen the most optimal time to dispatch() your load calls is.  It does this by deeply tracking how many fields are outstanding and whether they\nare list values and so on."),(0,o.kt)("p",null,"Other execution strategies such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecutorServiceExecutionStrategy")," can't do this and hence if the data loader code detects\nyou are not using ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncExecutionStrategy")," then it will simply dispatch the data loader as each field is encountered.  You\nmay get ",(0,o.kt)("inlineCode",{parentName:"p"},"caching")," of values, but you will not get ",(0,o.kt)("inlineCode",{parentName:"p"},"batching")," of them."),(0,o.kt)("h2",{id:"per-request-data-loaders"},"Per Request Data Loaders"),(0,o.kt)("p",null,"If you are serving web requests then the data can be specific to the user requesting it. If you have user specific data then you will not want to\ncache data meant for user A to then later give it to user B in a subsequent request."),(0,o.kt)("p",null,"The scope of your DataLoader instances is important. You will want to create them per web request to\nensure data is only cached within that web request and no more. It also ensures that a ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," call\nonly affects that graphql execution and no other."),(0,o.kt)("p",null,"DataLoaders by default act as caches.  If they have seen a value before for a key then they will automatically return\nit in order to be efficient.  They cache promises to a value and optionally the value itself."),(0,o.kt)("p",null,"If your data can be shared across web requests then you might want to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"ValueCache")," implementation of your data loaders, so they share\ndata via caching systems like memcached or redis."),(0,o.kt)("p",null,"You still create data loaders per request, however the caching layer will allow data sharing (if that's suitable)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"ValueCache<String, Object> crossRequestValueCache = new ValueCache<String, Object>() {\n    @Override\n    public CompletableFuture<Object> get(String key) {\n        return redisIntegration.getValue(key);\n    }\n\n    @Override\n    public CompletableFuture<Object> set(String key, Object value) {\n        return redisIntegration.setValue(key, value);\n    }\n\n    @Override\n    public CompletableFuture<Void> delete(String key) {\n        return redisIntegration.clearKey(key);\n    }\n\n    @Override\n    public CompletableFuture<Void> clear() {\n        return redisIntegration.clearAll();\n    }\n};\n\nDataLoaderOptions options = DataLoaderOptions.newOptions().setValueCache(crossRequestValueCache);\n\nDataLoader<String, Object> dataLoader = DataLoaderFactory.newDataLoader(batchLoader, options);\n")),(0,o.kt)("h2",{id:"async-calls-on-your-batch-loader-function-only"},"Async Calls On Your Batch Loader Function Only"),(0,o.kt)("p",null,"The data loader code pattern works by combining all the outstanding data loader calls into more efficient batch loading calls."),(0,o.kt)("p",null,"graphql-java tracks what outstanding data loader calls have been made, and it is its responsibility to call ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch"),"\nin the background at the most optimal time, which is when all graphql fields have been examined and dispatched."),(0,o.kt)("p",null,"However, there is a code pattern that will cause your data loader calls to never complete, and these ",(0,o.kt)("em",{parentName:"p"},"MUST")," be avoided.  This bad\npattern consists of making an asynchronous off thread call to a ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," in your data fetcher."),(0,o.kt)("p",null,"The following will not work (it will never complete)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BatchLoader<String, Object> batchLoader = new BatchLoader<String, Object>() {\n    @Override\n    public CompletionStage<List<Object>> load(List<String> keys) {\n        return CompletableFuture.completedFuture(getTheseCharacters(keys));\n    }\n};\n\nDataLoader<String, Object> characterDataLoader = DataLoaderFactory.newDataLoader(batchLoader);\n\n// .... later in your data fetcher\n\nDataFetcher<?> dataFetcherThatCallsTheDataLoader = new DataFetcher<Object>() {\n    @Override\n    public Object get(DataFetchingEnvironment environment) {\n        //\n        // Don\'t DO THIS!\n        //\n        return CompletableFuture.supplyAsync(() -> {\n            String argId = environment.getArgument("id");\n            DataLoader<String, Object> characterLoader = environment.getDataLoader("characterLoader");\n            return characterLoader.load(argId);\n        });\n    }\n};\n')),(0,o.kt)("p",null,"In the example above, the call to ",(0,o.kt)("inlineCode",{parentName:"p"},"characterDataLoader.load(argId)")," can happen some time in the future on another thread.  The graphql-java\nengine has no way of knowing when it's a good time to dispatch outstanding ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," calls and hence the data loader call might never complete\nas expected and no results will be returned."),(0,o.kt)("p",null,"Remember a data loader call is just a promise to actually get a value later when it's an optimal time for all outstanding calls to be batched\ntogether.  The most optimal time is when the graphql field tree has been examined and all field values are currently dispatched."),(0,o.kt)("p",null,"The following is how you can still have asynchronous code, by placing it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"BatchLoader")," itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BatchLoader<String, Object> batchLoader = new BatchLoader<String, Object>() {\n    @Override\n    public CompletionStage<List<Object>> load(List<String> keys) {\n        return CompletableFuture.supplyAsync(() -> getTheseCharacters(keys));\n    }\n};\n\nDataLoader<String, Object> characterDataLoader = DataLoaderFactory.newDataLoader(batchLoader);\n\n// .... later in your data fetcher\n\nDataFetcher<?> dataFetcherThatCallsTheDataLoader = new DataFetcher<Object>() {\n    @Override\n    public Object get(DataFetchingEnvironment environment) {\n        //\n        // This is OK\n        //\n        String argId = environment.getArgument("id");\n        DataLoader<String, Object> characterLoader = environment.getDataLoader("characterLoader");\n        return characterLoader.load(argId);\n    }\n};\n')),(0,o.kt)("p",null,"Notice above the ",(0,o.kt)("inlineCode",{parentName:"p"},"characterDataLoader.load(argId)")," returns immediately.  This will enqueue the call for data until a later time when all\nthe graphql fields are dispatched."),(0,o.kt)("p",null,"Then later when the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," is dispatched, its ",(0,o.kt)("inlineCode",{parentName:"p"},"BatchLoader")," function is called.  This code can be asynchronous so that if you have multiple batch loader\nfunctions they all can run at once.  In the code above ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture.supplyAsync(() -> getTheseCharacters(keys));")," will run the ",(0,o.kt)("inlineCode",{parentName:"p"},"getTheseCharacters"),"\nmethod in another thread."),(0,o.kt)("h2",{id:"passing-context-to-your-data-loader"},"Passing context to your data loader"),(0,o.kt)("p",null,"The data loader library supports two types of context being passed to the batch loader. The first is\nan overall context object per dataloader, and the second is a map of per loaded key context objects."),(0,o.kt)("p",null,"This allows you to pass in the extra details you may need to make downstream calls.  The dataloader key is used\nin the caching of results, but the context objects can be made available to help with the call."),(0,o.kt)("p",null,"So in the example below we have an overall security context object that gives out a call token, and we also pass the graphql source\nobject to each ",(0,o.kt)("inlineCode",{parentName:"p"},"dataLoader.load()")," call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BatchLoaderWithContext<String, Object> batchLoaderWithCtx = new BatchLoaderWithContext<String, Object>() {\n\n    @Override\n    public CompletionStage<List<Object>> load(List<String> keys, BatchLoaderEnvironment loaderContext) {\n        //\n        // we can have an overall context object\n        SecurityContext securityCtx = loaderContext.getContext();\n        //\n        // and we can have a per key set of context objects\n        Map<Object, Object> keysToSourceObjects = loaderContext.getKeyContexts();\n\n        return CompletableFuture.supplyAsync(() -> getTheseCharacters(securityCtx.getToken(), keys, keysToSourceObjects));\n    }\n};\n\n// ....\n\nSecurityContext securityCtx = SecurityContext.newSecurityContext();\n\nBatchLoaderContextProvider contextProvider = new BatchLoaderContextProvider() {\n    @Override\n    public Object getContext() {\n        return securityCtx;\n    }\n};\n//\n// this creates an overall context for the dataloader\n//\nDataLoaderOptions loaderOptions = DataLoaderOptions.newOptions().setBatchLoaderContextProvider(contextProvider);\nDataLoader<String, Object> characterDataLoader = DataLoaderFactory.newDataLoader(batchLoaderWithCtx, loaderOptions);\n\n// .... later in your data fetcher\n\nDataFetcher<?> dataFetcherThatCallsTheDataLoader = new DataFetcher<Object>() {\n    @Override\n    public Object get(DataFetchingEnvironment environment) {\n        String argId = environment.getArgument("id");\n        Object source = environment.getSource();\n        //\n        // you can pass per load call contexts\n        //\n        return characterDataLoader.load(argId, source);\n    }\n};\n')))}u.isMDXComponent=!0}}]);