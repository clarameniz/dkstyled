(this.webpackJsonpdkstyle=this.webpackJsonpdkstyle||[]).push([[0],{40:function(e,t,a){e.exports=a(93)},74:function(e,t){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(37),i=a.n(r),c=a(3),l=a(4),s=a(6),m=a(5),u=a(21),d=a(2),h=a.n(d),p=a(13),f=a.n(p),E=a(7),v=a(8),b=a(16),w=a(9),g=a(18),y=a.n(g);v.b.add(b.a,w.c,w.b,w.d);var N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.company,t=this.props.data.name,a=this.props.data.occupation,n=this.props.data.description,r=this.props.data.address.city,i=this.props.data.social.map((function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(E.a,{icon:[e.prefix,e.icon]})))}));return o.a.createElement("header",{id:"home"},o.a.createElement("nav",{id:"nav-wrap"},o.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),o.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),o.a.createElement("ul",{id:"nav",className:"nav"},o.a.createElement("li",{className:f()({current:"home"===this.props.section})},o.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),o.a.createElement("li",{className:f()({current:"about"===this.props.section})},o.a.createElement("a",{className:"smoothscroll",href:"#about"},"Qui\xe9nes somos")),o.a.createElement("li",{className:f()({current:"portfolio"===this.props.section})},o.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Trabajos")),o.a.createElement("li",{className:f()({current:"testimonials"===this.props.section})},o.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonios")))),o.a.createElement("div",{className:"row banner"},o.a.createElement("div",{className:"banner-text"},o.a.createElement("h1",{className:"responsive-headline"},e),o.a.createElement("h3",null,y()(t),", ",y()(a)," ",r,". ",y()(n),"."),o.a.createElement("hr",null),o.a.createElement("ul",{className:"social"},i))),o.a.createElement("p",{className:"scrolldown"},o.a.createElement("a",{className:"smoothscroll",href:"#about"},o.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component);v.b.add(b.a,w.a,w.b);var k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(E.a,{icon:[e.prefix,e.icon]})))}));return o.a.createElement("footer",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns"},o.a.createElement("ul",{className:"social-links"},e),o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"\xa9 Copyright 2020 DKstyle"),o.a.createElement("li",null,"Design by ",o.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),o.a.createElement("div",{id:"go-top"},o.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},o.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),j=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e="".concat("","/images/").concat(this.props.data.image),t=this.props.data.biointro,a=this.props.data.biodesc,n=this.props.data.biodesc1;return o.a.createElement("section",{id:"about"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"three columns"},o.a.createElement("img",{className:"profile-pic",src:e,alt:"Manuel Duque"})),o.a.createElement("div",{className:"nine columns main-col"},o.a.createElement("h2",null,"Qui\xe9nes somos"),o.a.createElement("p",null,t),o.a.createElement("p",null,n),o.a.createElement("p",null,a))))}}]),a}(n.Component),O=a(17),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return o.a.createElement("li",{key:e.user},o.a.createElement("blockquote",null,o.a.createElement("p",null,e.text),o.a.createElement("cite",null,e.user)))}));return o.a.createElement("section",{id:"testimonials"},o.a.createElement("div",{className:"text-container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"two columns header-col"},o.a.createElement("h1",null,o.a.createElement(E.a,{icon:O.b}),o.a.createElement("span",null,"Testimonios"))),o.a.createElement("div",{className:"ten columns flex-container"},o.a.createElement("ul",{className:"slides"},e)))))}}]),a}(n.Component),C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="".concat("","/images/portfolio/").concat(e.image);return o.a.createElement("div",{key:e.title,className:"columns portfolio-item"},o.a.createElement("div",{className:"item-wrap"},o.a.createElement("a",{href:e.url,title:e.title,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{alt:e.title,src:t}),o.a.createElement("div",{className:"overlay"},o.a.createElement("div",{className:"portfolio-item-meta"},o.a.createElement("h5",null,e.title),o.a.createElement("p",null,e.category))),o.a.createElement("div",{className:"link-icon"},o.a.createElement(E.a,{icon:O.a})))))}));return o.a.createElement("section",{id:"portfolio"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns collapsed"},o.a.createElement("h1",null,"Algunos trabajos"),o.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),a}(n.Component),x=a(38),W=a.n(x),T=a(14),A=function(){h()(".smoothscroll").on("click",(function(e){e.preventDefault();var t=this.hash,a=h()(t);h()("html, body").stop().animate({scrollTop:a.offset().top},800,"swing",(function(){window.location.hash=t}))}))},D=function(){h()("header").css({height:window.innerHeight}),h()(window).on("resize",(function(){h()("header").css({height:window.innerHeight}),h()("body").css({width:window.innerWidth})}))},q=function(){h()(window).on("scroll",(function(){var e=h()("header").height(),t=h()(window).scrollTop(),a=h()("#nav-wrap");t>.5*e&&t<e&&h()(window).outerWidth()>768?a.addClass("opaque").fadeIn("fast"):t<.5*e?a.removeClass("opaque").fadeIn("fast"):a.addClass("opaque").fadeIn("fast")}))},R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={data:{},section:"home"},u.a.initialize("UA-167430634-1"),u.a.pageview(window.location.pathname),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getData(),this.initializeJS()}},{key:"getData",value:function(){h.a.ajax({url:"".concat("","/data.json"),dataType:"json",cache:!1,success:function(e){this.setState({data:e})}.bind(this),error:function(e,t,a){console.log(a),alert(a)}})}},{key:"initializeJS",value:function(){A(),D(),q()}},{key:"handleSection",value:function(e){this.setState({section:e})}},{key:"forceRedimension",value:function(){window.dispatchEvent(new Event("resize"))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(T.a,{key:"home",onEnter:function(){return e.handleSection("home")}}),o.a.createElement(W.a,{videoId:this.state.data.video,onReady:this.forceRedimension},o.a.createElement(N,{data:this.state.data.main,section:this.state.section})),o.a.createElement(T.a,{key:"about",bottomOffset:"100px",onEnter:function(){return e.handleSection("about")}}),o.a.createElement(j,{data:this.state.data.main}),o.a.createElement(T.a,{key:"portfolio",bottomOffset:"1250px",onEnter:function(){return e.handleSection("portfolio")}}),o.a.createElement(C,{data:this.state.data.portfolio}),o.a.createElement(T.a,{key:"testimonials",bottomOffset:"560px",onEnter:function(){return e.handleSection("testimonials")}}),o.a.createElement(S,{data:this.state.data.testimonials}),o.a.createElement(k,{data:this.state.data.main}))}}]),a}(n.Component),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):H(t,e)}))}}()}},[[40,1,2]]]);
//# sourceMappingURL=main.0ca4e8f1.chunk.js.map