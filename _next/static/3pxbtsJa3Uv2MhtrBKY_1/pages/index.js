(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(n,e,t){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(r.default.useContext(i.AmpStateContext))};var o,r=(o=t("q1tI"))&&o.__esModule?o:{default:o},i=t("lwAK");function a(){let{ampFirst:n=!1,hybrid:e=!1,hasQuery:t=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n||e&&t}},"8Kt/":function(n,e,t){"use strict";e.__esModule=!0,e.defaultHead=s,e.default=void 0;var o=c(t("q1tI")),r=c(t("Xuae")),i=t("lwAK"),a=t("FYa8"),l=t("/0+H");function c(n){return n&&n.__esModule?n:{default:n}}function s(){let n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const e=[o.default.createElement("meta",{charSet:"utf-8"})];return n||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function u(n,e){return"string"===typeof e||"number"===typeof e?n:e.type===o.default.Fragment?n.concat(o.default.Children.toArray(e.props.children).reduce((n,e)=>"string"===typeof e||"number"===typeof e?n:n.concat(e),[])):n.concat(e)}const d=["name","httpEquiv","charSet","itemProp"];function f(n,e){return n.reduce((n,e)=>{const t=o.default.Children.toArray(e.props.children);return n.concat(t)},[]).reduce(u,[]).reverse().concat(s(e.inAmpMode)).filter(function(){const n=new Set,e=new Set,t=new Set,o={};return r=>{let i=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){const e=r.key.slice(r.key.indexOf("$")+1);n.has(e)?i=!1:n.add(e)}switch(r.type){case"title":case"base":e.has(r.type)?i=!1:e.add(r.type);break;case"meta":for(let n=0,e=d.length;n<e;n++){const e=d[n];if(r.props.hasOwnProperty(e))if("charSet"===e)t.has(e)?i=!1:t.add(e);else{const n=r.props[e],t=o[e]||new Set;t.has(n)?i=!1:(t.add(n),o[e]=t)}}}return i}}()).reverse().map((n,e)=>{const t=n.key||e;return o.default.cloneElement(n,{key:t})})}const p=(0,r.default)();function m(n){let{children:e}=n;return(o.default.createElement(i.AmpStateContext.Consumer,null,n=>o.default.createElement(a.HeadManagerContext.Consumer,null,t=>o.default.createElement(p,{reduceComponentsToState:f,handleStateChange:t,inAmpMode:(0,l.isInAmpMode)(n)},e))))}m.rewind=p.rewind;var h=m;e.default=h},FYa8:function(n,e,t){"use strict";var o;e.__esModule=!0,e.HeadManagerContext=void 0;const r=((o=t("q1tI"))&&o.__esModule?o:{default:o}).default.createContext(null);e.HeadManagerContext=r},RNiq:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return N}));var o=t("h4VS"),r=t("q1tI"),i=t.n(r),a=t("vOnD"),l=t("YFqc"),c=t.n(l),s=t("1wsm"),u=t("8Kt/"),d=t.n(u),f=i.a.createElement;const p=n=>{let{title:e}=n;return f(d.a,null,f("title",null,e))};var m=t("Ou3Z"),h=t("NsEb"),g=r.createElement;function b(){const n=Object(o.a)(["\n  color: #08202A;\n  text-decoration: none;\n"]);return b=function(){return n},n}function x(){const n=Object(o.a)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n\n  font-family: Cabin;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 50px;\n  line-height: 60px;\n  letter-spacing: 2px; /* identical to box height, or 100% */\n\n  & li {\n    padding: 40px;\n  }\n\n  & li.reach-me {\n    font-family: Open Sans;\n    font-size: 16px;\n    line-height: 30px;\n    background-color: #08202a;\n  }\n  & li.reach-me a {\n    color: #FFFFFF;\n  }\n  & li.reach-me address {\n    font-style: normal;\n    color: #c0d9dd;\n  }\n"]);return x=function(){return n},n}function w(){const n=Object(o.a)(["\n  padding: 40px;\n  width: calc(100% - 80px) !important;\n\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 140px;\n\n  background: url(/img/Landing-top@2x.png) no-repeat 130% 100%;\n  background-size: 200px;\n\n  & .who {\n    font-size: 14px;\n    display: inline;\n    border-bottom: 4px solid #b5f44b;\n  }\n"]);return w=function(){return n},n}function y(){const n=Object(o.a)(["\n  color: #ffffff;\n  padding: 50px 50px 0 50px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 40px;\n"]);return y=function(){return n},n}function v(){const n=Object(o.a)(["\n  max-height: 800px;\n  text-align: center;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  img {\n    width: 438px;\n    height: 477.5px\n  }\n\n  &.mobile img {\n    transform: scale(-1, 1);\n    width: auto;\n    height: auto;\n  }\n"]);return v=function(){return n},n}function _(){const n=Object(o.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  min-height: calc(100vh - 92px);\n\n  & > div {\n    width: 50%;\n    font-size: 80px;\n    line-height: 110px;\n  }\n\n  &.mobile {\n    flex-direction: column;\n    min-height: auto;\n  }\n\n  &.mobile > div {\n    width: 100%;\n    font-size: 50px;\n    line-height: 65px;\n  }\n\n  &.mobile > div ul li {\n    line-height: 70px;\n  }\n"]);return _=function(){return n},n}function C(){const n=Object(o.a)(["\n  background-color: #08202a;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n\n  &.mobile {\n    display: block;\n  }\n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0 50px 50px 50px;\n  }\n"]);return C=function(){return n},n}function k(){const n=Object(o.a)(["\n  font-family: Cabin, Arial, Helvetica, Sans-Serif;\n  font-style: normal;\n  font-weight: bold;\n  letter-spacing: 0.833333px;  /* or 137% */\n  text-decoration: none;\n  cursor: pointer;\n  color: #B5F44B;\n\n  &:hover {\n    color: #ffffff;\n    transition: 0.6s;\n  }\n"]);return k=function(){return n},n}const S=a.b.a(k()),M=a.b.div(C()),O=a.b.div(_()),A=a.b.div(v()),F=a.b.div(y()),j=a.b.div(w()),z=a.b.ul(x()),E=a.b.a(b());function N(){const n=Object(h.a)(),e=Object(h.b)(n);return g("div",null,g(p,{title:"Laura Groetzinger Portfolio"}),g(s.a,{active:"index"}),g(O,{className:e},!n.isMobile&&g(A,null,g("img",{src:"/img/Landing-top@2x.png"})),n.isMobile&&g(j,null,g("div",{className:"who"},"Laura Groetzinger"),g("div",{className:"what"},"Product Design")),g(M,{className:e},n.isMobile&&g(F,null,"Recent Projects"),g("ul",null,g("li",null,g(c.a,{href:"/collabs"},g(S,null,"collabs"))),g("li",null,g(c.a,{href:"/justworks"},g(S,null,"justworks"))),g("li",null,g(S,{href:"/selfmade1.0"},"selfmade1.0")),g("li",null,g(S,{href:"/selfmade2.0"},"selfmade2.0"))))),n.isMobile&&g(z,null,g("li",{style:{backgroundColor:"#F2F2F2"}},g(c.a,{href:"/resume"},g(E,{href:"https://www.linkedin.com/in/laura-groetzinger-b0857b21/",target:"_blank",rel:"noreferrer"},"linkedIn",g(m.a,{className:e})))),g("li",{style:{backgroundColor:"#C0D9DD"}},g(c.a,{href:"/sidegig"},g(E,{href:"https://www.instagram.com/pinkandsalt/",target:"_blank",rel:"noreferrer"},"side gig",g(m.a,{className:e})))),g("li",{className:"reach-me"},g(E,{href:"mailto:laura.groetzinger@gmail.com"},"reach me at",g("address",null,"laura.groetzinger@gmail.com")))))}},Xuae:function(n,e,t){"use strict";e.__esModule=!0,e.default=void 0;var o=t("q1tI");e.default=()=>{const n=new Set;let e;function t(t){e=t.props.reduceComponentsToState([...n],t.props),t.props.handleStateChange&&t.props.handleStateChange(e)}return class extends o.Component{static rewind(){const t=e;return e=void 0,n.clear(),t}constructor(n){super(n)}componentDidMount(){n.add(this),t(this)}componentDidUpdate(){t(this)}componentWillUnmount(){n.delete(this),t(this)}render(){return null}}}},lwAK:function(n,e,t){"use strict";var o;e.__esModule=!0,e.AmpStateContext=void 0;const r=((o=t("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});e.AmpStateContext=r},vlRD:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,1,3,4]]]);