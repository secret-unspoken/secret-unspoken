(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(163);t.default=function(e){return r.a.createElement(l.a,null,r.a.createElement("h1",null,"/why"),r.a.createElement("p",null,"Under construction"))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(145),i=a.n(c);a.d(t,"Link",function(){return i.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(148),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(34);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e,t,a){e.exports={nav:"DesktopHeader-module--nav--2zrh7",navLeft:"DesktopHeader-module--nav-left--2TxDW",navCenter:"DesktopHeader-module--nav-center--ttWLF",navRight:"DesktopHeader-module--nav-right--2D3-i",title:"DesktopHeader-module--title--1J792"}},151:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(51),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Secret Unspoken"}}}}},154:function(e,t,a){e.exports={navLink:"NavLink-module--nav-link--3_r93"}},157:function(e,t,a){e.exports={nav:"MobileHeader-module--nav--16cOU"}},159:function(e,t,a){e.exports={bottomNav:"MobileFooter-module--bottom-nav--DYFFf",selected:"MobileFooter-module--selected--2EPyE"}},161:function(e,t,a){e.exports={layout:"Layout-module--layout--3AkVA"}},163:function(e,t,a){"use strict";var n=a(153),r=a(0),l=a.n(r),o=a(146),c=a(152),i=a.n(c),s=a(154),u=a.n(s),d=function(e){return l.a.createElement(o.Link,{className:i()(u.a.navLink,e.className),to:e.to},e.children)},m=a(150),p=a.n(m),f=function(e){return l.a.createElement("nav",{className:p.a.nav},l.a.createElement("div",{className:p.a.navLeft}),l.a.createElement("div",{className:p.a.navCenter},l.a.createElement(o.Link,{to:"/",className:p.a.title},l.a.createElement("h1",null,e.title))),l.a.createElement("div",{className:p.a.navRight},l.a.createElement(d,{to:"/posts"},"Posts"),l.a.createElement(d,{to:"/why"},"Why"),l.a.createElement(d,{to:"/me"},"Me")))},h=a(157),v=a.n(h),E=function(e){return l.a.createElement("nav",{className:v.a.nav},l.a.createElement(o.Link,{to:"/",className:p.a.title},l.a.createElement("h1",null,e.title)))},y=a(7),g=a.n(y),k=a(171),b=a.n(k),w=a(174),L=a.n(w),N=a(175),x=a.n(N),q=a(177),C=a.n(q),D=a(176),M=a.n(D),P=a(159),R=a.n(P),S=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={value:0},t.handleChange=function(e,a){t.setState({value:a})},t}return g()(t,e),t.prototype.render=function(){return l.a.createElement(b.a,{className:R.a.bottomNav,value:this.state.value,onChange:this.handleChange,showLabels:!0},l.a.createElement(L.a,{classes:{selected:R.a.selected},label:"Posts",icon:l.a.createElement(x.a,null),component:o.Link,to:"/posts"}),l.a.createElement(L.a,{classes:{selected:R.a.selected},label:"Why",icon:l.a.createElement(M.a,null),component:o.Link,to:"/why"}),l.a.createElement(L.a,{classes:{selected:R.a.selected},label:"Me",icon:l.a.createElement(C.a,null),component:o.Link,to:"/me"}))},t}(l.a.Component),U=a(178),F=a.n(U),H=a(179),T=a.n(H),G=a(161),Q=a.n(G);t.a=function(e){return l.a.createElement(o.StaticQuery,{query:"2834838016",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,null,l.a.createElement("title",null,t.site.siteMetadata.title),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Unica+One|Spectral|Karla",rel:"stylesheet"})),l.a.createElement(T.a,{smDown:!0},l.a.createElement(f,{title:t.site.siteMetadata.title})),l.a.createElement(T.a,{mdUp:!0},l.a.createElement(E,{title:t.site.siteMetadata.title})),l.a.createElement("div",{className:Q.a.layout},e.children),l.a.createElement(T.a,{mdUp:!0},l.a.createElement(S,null)))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-why-js-d1a92979e5e433a03eee.js.map