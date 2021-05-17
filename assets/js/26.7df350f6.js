(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{391:function(e,t,o){"use strict";o.r(t);var r=o(25),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"_1-deploy-plgd-cloud"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-deploy-plgd-cloud"}},[e._v("#")]),e._v(" 1. Deploy plgd Cloud")]),e._v(" "),o("p",[e._v("There are multiple options how to start using / testing the plgd Cloud. If you're just trying to get in touch with this Cloud Native IoT framework, jump right to the [try.plgd.cloud](#Try plgd.cloud) instance and onboard your device right away. In case you want to "),o("strong",[e._v("get in touch")]),e._v(" with the system localy and you have the "),o("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker installed"),o("OutboundLink")],1),e._v(", use our "),o("a",{attrs:{href:"#bundle"}},[e._v("plgd cloud #Bundle")]),e._v(".")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Join us!")]),e._v(" "),o("p",[e._v("Helm chart for the k8s deployment is in progress. "),o("a",{attrs:{href:"https://github.com/plgd-dev/cloud",target:"_blank",rel:"noopener noreferrer"}},[e._v("Contributions welcome!"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"try-plgd-cloud"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#try-plgd-cloud"}},[e._v("#")]),e._v(" Try.plgd.cloud")]),e._v(" "),o("p",[e._v("The plgd team operates their own instance of the plgd cloud for free. This cloud instance is integrated with the plgd mobile application available for both iOS and Android based devices. Together with our IoTivity-Lite sample you're able to onboard and work with your device remotely in couple of seconds. To start right away, follow "),o("a",{attrs:{href:"https://try.plgd.cloud",target:"_blank",rel:"noopener noreferrer"}},[e._v("try.plgd.cloud"),o("OutboundLink")],1),e._v(". More information about the mobile application is available in the "),o("RouterLink",{attrs:{to:"/guide/getting-started/2-onboard.html"}},[e._v("Onboard")]),e._v(" Getting Started section.")],1),e._v(" "),o("trycloud"),e._v(" "),o("h2",{attrs:{id:"bundle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bundle"}},[e._v("#")]),e._v(" Bundle")]),e._v(" "),o("p",[e._v("Bundle deployment hosts core plgd Cloud Services with mocked OAuth Server in a single Docker image. All services which hosts the gRPC or HTTP API are proxied through the NGINX with configurable "),o("code",[e._v("NGINX_PORT")]),e._v(" and "),o("code",[e._v("FQDN")]),e._v(". Mobile application documented in the "),o("RouterLink",{attrs:{to:"/guide/getting-started/2-onboard.html"}},[e._v("Onboard")]),e._v(" Getting Started section works also with the Bundle.")],1),e._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("Bundle version of plgd services should be used only for simple testing and development purposes. Performance evaluations, production environment or other sensitive deployments should deploy plgd services using the plgd HELM chart.")])]),e._v(" "),o("h3",{attrs:{id:"run-on-localhost"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#run-on-localhost"}},[e._v("#")]),e._v(" Run on localhost")]),e._v(" "),o("p",[e._v("To deploy and access plgd cloud on your local PC using bundle, run single command:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("docker run -d --name plgd -p "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("443")]),e._v(":443 -p "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("5683")]),e._v(":5683 -p "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("5684")]),e._v(":5684 plgd/bundle:v2next\n")])])]),o("p",[e._v("After couple of seconds your plgd cloud will become available. The plgd dashboard can be opened in your browser at "),o("a",{attrs:{href:"https://localhost/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://localhost/"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("blockquote",[o("p",[e._v("Note that bundle issues it's own "),o("strong",[e._v("self-signed certificate")]),e._v(" which needs to be accepted in the browser.")])]),e._v(" "),o("h3",{attrs:{id:"authorization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[e._v("#")]),e._v(" Authorization")]),e._v(" "),o("p",[e._v("The plgd cloud doesn't work without OAuth Server. To not require developers not interested in sharing bundle instance with other users, simple mocked OAuth Server is included in the bundle. Authentication to the plgd is therefore not required and test user is automatically logged in. Same applies also to device connections; in case you're using the bundle, devices connecting to the CoAP Gateway can use random/static onboarding code as it's not verified. Onboarding of devices is therefore much simpler.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("Authorization Service which is part of the plgd is only for testing and development purposes. For the production, integration of the plgd device identity management API is required.")])]),e._v(" "),o("p",[e._v("Even for the development and testing, more complex scenarios are supported by the built-in authorization service. Read more in the "),o("RouterLink",{attrs:{to:"/guide/developing/authorization.html"}},[e._v("Developing with plgd")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("ul",[o("li",[e._v("By default the plgd cloud bundle hosts the NGINX proxy on port "),o("code",[e._v("443")]),e._v(". This port might be already occupied by other process, e.g. Skype. Default port can be changed by environment variable "),o("code",[e._v("-e NGINX_PORT=8443")]),e._v(". Please be aware that the port needs to be exposed from the container -> "),o("code",[e._v("-p 443:443")]),e._v(" needs to be changed to match a new port, e.g. "),o("code",[e._v("-p 8443:8443")]),e._v(".")]),e._v(" "),o("li",[e._v("Logs and data are by default stored at "),o("code",[e._v("/data")]),e._v(" path. Run the container with "),o("code",[e._v("-v $PWD/vol/plgd/data:/data")]),e._v(" to be able to analyze the logs in case of an issue.")]),e._v(" "),o("li",[e._v("In case you need support, we are happy to support you on "),o("a",{attrs:{href:"http://gitter.im/ocfcloud/Lobby",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitter"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("OCF UCI (Cloud2Cloud Gateway) is not part of the bundle")])]),e._v(" "),o("h2",{attrs:{id:"kubernetes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[e._v("#")]),e._v(" Kubernetes")]),e._v(" "),o("p",[e._v("comming soon...")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);