(this["webpackJsonptop-news"]=this["webpackJsonptop-news"]||[]).push([[0],{106:function(e,t,a){e.exports=a.p+"static/media/no_image.cdaec342.png"},183:function(e,t,a){e.exports=a(342)},188:function(e,t,a){},189:function(e,t,a){},342:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(36),r=a.n(s),o=(a(188),a(75)),i=a(76),c=a(51),u=a(83),h=a(82),d=(a(189),a(355)),y=a(172),g=a(343),m=a(31),p=a(106),v=a.n(p),k=a(77),w=a.n(k),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"ui container",style:{minHeight:"65vh"}},l.a.createElement(d.a.Group,{stackable:!0,itemsPerRow:"3"},this.props.articles.map((function(e,t){return l.a.createElement(d.a,{key:t,color:"grey",centered:!0},l.a.createElement(y.a,{label:{color:"grey",content:"".concat(e.source.name),ribbon:!0,src:v.a},src:null!==e.urlToImage?e.urlToImage:v.a}),l.a.createElement(d.a.Content,null,l.a.createElement(d.a.Meta,null,w()(e.publishedAt,"ddd, mmmm dS - h:MM TT")),l.a.createElement("br",null),l.a.createElement(d.a.Header,null,e.title),l.a.createElement("br",null),l.a.createElement(d.a.Description,null,e.description)),l.a.createElement("br",null),l.a.createElement(g.a,{animated:"vertical",color:"grey",href:e.url,target:"_blank"},l.a.createElement(g.a.Content,{visible:!0},"Read more..."),l.a.createElement(g.a.Content,{hidden:!0},l.a.createElement(m.a,{name:"arrow right"}))))}))))}}]),a}(n.Component),x=[{key:1,text:"General",value:"general"},{key:2,text:"Technology",value:"technology"},{key:3,text:"Business",value:"business"},{key:4,text:"Entertainment",value:"entertainment"},{key:5,text:"Science",value:"science"},{key:6,text:"Health",value:"health"},{key:7,text:"Sports",value:"sports"}],E=[{key:1,text:"UAE",value:"ae"},{key:5,text:"Belgium",value:"be"},{key:7,text:"Brazil",value:"br"},{key:8,text:"Canada",value:"ca"},{key:10,text:"China",value:"cn"},{key:12,text:"Cuba",value:"cu"},{key:14,text:"Germany",value:"de"},{key:15,text:"Egypt",value:"eg"},{key:16,text:"France",value:"fr"},{key:17,text:"UK",value:"gb"},{key:19,text:"Hong Kong",value:"hk"},{key:21,text:"Indonesia",value:"id"},{key:22,text:"Ireland",value:"ie"},{key:23,text:"Israel",value:"il"},{key:25,text:"Italy",value:"it"},{key:26,text:"Japan",value:"jp"},{key:27,text:"Korea",value:"kr"},{key:33,text:"Nigeria",value:"ng"},{key:35,text:"Norway",value:"no"},{key:36,text:"New Zealand",value:"nz"},{key:37,text:"Philippines",value:"ph"},{key:42,text:"Russia",value:"ru"},{key:43,text:"Saudi Arabia",value:"sa"},{key:44,text:"Sweden",value:"se"},{key:45,text:"Singapore",value:"sg"},{key:48,text:"Thailand",value:"th"},{key:49,text:"Turkey",value:"tr"},{key:52,text:"USA",value:"us"},{key:54,text:"South Africa",value:"za"}],b=[{key:1,text:"Arabic",value:"ar"},{key:2,text:"German",value:"de"},{key:3,text:"English",value:"en"},{key:4,text:"Spanish",value:"es"},{key:5,text:"French",value:"fr"},{key:6,text:"Hebrew",value:"he"},{key:7,text:"Italian",value:"it"},{key:8,text:"Dutch",value:"nl"},{key:9,text:"Norwegian",value:"no"},{key:10,text:"Portuguese",value:"pt"},{key:11,text:"Russian",value:"ru"},{key:12,text:"Northern",value:"se"},{key:13,text:"Chinese",value:"zh"}],R=a(357),S=a(351),C=a(58),T=a(352),N=a(353),P=a(358),H=a(108),D=a.n(H),I=(a(310),a(160)),j=a.n(I),K=function(){return l.a.createElement("div",{style:{margin:"auto",width:"3.35rem"}},l.a.createElement(j.a,{type:"spin",color:"RGB(27, 28, 29)",height:"100%",width:"100%"}))},B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e=new Date((new Date).setDate((new Date).getDate()-20));n.setState({date:w()(e,"yyyy-mm-dd")}),n.fetchTopHeadlines(n.state.country,n.state.category,n.state.page)},n.fetchTopHeadlines=function(e,t,a){n.setState({loading:!0,dailyQuotaReached:!1,showHeadlines:!0}),D.a.get("".concat("3.97.156.176:5333","/TopHeadlines"),{params:{country:e,category:t,page:a}}).then((function(e){"error"!==e.data?n.setState({totalResults:e.data.totalResults,articles:e.data.articles}):n.setState({dailyQuotaReached:!0}),n.setState({loading:!1})})).catch((function(e){console.log(e.message),n.setState({loading:!1,dailyQuotaReached:!0})}))},n.changePage=function(e,t){e.persist(),n.setState({page:t.activePage}),n.state.showHeadlines?n.fetchTopHeadlines(n.state.country,n.state.category,t.activePage):n.fetchNewsWithKeywords(n.state.keyword,t.activePage)},n.onKeyPress=function(e){"Enter"===e.key&&n.handleButtonSearch()},n.handleButtonSearch=function(e){n.setState({page:"1"}),n.fetchNewsWithKeywords(n.state.keyword,"1"),n.input.value=""},n.getKeywordTyped=function(e,t){e.persist(),n.setState({keyword:t.value})},n.handleLanguageDropdownChange=function(e,t){e.persist(),n.setState({language:t.value})},n.handleCountryDropdownChange=function(e,t){e.persist(),n.setState({country:t.value,page:"1"}),n.fetchTopHeadlines(t.value,n.state.category)},n.handleCategoryDropdownChange=function(e,t){e.persist(),n.setState({category:t.value,page:"1"}),n.fetchTopHeadlines(n.state.country,t.value)},n.state={totalResults:"",articles:[],country:"ca",category:"general",keyword:"",language:"en",date:"",page:"1",showHeadlines:!0,keywordTyped:"",dailyQuotaReached:!1,loading:!0},n.fetchTopHeadlines=n.fetchTopHeadlines.bind(Object(c.a)(n)),n.fetchNewsWithKeywords=n.fetchNewsWithKeywords.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"fetchNewsWithKeywords",value:function(e,t){var a=this;e.length>0&&(this.setState({loading:!0,dailyQuotaReached:!1,showHeadlines:!1,keywordTyped:e}),D.a.get("".concat("3.97.156.176:5333","/SearchResults"),{params:{keyword:e,activePage:t,language:this.state.language,date:this.state.date}}).then((function(e){"error"!==e.data?a.setState({totalResults:e.data.totalResults,articles:e.data.articles}):a.setState({dailyQuotaReached:!0}),a.setState({loading:!1})})).catch((function(e){console.log(e.message),a.setState({loading:!1,dailyQuotaReached:!0})})))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(R.a,{inverted:!0,stackable:!0,attached:!0},l.a.createElement(S.a,null,l.a.createElement("a",{href:"https://samitamerarar.github.io/top-news",style:{display:"flex",textDecoration:"none"}},l.a.createElement(R.a.Item,{color:"red",active:!0,header:!0},"Top News")),l.a.createElement(C.a,{style:{textAlign:"right"},pointing:!0,scrolling:!0,openOnFocus:!0,inline:!0,item:!0,placeholder:"Country",defaultValue:"ca",onChange:this.handleCountryDropdownChange,options:E}),l.a.createElement(C.a,{openOnFocus:!0,inline:!0,item:!0,placeholder:"Category",defaultValue:"general",onChange:this.handleCategoryDropdownChange,options:x}),l.a.createElement("div",{className:"right menu",style:{padding:"0.25rem"}},l.a.createElement(T.a,{type:"text",placeholder:"Search by keyword...",action:!0,onChange:this.getKeywordTyped,onKeyPress:this.onKeyPress},l.a.createElement("input",{name:"input",ref:function(t){return e.input=t}}),l.a.createElement(N.a,{compact:!0,options:b,defaultValue:"en",onChange:this.handleLanguageDropdownChange}),l.a.createElement(g.a,{color:"blue",type:"submit",onClick:this.handleButtonSearch},"Search"))))),l.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"2rem",marginBottom:"2.5rem"}},l.a.createElement(P.a,{boundaryRange:1,siblingRange:1,ellipsisItem:null,firstItem:null,lastItem:null,totalPages:(this.state.totalResults?Math.ceil(this.state.totalResults/20):1)>5?5:Math.ceil(this.state.totalResults/20),onPageChange:this.changePage,activePage:this.state.page})),this.state.showHeadlines&&!this.state.dailyQuotaReached&&l.a.createElement("div",{className:"searchResults"},l.a.createElement("h2",{className:"ui header"},"Showing ",x.find((function(t){return t.value===e.state.category})).text," Top News in ",E.find((function(t){return t.value===e.state.country})).text)),!this.state.showHeadlines&&!this.state.dailyQuotaReached&&l.a.createElement("div",{className:"searchResults"},l.a.createElement("h2",{className:"ui header"},"Showing search results for '",this.state.keywordTyped,"'"),l.a.createElement("div",{className:"ui header searchResults"},l.a.createElement("a",{href:"https://samitamerarar.github.io/top-news",style:{textDecoration:"none",outline:"none"}},"Go back to Canada Top News"))),this.state.dailyQuotaReached&&l.a.createElement("div",{className:"searchResults"},l.a.createElement("h3",{className:"ui header",style:{color:"red"}},l.a.createElement("div",null,"Unable to contact the server"))),this.state.loading&&l.a.createElement(K,null),l.a.createElement(f,{articles:this.state.articles}),l.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"35px"}},l.a.createElement(P.a,{boundaryRange:1,siblingRange:1,ellipsisItem:null,firstItem:null,lastItem:null,totalPages:(this.state.totalResults?Math.ceil(this.state.totalResults/20):1)>5?5:Math.ceil(this.state.totalResults/20),onPageChange:this.changePage,activePage:this.state.page})),l.a.createElement("footer",{style:{marginTop:"5rem",textAlign:"center",backgroundColor:"RGB(27, 28, 29)",padding:"0.8rem",width:"100%"}},l.a.createElement("a",{href:"https://newsapi.org/",target:"_blank",rel:"noopener noreferrer",style:{color:"RGB(33, 133, 208)",outline:"none"}},"Powered by NewsAPI.org"),l.a.createElement("div",{style:{color:"white"}},"this is one of my first react projects :)")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(341);r.a.render(l.a.createElement(B,null),document.getElementById("root"))}},[[183,1,2]]]);
//# sourceMappingURL=main.b25af422.chunk.js.map