(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=l,t.useAmp=function(){return l(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function l(){let{ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&n}},"/a9y":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a=r(n("q1tI")),o=r(n("8Kt/"));const l={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function d(e){let{res:t,err:n}=e;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}class i extends a.default.Component{render(){const{statusCode:e}=this.props,t=this.props.title||l[e]||"An unexpected error has occurred";return a.default.createElement("div",{style:s.error},a.default.createElement(o.default,null,a.default.createElement("title",null,e,": ",t)),a.default.createElement("div",null,a.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?a.default.createElement("h1",{style:s.h1},e):null,a.default.createElement("div",{style:s.desc},a.default.createElement("h2",{style:s.h2},t,"."))))}}t.default=i,i.displayName="ErrorPage",i.getInitialProps=d,i.origGetInitialProps=d;const s={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"04ac":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("/a9y")}])},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r=i(n("q1tI")),a=i(n("Xuae")),o=n("lwAK"),l=n("FYa8"),d=n("/0+H");function i(e){return e&&e.__esModule?e:{default:e}}function s(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t),[])):e.concat(t)}const c=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((e,t)=>{const n=r.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(u,[]).reverse().concat(s(t.inAmpMode)).filter(function(){const e=new Set,t=new Set,n=new Set,r={};return a=>{let o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){const t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(let e=0,t=c.length;e<t;e++){const t=c[e];if(a.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?o=!1:n.add(t);else{const e=a.props[t],n=r[t]||new Set;n.has(e)?o=!1:(n.add(e),r[t]=n)}}}return o}}()).reverse().map((e,t)=>{const n=e.key||t;return r.default.cloneElement(e,{key:n})})}const f=(0,a.default)();function h(e){let{children:t}=e;return(r.default.createElement(o.AmpStateContext.Consumer,null,e=>r.default.createElement(l.HeadManagerContext.Consumer,null,n=>r.default.createElement(f,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,d.isInAmpMode)(e)},t))))}h.rewind=f.rewind;var m=h;t.default=m},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;const a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=a},Xuae:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n("q1tI");t.default=()=>{const e=new Set;let t;function n(n){t=n.props.reduceComponentsToState([...e],n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return class extends r.Component{static rewind(){const n=t;return t=void 0,e.clear(),n}constructor(e){super(e)}componentDidMount(){e.add(this),n(this)}componentDidUpdate(){n(this)}componentWillUnmount(){e.delete(this),n(this)}render(){return null}}}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;const a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}},[["04ac",0,2,1]]]);