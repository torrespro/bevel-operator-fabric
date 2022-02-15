(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{101:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},111:function(e,t,n){"use strict";var a=n(0),r=n(112);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},112:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return g})),n.d(t,"metadata",(function(){return O})),n.d(t,"toc",(function(){return j})),n.d(t,"default",(function(){return v}));var a=n(3),r=n(7),o=n(0),c=n.n(o),i=n(99),l=n(111),s=n(101),u=n(95),d=n.n(u);const b=37,p=39;var h=function(e){const{lazy:t,block:n,defaultValue:a,values:r,groupId:i,className:u}=e,{tabGroupChoices:h,setTabGroupChoices:f}=Object(l.a)(),[m,g]=Object(o.useState)(a),O=o.Children.toArray(e.children);if(null!=i){const e=h[i];null!=e&&e!==m&&r.some((t=>t.value===e))&&g(e)}const j=e=>{g(e),null!=i&&f(i,e)},y=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},u)},r.map((e=>{let{value:t,label:n}=e;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===t,className:Object(s.a)("tabs__item",d.a.tabItem,{"tabs__item--active":m===t}),key:t,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e)},onFocus:()=>j(t),onClick:()=>{j(t)}},n)}))),t?Object(o.cloneElement)(O.filter((e=>e.props.value===m))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==m})))))};var f=function(e){let{children:t,hidden:n,className:a}=e;return c.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},m=["components"],g={id:"install-chaincode",title:"Install Chaincode"},O={unversionedId:"user-guide/install-chaincode",id:"user-guide/install-chaincode",isDocsHomePage:!1,title:"Install Chaincode",description:"Smart contracts are how users interact with the blockchain ledger. Smart contracts are implemented in Hyperledger Fabric in the form of chaincode packages. Organizations that want to validate transactions or query the ledger need to install a chaincode on their peers.",source:"@site/docs/user-guide/install-chaincode.mdx",slug:"/user-guide/install-chaincode",permalink:"/hlf-operator/docs/user-guide/install-chaincode",editUrl:"https://github.com/kfsoftware/hlf-operator/edit/master/website/docs/user-guide/install-chaincode.mdx",version:"current",sidebar:"someSidebar1",previous:{title:"Create channel",permalink:"/hlf-operator/docs/user-guide/create-channel"},next:{title:"Register & Enroll users",permalink:"/hlf-operator/docs/user-guide/enroll-users"}};var j=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install the chaincode",id:"install-the-chaincode",children:[]}],y={toc:j};function v(e){var t=e.components,n=Object(r.a)(e,m);return Object(i.b)("wrapper",Object(a.a)({},y,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Smart contracts are how users interact with the blockchain ledger. Smart contracts are implemented in Hyperledger Fabric in the form of chaincode packages. Organizations that want to validate transactions or query the ledger need to install a chaincode on their peers."),Object(i.b)("p",null,"The Fabric chaincode lifecycle is the process through which a chaincode is distributed to a channel. Before a chaincode may be used to create transactions, different organizations can agree on how it will be operated using the Fabric chaincode lifecycle. While an endorsement policy specifies which companies must execute a chaincode to validate a transaction, channel members must agree on the chaincode endorsement policy using the Fabric chaincode lifecycle."),Object(i.b)("p",null,"The steps for deploying a chaincode are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Install the package on the peer"),Object(i.b)("li",{parentName:"ul"},"Approve the chaincode definition on the channel"),Object(i.b)("li",{parentName:"ul"},"Commit the chaincode definition on the channel")),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"You must have a networkconfig file, if you haven't, please, go to ",Object(i.b)("a",{parentName:"p",href:"./network-config"},"the network config documentation"),"."),Object(i.b)("h2",{id:"install-the-chaincode"},"Install the chaincode"),Object(i.b)("p",null,"For this step you'll need to install the chaincode package on your peer. To do this, run the following command:"),Object(i.b)(h,{defaultValue:"nodejs",values:[{label:"Node JS",value:"nodejs"},{label:"Java",value:"java"},{label:"Go",value:"golang"}],mdxType:"Tabs"},Object(i.b)(f,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"kubectl hlf chaincode install \\\n    --path=./fixtures/chaincodes/fabcar/java --config=networkConfig.yaml \\\n    --language=java --label=fabcar --user=admin --peer=org1-peer0.default\n"))),Object(i.b)(f,{value:"golang",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"kubectl hlf chaincode install \\\n    --path=./fixtures/chaincodes/fabcar/go --config=networkConfig.yaml \\\n    --language=golang --label=fabcar --user=admin --peer=org1-peer0.default\n"))),Object(i.b)(f,{value:"nodejs",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"kubectl hlf chaincode install \\\n    --path=./fixtures/chaincodes/fabcar/nodejs --config=networkConfig.yaml \\\n    --language=node --label=fabcar --user=admin --peer=org1-peer0.default\n")))),Object(i.b)("p",null,"The parameters are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--path"),": The path to the chaincode package."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--config"),": The network configuration file."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--language"),": The language of the chaincode."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--label"),": The label of the chaincode."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--user"),": The user to use to install the chaincode, this user must be defined in the network config file."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--peer"),": The peer to install the chaincode on.")),Object(i.b)("p",null,"If you don't have any chaincode packages, you can download them from ",Object(i.b)("a",{parentName:"p",href:"https://github.com/kfsoftware/hlf-operator/tree/main/fixtures/chaincodes/fabcar"},"the hlf-operator github repository"),"."),Object(i.b)("p",null,"If no user is found in the networkConfig.yaml, the following error will be thrown:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"Error: failed to create resmgmt client due to context error: user not found\n")),Object(i.b)("p",null,"After a couple of minutes, depending on your set up, the chaincode will be installed on the peer and a package id will be returned."),Object(i.b)("p",null,"The list of all chaincodes installed in the peer can be obtained with the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"NETWORK_CONFIG_PATH=org1.yaml\nPEER_NAME=org1-peer0.default # <name>.<ns>\nUSER_NAME=admin # username in the networkconfig\n\nkubectl hlf chaincode queryinstalled --config=$NETWORK_CONFIG_PATH \\\n  --user=$USER_NAME --peer=$PEER_NAME\n")))}v.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,h=d["".concat(c,".").concat(p)]||d[p]||b[p]||o;return n?r.a.createElement(h,i(i({ref:t},s),{},{components:n})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);