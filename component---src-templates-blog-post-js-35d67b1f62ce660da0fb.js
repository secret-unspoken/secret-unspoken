(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(183),i=n(176),l=n(483),s=n.n(l),c=(n(487),n(7)),u=n.n(c),d=n(499),m=n.n(d),p=n(168),f=function(e){return r.a.createElement(p.a,e,e.children)},g=n(488),h=n.n(g),E=n(490),v=n(169),b=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={copied:!1,href:null},t.handleCopy=function(e){clearTimeout(t.copyId),t.setState({copied:!0}),t.copyId=setTimeout(function(){return t.setState({copied:!1})},5e3),window.ga&&window.ga("send","event",{eventCategory:"Sharing",eventAction:e,eventLabel:"Sharing Campaign",eventValue:1})},t}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){if(window.URL){var e=new window.URL(this.props.url);e.searchParams.append("suid",Date.now()),this.setState({href:e.href})}else this.setState({href:this.props.url})},n.componentWillUnmount=function(){clearTimeout(this.copyId)},n.render=function(){return this.state.href?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:h.a.container},r.a.createElement(f,null,r.a.createElement(E.CopyToClipboard,{text:this.state.href,onCopy:this.handleCopy},r.a.createElement("div",{className:h.a.buttonContent},r.a.createElement(m.a,null),r.a.createElement("pre",null," Copy Page URL"))))),r.a.createElement(v.a,{msg:this.state.copied&&"URL copied to clipboard"})):null},t}(r.a.Component),w=n(184),y=n(4),C=n.n(y),S=n(158),N=n(500),D=n.n(N),x=r.a.createElement("span",null,"→"),M=r.a.createElement("span",null,"←"),P=function(){window.ga&&window.ga("send","event",{eventCategory:"Retention",eventAction:"next post",eventLabel:"Retention Campaign",eventValue:1})},R=function(e){return r.a.createElement("div",{className:D.a.container},r.a.createElement("pre",null,r.a.createElement(S.Link,{onClick:P,to:e.to},e.isNext?null:M," ",e.children," ",e.isNext?x:null)))};R.propTypes={isNext:C.a.bool.isRequired},R.defaultProps={isNext:!0};var k=R,L=(n(201),n(185)),A=n.n(L),Y=n(504),q=n.n(Y),I=n(502),T=n.n(I),U=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={deferredPrompt:null,display:!1},t.handleAdd=function(e){e.preventDefault();var n=t.state.deferredPrompt;n.prompt(),n.userChoice.then(function(e){var n="accepted"===e.outcome;localStorage.setItem("a2hs",n?"true":"false"),localStorage.setItem("a2hs-decision","made"),window.ga&&window.ga("send","event",{eventCategory:"Engagement",eventAction:"a2hs",eventLabel:"Engagement Campaign",eventValue:n?1:0}),t.setState({deferredPrompt:null,notify:!1})})},t.handleClose=function(){localStorage.setItem("a2hs-decision","made"),t.setState({display:!1})},t.createMsg=function(){return r.a.createElement("div",{className:T.a.container},r.a.createElement(S.Link,{to:"/#",className:T.a.link,onClick:t.handleAdd},"Add Secret Unspoken to homescreen"),r.a.createElement(A.a,null,r.a.createElement(q.a,{fontSize:"small",onClick:t.handleClose})))},t}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;(window||window.addEventListener)&&(window.addEventListener("beforeinstallprompt",function(t){t.preventDefault(),e.setState({deferredPrompt:t})}),"made"!==localStorage.getItem("a2hs-decision")&&setTimeout(function(){return e.setState({display:!0})},this.props.after))},n.render=function(){return this.state.display?r.a.createElement(v.a,{duration:1/0,msg:this.createMsg()}):null},t}(r.a.Component);U.propTypes={after:C.a.number.isRequired},U.defaultProps={after:0};var O=U,H=n(165),B=n.n(H),F=n(250),V=n.n(F),j=function(e){var t=e.title,n=e.slug,a=e.author,o=e.description,i=e.blogName,l=e.imgs,s=e.pubDate,c=e.modDate,u=e.siteUrl,d=JSON.stringify({"@context":"http://schema.org","@type":"NewsArticle",mainEntityOfPage:{"@type":"WebPage","@id":n},headline:t,image:l,datePublished:V.a.utc(s,"YYYY-MM-DD").format(),dateModified:V.a.utc(c,"YYYY-MM-DD").format(),author:{"@type":"Person",name:a},publisher:{"@type":"Organization",name:i,logo:{"@type":"ImageObject",url:u+"/site-logo.png"}},description:o});return r.a.createElement(B.a,null,r.a.createElement("script",{type:"application/ld+json"},d))},z=C.a.string;j.propTypes={title:z.isRequired,slug:z.isRequired,author:z.isRequired,description:z.isRequired,blogName:z.isRequired,imgs:C.a.arrayOf([z]),pubDate:z.isRequired,modDate:z.isRequired,siteUrl:z.isRequired};var J=j;n.d(t,"query",function(){return W});t.default=function(e){var t=e.data,n=e.location,a=e.pageContext,l=t.site.siteMetadata,c=t.markdownRemark,u={url:n.href,identifier:c.fields.slug,title:c.frontmatter.title},d=a.prev,m=a.next;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{title:c.frontmatter.title,slug:c.frontmatter.slug,author:c.frontmatter.author,imgs:[c.frontmatter.banner],description:c.frontmatter.description,blogName:l.title,pubDate:c.frontmatter.date,modDate:c.frontmatter.date,siteUrl:l.siteUrl}),r.a.createElement(B.a,null,r.a.createElement("title",null,c.frontmatter.title)),r.a.createElement(o.a,null,r.a.createElement(O,{after:15e3}),r.a.createElement(i.a,null,r.a.createElement(w.a,{title:c.frontmatter.title,date:V()(c.frontmatter.date).format("DD MMMM, YYYY"),wordCount:c.wordCount.words}),r.a.createElement(b,{url:n.href}),r.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:c.html}}),m&&r.a.createElement(k,{isNext:!0,to:m.fields.slug},m.frontmatter.title),d&&r.a.createElement(k,{isNext:!1,to:d.fields.slug},d.frontmatter.title),r.a.createElement(s.a.DiscussionEmbed,{shortname:l.shortname,config:u}))))};var W="1036833109"},161:function(e,t,n){e.exports={btn:"ButtonBase-module--btn--VIkqv",btnShadow:"ButtonBase-module--btn--shadow--2enFj",btnContained:"ButtonBase-module--btn--contained--2lS1t",btnOutlined:"ButtonBase-module--btn--outlined--2IVX3"}},168:function(e,t,n){"use strict";n(34);var a=n(170),r=n.n(a),o=n(0),i=n.n(o),l=n(151),s=n.n(l),c=n(161),u=n.n(c);t.a=function(e){var t=e.className,n=r()(e,["className"]);return i.a.createElement("button",Object.assign({},n,{className:s()(u.a.btn,t)}),e.children)}},169:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(178),i=n.n(o),l=n(166),s=n.n(l),c=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{smDown:!0},r.a.createElement(i.a,{autoHideDuration:e.duration,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.msg,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("div",{id:"message-id"},e.msg)})),r.a.createElement(s.a,{mdUp:!0},r.a.createElement(i.a,{autoHideDuration:e.duration,anchorOrigin:{vertical:"bottom",horizontal:"center"},open:e.msg,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("div",{id:"message-id"},e.msg)})))};c.defaultProps={duration:4e3},t.a=c},179:function(e,t,n){e.exports={meta:"HeaderMeta-module--meta--1iWAQ"}},181:function(e,t,n){e.exports={metaHeading:"PostHeader-module--meta-heading--2nY_2"}},184:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(179),i=n.n(o),l=function(e){return r.a.createElement("span",{className:i.a.meta},e.prefix,e.children)};l.defaultProps={prefix:""};var s=l,c=n(181),u=n.n(c);t.a=function(e){return r.a.createElement("div",{className:u.a.metaHeading},r.a.createElement("div",null,r.a.createElement(s,null,e.date),e.wordCount&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null,"•"),r.a.createElement(s,null,(t=e.wordCount,Math.round(t/250))," min read"))),r.a.createElement("h2",null,e.title));var t}},488:function(e,t,n){e.exports={container:"StoryEngagement-module--container--2vsAN",buttonContent:"StoryEngagement-module--button-content--mOe6Z"}},500:function(e,t,n){e.exports={container:"PostLink-module--container--L5cIX"}},502:function(e,t,n){e.exports={container:"AddToHomeScreen-module--container--29F3d",link:"AddToHomeScreen-module--link--3MTxJ"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-35d67b1f62ce660da0fb.js.map