(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return i});var n=a(0),r=a.n(n),l=a(173),o=a(167),c=a(170);a(199);t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(l.a,null,r.a.createElement(o.a,null,r.a.createElement(c.a,null,t.frontmatter.date),r.a.createElement("h2",null,t.frontmatter.title),r.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:t.html}})))};var i="844253289"},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(143),i=a.n(c);a.d(t,"Link",function(){return i.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(147),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(34);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},148:function(e,t,a){e.exports={nav:"DesktopHeader-module--nav--2zrh7",navLeft:"DesktopHeader-module--nav-left--2TxDW",navCenter:"DesktopHeader-module--nav-center--ttWLF",navRight:"DesktopHeader-module--nav-right--2D3-i",title:"DesktopHeader-module--title--1J792"}},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Secret Unspoken",subtitle:"Talking about the secret most men have but won't share"}}}}},155:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(51),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},156:function(e,t,a){e.exports={navLink:"NavLink-module--nav-link--3_r93"}},159:function(e,t,a){e.exports={nav:"MobileHeader-module--nav--16cOU"}},161:function(e,t,a){e.exports={bottomNav:"MobileFooter-module--bottom-nav--DYFFf",selected:"MobileFooter-module--selected--2EPyE"}},163:function(e,t,a){e.exports={copyright:"CopyrightNotice-module--copyright--jOFQ3"}},165:function(e,t,a){e.exports={layout:"Layout-module--layout--3AkVA"}},167:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(168),o=a.n(l),c=function(e){return r.a.createElement("div",{className:o.a.column,style:{maxWidth:e.maxWidth}},e.children)};c.defaultProps={maxWidth:500},t.a=c},168:function(e,t,a){e.exports={column:"Column-module--column--3xN4I"}},170:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(171),o=a.n(l),c=function(e){return r.a.createElement("span",{className:o.a.date},e.prefix,e.children)};c.defaultProps={prefix:""},t.a=c},171:function(e,t,a){e.exports={date:"DateOfPost-module--date--DJNDV"}},173:function(e,t,a){"use strict";var n=a(154),r=a(0),l=a.n(r),o=a(144),c=a(156),i=a.n(c),s=function(e){return l.a.createElement(o.Link,{className:i.a.navLink,to:e.to},e.children)},u=a(148),m=a.n(u),d=function(e){return l.a.createElement("nav",{className:m.a.nav},l.a.createElement("div",{className:m.a.navLeft}),l.a.createElement("div",{className:m.a.navCenter},l.a.createElement(o.Link,{to:"/",className:m.a.title},l.a.createElement("h1",null,e.title))),l.a.createElement("div",{className:m.a.navRight},l.a.createElement(s,{to:"/posts"},"Posts"),l.a.createElement(s,{to:"/why"},"Why"),l.a.createElement(s,{to:"/me"},"Me")))},p=a(159),f=a.n(p),h=function(e){return l.a.createElement("nav",{className:f.a.nav},l.a.createElement(o.Link,{to:"/",className:m.a.title},l.a.createElement("h1",null,e.title)))},v=a(7),E=a.n(v),y=a(179),g=a.n(y),b=a(187),k=a.n(b),x=a(188),w=a.n(x),N=a(190),L=a.n(N),D=a(189),M=a.n(D),q=a(193),S=a(161),C=a.n(S),P=Object(q.a)(q.b,Object(q.d)(q.c),Object(q.e)("/")),F={posts:0,why:1,me:2},R=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={value:null},t.handleChange=function(e,a){t.setState({value:a})},t}E()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=P(this.props.location.pathname);this.setState({value:F[e]})},a.render=function(){return l.a.createElement(g.a,{className:C.a.bottomNav,value:this.state.value,onChange:this.handleChange,showLabels:!0},l.a.createElement(k.a,{classes:{selected:C.a.selected},label:"Posts",icon:l.a.createElement(w.a,null),component:o.Link,to:"/posts"}),l.a.createElement(k.a,{classes:{selected:C.a.selected},label:"Why",icon:l.a.createElement(M.a,null),component:o.Link,to:"/why"}),l.a.createElement(k.a,{classes:{selected:C.a.selected},label:"Me",icon:l.a.createElement(L.a,null),component:o.Link,to:"/me"}))},t}(l.a.Component),U=a(191),O=a.n(U),j=a(163),H=a.n(j),T=function(e){return l.a.createElement("div",{className:H.a.copyright},"Secret Unspoken © ",(new Date).getFullYear())},W=a(13),Q=a(192),A=a.n(Q),G=a(165),J=a.n(G);t.a=function(e){return l.a.createElement(o.StaticQuery,{query:"3289377477",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,null,l.a.createElement("title",null,t.site.siteMetadata.title),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Unica+One&text=Secret%20Unspoken",rel:"stylesheet"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Spectral|Karla",rel:"stylesheet"}),l.a.createElement("meta",{name:"Description",content:"A blog about men's sexuality and sexual addiction"}),l.a.createElement("html",{lang:"en"})),l.a.createElement(A.a,{smDown:!0},l.a.createElement(d,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.subtitle})),l.a.createElement(A.a,{mdUp:!0},l.a.createElement(h,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.subtitle})),l.a.createElement("div",{className:J.a.layout},e.children),l.a.createElement(T,null),l.a.createElement(A.a,{mdUp:!0},l.a.createElement(W.Location,null,function(e){var t=e.location;return l.a.createElement(R,{location:t})})))},data:n})}},199:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a9c9264b9b59ed38f888.js.map