(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{381:function(t,e,a){"use strict";a.r(e);var s=a(25),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cloud2cloud-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloud2cloud-gateway"}},[t._v("#")]),t._v(" Cloud2Cloud Gateway")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Provides devices to another cloud.")]),t._v(" "),a("h2",{attrs:{id:"docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-image"}},[t._v("#")]),t._v(" Docker Image")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker pull plgd/cloud2cloud-gateway:vnext\n")])])]),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("p",[t._v("Follow "),a("a",{attrs:{href:"https://openconnectivity.org/specs/OCF_Cloud_API_For_Cloud_Services_Specification_v2.2.0.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("OCF Cloud API For Cloud Services Specification"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[t._v("#")]),t._v(" Commands")]),t._v(" "),a("ul",[a("li",[t._v("get all devices")]),t._v(" "),a("li",[t._v("get the device by ID")]),t._v(" "),a("li",[t._v("retrieve / update resource values")]),t._v(" "),a("li",[t._v("subscribe to / unsubscribe from events against the set of devices")]),t._v(" "),a("li",[t._v("subscribe to / unsubscribe from events against a specific device")]),t._v(" "),a("li",[t._v("subscribe to / unsubscribe from  events against a specific resource")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://petstore.swagger.io/?url=https://raw.githubusercontent.com/openconnectivityfoundation/core-extensions/ocfcloud-openapi/swagger2.0/oic.r.cloudopenapi.swagger.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("swagger"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"how-to-try"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-try"}},[t._v("#")]),t._v(" How to try")]),t._v(" "),a("h3",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[t._v("#")]),t._v(" Steps")]),t._v(" "),a("ol",[a("li",[t._v("Authorize the user: Request the user's authorization and redirect back to your application with an authorization code.")]),t._v(" "),a("li",[t._v("Request tokens: Exchange your authorization code for tokens.")]),t._v(" "),a("li",[t._v("Call your API: Use the retrieved Access Token to call your API.")]),t._v(" "),a("li",[t._v("Refresh Tokens: Use a Refresh Token to request new tokens when the existing ones expire.")])]),t._v(" "),a("h3",{attrs:{id:"authorize-the-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorize-the-user"}},[t._v("#")]),t._v(" Authorize the User")]),t._v(" "),a("ul",[a("li",[t._v("Authenticating the user;")]),t._v(" "),a("li",[t._v("Redirecting the user to an Identity Provider to handle authentication;")]),t._v(" "),a("li",[t._v("Checking for active Single Sign-on (SSO) sessions;")]),t._v(" "),a("li",[t._v("Obtaining user consent for the requested permission level, unless consent has been previously given.")])]),t._v(" "),a("p",[t._v("To authorize the user, your app must send the user to the authorization URL.")]),t._v(" "),a("h4",{attrs:{id:"try-pluggedin-cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#try-pluggedin-cloud"}},[t._v("#")]),t._v(" Try pluggedin.cloud")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("https://auth.plgd.cloud/authorize?\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("response_type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("client_id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("9XjK2mCf2J0or4Ko0ow7wCmZeDTjC1mW"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("redirect_uri")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://localhost:8080/callback"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("scope")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("r:deviceinformation:* r:resources:* w:resources:* w:subscriptions:* offline_access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("audience")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://openapi.try.plgd.cloud/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("state")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("STATE\n")])])]),a("h4",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[t._v("If all goes well, you'll receive an HTTP 302 response. The authorization code is included at the end of the URL:")]),t._v(" "),a("div",{staticClass:"language-url extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://localhost:8080/callback?code=s65bpdt-ry7QEh6O&state=STATE\n")])])]),a("h3",{attrs:{id:"request-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-tokens"}},[t._v("#")]),t._v(" Request Tokens")]),t._v(" "),a("p",[t._v("Now that you have an Authorization Code, you must exchange it for tokens. Using the extracted Authorization Code (code) from the previous step, you will need to POST to the token URL.")]),t._v(" "),a("h4",{attrs:{id:"try-pluggedin-cloud-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#try-pluggedin-cloud-2"}},[t._v("#")]),t._v(" Try pluggedin.cloud")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request POST "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://auth.plgd.cloud/oauth/token'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: application/x-www-form-urlencoded'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("grant_type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("authorization_code "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'client_id=9XjK2mCf2J0or4Ko0ow7wCmZeDTjC1mW'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("client_secret")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("UTeeIsSugTuDNbn4QMdBaNLDnMiBQzQaa6elm4SDuWOdZUou-aH00EPSbBhgppFD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("YOUR_AUTHORIZATION_CODE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redirect_uri=http://localhost:8080/callback'")]),t._v("\n")])])]),a("h4",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[t._v("If all goes well, you'll receive an HTTP 200 response with a payload containing access_token, refresh_token, scope, expires_in and token_type values:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ey...ojg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pL...btL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scope"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r:deviceinformation:* r:resources:* w:resources:* w:subscriptions:* offline_access"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("86400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bearer"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"call-the-c2c-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call-the-c2c-api"}},[t._v("#")]),t._v(" Call the C2C API")]),t._v(" "),a("p",[t._v("To call the C2C API as an authorized user, the application must pass the retrieved Access Token as a Bearer token in the Authorization header of your HTTP request.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request GET "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url https://openapi.try.plgd.cloud/api/v1/devices "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authorization: Bearer eyJ...lojg'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v("\n")])])]),a("h3",{attrs:{id:"refresh-the-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refresh-the-token"}},[t._v("#")]),t._v(" Refresh the token")]),t._v(" "),a("p",[t._v("You can use the Refresh Token to get a new Access Token. The application communicating with the C2C Endpoint needs a new Access Token only after the previous one expires. It's bad practice to call the endpoint to get a new Access Token every time you call an API, and pluggedin.cloud maintains rate limits that will throttle the amount of requests to the endpoint that can be executed using the same token from the same IP.")]),t._v(" "),a("p",[t._v("To refresh your token, make a POST request to the token endpoint, using grant_type=refresh_token.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request POST "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://auth.plgd.cloud/oauth/token'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: application/x-www-form-urlencoded'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("grant_type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("refresh_token "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'client_id=9XjK2mCf2J0or4Ko0ow7wCmZeDTjC1mW'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("refresh_token")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("YOUR_REFRESH_TOKEN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Now you're able to authorize the user, request the token, communicate with the C2C API and refresh the token before it expires.")])]),t._v(" "),a("h3",{attrs:{id:"device-onboarding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#device-onboarding"}},[t._v("#")]),t._v(" Device Onboarding")]),t._v(" "),a("p",[t._v("To be able to see the devices through the "),a("code",[t._v("pluggedin.cloud")]),t._v(" C2C API, first you need to onboard the device. When you have your device ready, go to the "),a("code",[t._v("https://pluggedin.cloud")]),t._v(" and click "),a("code",[t._v("TRY")]),t._v(". This redirects you to the "),a("code",[t._v("pluggedin.cloud Portal")]),t._v(".")]),t._v(" "),a("p",[t._v("First thing you need is an authorization code. In the "),a("code",[t._v("pluggedin.cloud Portal")]),t._v(" go to "),a("code",[t._v("Devices")]),t._v(" and click "),a("code",[t._v("Onboard Device")]),t._v(". This displays you the code needed to onboard the device. Values which should be set to the "),a("a",{attrs:{href:"https://github.com/openconnectivityfoundation/cloud-services/blob/c2c/swagger2.0/oic.r.coapcloudconf.swagger.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("coapcloudconf"),a("OutboundLink")],1),t._v(" device resource are:")]),t._v(" "),a("h4",{attrs:{id:"unsecured-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsecured-device"}},[t._v("#")]),t._v(" Unsecured device")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("apn")]),t._v(" : "),a("code",[t._v("plgd")])]),t._v(" "),a("li",[a("code",[t._v("cis")]),t._v(" : "),a("code",[t._v("coap+tcp://try.plgd.cloud:5683")])]),t._v(" "),a("li",[a("code",[t._v("sid")]),t._v(" : "),a("code",[t._v("adebc667-1f2b-41e3-bf5c-6d6eabc68cc6")])]),t._v(" "),a("li",[a("code",[t._v("at")]),t._v(" : "),a("code",[t._v("CODE_FROM_PORTAL")])])]),t._v(" "),a("h4",{attrs:{id:"secured-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secured-device"}},[t._v("#")]),t._v(" Secured device")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("apn")]),t._v(" : "),a("code",[t._v("plgd")])]),t._v(" "),a("li",[a("code",[t._v("cis")]),t._v(" : "),a("code",[t._v("coaps+tcp://try.plgd.cloud:5684")])]),t._v(" "),a("li",[a("code",[t._v("sid")]),t._v(" : "),a("code",[t._v("adebc667-1f2b-41e3-bf5c-6d6eabc68cc6")])]),t._v(" "),a("li",[a("code",[t._v("at")]),t._v(" : "),a("code",[t._v("CODE_FROM_PORTAL")])])]),t._v(" "),a("p",[t._v("Conditions:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Device must be owned.")])]),t._v(" "),a("li",[a("code",[t._v("Cloud CA must be set as TRUST CA with subject adebc667-1f2b-41e3-bf5c-6d6eabc68cc6 in device.")])]),t._v(" "),a("li",[a("code",[t._v("Cloud CA in PEM:")])])]),t._v(" "),a("div",{staticClass:"language-pem extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-----BEGIN CERTIFICATE-----\nMIIBhDCCASmgAwIBAgIQdAMxveYP9Nb48xe9kRm3ajAKBggqhkjOPQQDAjAxMS8w\nLQYDVQQDEyZPQ0YgQ2xvdWQgUHJpdmF0ZSBDZXJ0aWZpY2F0ZXMgUm9vdCBDQTAe\nFw0xOTExMDYxMjAzNTJaFw0yOTExMDMxMjAzNTJaMDExLzAtBgNVBAMTJk9DRiBD\nbG91ZCBQcml2YXRlIENlcnRpZmljYXRlcyBSb290IENBMFkwEwYHKoZIzj0CAQYI\nKoZIzj0DAQcDQgAEaNJi86t5QlZiLcJ7uRMNlcwIpmFiJf9MOqyz2GGnGVBypU6H\nlwZHY2/l5juO/O4EH2s9h3HfcR+nUG2/tFzFEaMjMCEwDgYDVR0PAQH/BAQDAgEG\nMA8GA1UdEwEB/wQFMAMBAf8wCgYIKoZIzj0EAwIDSQAwRgIhAM7gFe39UJPIjIDE\nKrtyPSIGAk0OAO8txhow1BAGV486AiEAqszg1fTfOHdE/pfs8/9ZP5gEVVkexRHZ\nJCYVaa2Spbg=\n-----END CERTIFICATE-----\n")])])]),a("ul",[a("li",[a("code",[t._v("ACL for Cloud (Subject: adebc667-1f2b-41e3-bf5c-6d6eabc68cc6) must be set with full access to all published resources in device.")])])]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Option")]),t._v(" "),a("th",[t._v("ENV variable")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("ADDRESS")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("listen address")])]),t._v(" "),a("td",[a("code",[t._v('"0.0.0.0:9100"')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("RESOURCE_DIRECTORY_ADDRESS")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("resource directory address")])]),t._v(" "),a("td",[a("code",[t._v('"127.0.0.1:9100"')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("JWKS_URL")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("url to get JSON Web Key")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("SERVICE_RECONNECT_INTERVAL")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("try to reconnect after interval to resource-directory when connection was closed")])]),t._v(" "),a("td",[a("code",[t._v('"10s"')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("SERVICE_OAUTH_ENDPOINT_TOKEN_URL")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("url to get service access token via OAUTH client credential flow")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("SERVICE_OAUTH_CLIENT_ID")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("client id for authentication to get access token")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("SERVICE_OAUTH_CLIENT_SECRET")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("secrest for authentication to get access token")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("SERVICE_OAUTH_AUDIENCE")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("refer to the resource servers that should accept the token")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("EMIT_EVENT_TIMEOUT")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("timeout for send event")])]),t._v(" "),a("td",[a("code",[t._v('"5s"')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("DIAL_TYPE")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("defines how to obtain dial TLS certificates - options: acme|file")])]),t._v(" "),a("td",[a("code",[t._v('"acme"')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("DIAL_ACME_CA_POOL")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("path to pem file of CAs")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("DIAL_ACME_DIRECTORY_URL")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("url of acme directory")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("DIAL_ACME_DOMAINS")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("list of domains for which will be in certificate provided from acme")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("DIAL_ACME_REGISTRATION_EMAIL")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("registration email for acme")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("DIAL_ACME_TICK_FREQUENCY")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("interval of validate certificate")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("DIAL_ACME_USE_SYSTEM_CERTIFICATION_POOL")])]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[a("code",[t._v("load CAs from system")])]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("DIAL_FILE_CA_POOL")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("path to pem file of CAs")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("DIAL_FILE_CERT_KEY_NAME")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("name of pem certificate key file")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("DIAL_FILE_CERT_DIR_PATH")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("path to directory which contains DIAL_FILE_CERT_KEY_NAME and DIAL_FILE_CERT_NAME")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("DIAL_FILE_CERT_NAME")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("name of pem certificate file")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("DIAL_FILE_USE_SYSTEM_CERTIFICATION_POOL")])]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[a("code",[t._v("load CAs from system")])]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("LISTEN_TYPE")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("defines how to obtain listen TLS certificates - options: acme|file")])]),t._v(" "),a("td",[a("code",[t._v('"acme"')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("LISTEN_ACME_CA_POOL")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("path to pem file of CAs")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("LISTEN_ACME_DIRECTORY_URL")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("url of acme directory")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("LISTEN_ACME_DOMAINS")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("list of domains for which will be in certificate provided from acme")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("LISTEN_ACME_REGISTRATION_EMAIL")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("registration email for acme")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("LISTEN_ACME_TICK_FREQUENCY")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("interval of validate certificate")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("LISTEN_ACME_USE_SYSTEM_CERTIFICATION_POOL")])]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[a("code",[t._v("load CAs from system")])]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("LISTEN_FILE_CA_POOL")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("path to pem file of CAs")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("LISTEN_FILE_CERT_KEY_NAME")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("name of pem certificate key file")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("LISTEN_FILE_CERT_DIR_PATH")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("path to directory which contains LISTEN_FILE_CERT_KEY_NAME and LISTEN_FILE_CERT_NAME")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("LISTEN_FILE_CERT_NAME")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("name of pem certificate file")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("LISTEN_FILE_USE_SYSTEM_CERTIFICATION_POOL")])]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[a("code",[t._v("load CAs from system")])]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("SUBSTORE_MONGO_HOST")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("host of mongo database - uri without scheme")])]),t._v(" "),a("td",[a("code",[t._v('"localhost:27017"')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("SUBSTORE_MONGO_DATABASE")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("name of database")])]),t._v(" "),a("td",[a("code",[t._v('"cloud2cloudGateway"')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[a("code",[t._v("LOG_ENABLE_DEBUG")])]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[a("code",[t._v("debug logging")])]),t._v(" "),a("td",[a("code",[t._v("false")])])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);