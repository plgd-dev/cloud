(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{387:function(t,e,s){"use strict";s.r(e);var a=s(25),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"authorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),s("h2",{attrs:{id:"using-external-oauth-server-with-bundle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-external-oauth-server-with-bundle"}},[t._v("#")]),t._v(" Using external OAuth Server with bundle")]),t._v(" "),s("p",[t._v("Even though the bundle start core plgd services as processes in a single container, a user has still a possibility to configure most of the services parameters. "),s("strong",[t._v("For testing purposes")]),t._v(", the external OAuth Server (e.g. "),s("a",{attrs:{href:"https://auth0.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Auth0"),s("OutboundLink")],1),t._v(") can be set up."),s("br"),t._v("\nTo skip internal mocked OAuth Server and switch to your external one, configure following environment variables:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("OAUTH_AUDIENCE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//api.example.com\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("OAUTH_ENDPOINT_AUTH_URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//auth.example.com/authorize\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("OAUTH_ENDPOINT_TOKEN_URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//auth.example.com/oauth/token\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("OAUTH_ENDPOINT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auth.example.com\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("JWKS_URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//auth.example.com/.well"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("known/jwks.json\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("OAUTH_CLIENT_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ij12OJj2J23K8KJs\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("OAUTH_CLIENT_SECRET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 654hkja12asd123d\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SERVICE_OAUTH_CLIENT_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 412dsFf53Sj6$\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SERVICE_OAUTH_CLIENT_SECRET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 235Jgdf65jsd4Shls\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("OWNER_CLAIM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sub\n")])])]),s("h3",{attrs:{id:"how-to-configure-auth0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure-auth0"}},[t._v("#")]),t._v(" How to configure Auth0")]),t._v(" "),s("p",[t._v("Assuming you have an account in the Auth0 OAuth as a service, you need to create 2 Applications and one API. Follow these steps to successfuly configure bundle to run against your Auth0 instance.")]),t._v(" "),s("ol",[s("li",[t._v("Create new "),s("strong",[t._v("API")]),t._v(" in the APIs section"),s("br"),t._v("\na. Use name of your choice"),s("br"),t._v("\nb. Set a unique API identifier (e.g. "),s("code",[t._v("https://api.example.com")]),t._v(")"),s("br"),t._v("\nc. After saving open details of newly created api and "),s("strong",[t._v("Enable Offline Access")]),s("br"),t._v("\nd. Store the internal Auth0 API Id required for the step 2c"),s("br"),t._v("\ne. Switch to "),s("strong",[t._v("Permissions")]),t._v(" tab and add "),s("code",[t._v("openid")]),t._v(" scope to the list")]),t._v(" "),s("li",[t._v("Create new "),s("strong",[t._v("Regular Web Application")]),t._v(" in the Application section"),s("br"),t._v("\na. Make sure "),s("strong",[t._v("Token Endpoint Authentication Method")]),t._v(" is set to "),s("code",[t._v("None")]),s("br"),t._v("\nb. Add "),s("code",[t._v("https://{FQDN}:{NGINX_PORT}")]),t._v(" and "),s("code",[t._v("https://{FQDN}:{NGINX_PORT}/api/authz/callback")]),t._v(" to "),s("strong",[t._v("Allowed Callback URLs")]),s("br"),t._v("\nc. Add "),s("code",[t._v("https://{FQDN}:{NGINX_PORT}")]),t._v(" to "),s("strong",[t._v("Allowed Logout URLs")]),s("br"),t._v("\nd. Add "),s("code",[t._v("https://{FQDN}:{NGINX_PORT}")]),t._v(" to "),s("strong",[t._v("Allowed Web Origins")]),s("br"),t._v("\ne. Open "),s("strong",[t._v("Advanced Settings")]),t._v(", switch to "),s("strong",[t._v("OAuth")]),t._v(" tab and paste here the API Id from the step 1d"),s("br"),t._v("\nf. Switch to "),s("strong",[t._v("Grant Types")]),t._v(" and make sure "),s("strong",[t._v("only")]),t._v(" "),s("code",[t._v("Implicit")]),t._v(", "),s("code",[t._v("Authorization Code")]),t._v(" and "),s("code",[t._v("Refresh Token")]),t._v(" grants are enabled")]),t._v(" "),s("li",[t._v("Create new "),s("strong",[t._v("Machine to Machine Application")]),t._v(" in the Application section"),s("br"),t._v("\na. Set "),s("strong",[t._v("Token Endpoint Authentication Method")]),t._v(" to "),s("code",[t._v("Post")]),s("br"),t._v("\nb. Add "),s("code",[t._v("https://{FQDN}:{NGINX_PORT}")]),t._v(" to "),s("strong",[t._v("Allowed Callback URLs")]),s("br"),t._v("\nc. Add "),s("code",[t._v("https://{FQDN}:{NGINX_PORT}")]),t._v(" to "),s("strong",[t._v("Allowed Web Origins")]),s("br"),t._v("\nd. Open "),s("strong",[t._v("Advanced Settings")]),t._v(", switch to "),s("strong",[t._v("OAuth")]),t._v(" tab and paste here the API Id from the step 1d"),s("br"),t._v("\ne. Switch to "),s("strong",[t._v("Grant Types")]),t._v(" and make sure "),s("strong",[t._v("only")]),t._v(" "),s("code",[t._v("Client Credentials")]),t._v(" grant is enabled")])]),t._v(" "),s("h2",{attrs:{id:"device-ownership-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#device-ownership-configuration"}},[t._v("#")]),t._v(" Device ownership configuration")]),t._v(" "),s("p",[t._v("Devices are in the authorization service organized by the owner ID retrieved from the JWT token. The plgd API will based on this value identify the user and grant him the permission only to devices he owns. By default, JWT claim "),s("code",[t._v("sub")]),t._v(" is used as the owner ID. In case you connect the plgd authorization service with the Auth0, each logged-in user can access only his devices. This behaviour can be changed by changing the "),s("code",[t._v("OWNER_CLAIM")]),t._v(" configuration property and adding custom claim to your Auth0 users.")]),t._v(" "),s("h3",{attrs:{id:"how-to-use-custom-claim-with-auth0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-custom-claim-with-auth0"}},[t._v("#")]),t._v(" How to use custom claim with Auth0")]),t._v(" "),s("h4",{attrs:{id:"assign-claim-to-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assign-claim-to-user"}},[t._v("#")]),t._v(" Assign claim to user")]),t._v(" "),s("ol",[s("li",[t._v("Go to "),s("strong",[t._v("Users & Roles")])]),t._v(" "),s("li",[t._v("Find your user and edit his details")]),t._v(" "),s("li",[t._v("Extend the "),s("strong",[t._v("user_metadata")]),t._v(" by a custom claim, e.g."),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tenant"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e3e0102d-a45b-5cb2-a22e-3a0410deb8d6"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h4",{attrs:{id:"assign-wildcard-permission-to-your-service-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assign-wildcard-permission-to-your-service-client"}},[t._v("#")]),t._v(" Assign wildcard permission to your service client")]),t._v(" "),s("ol",[s("li",[t._v("Go to "),s("strong",[t._v("Applications")])]),t._v(" "),s("li",[t._v("Edit your "),s("strong",[t._v("Machine to Machine")]),t._v(" application")]),t._v(" "),s("li",[t._v("Open "),s("strong",[t._v("Advanced Settings")]),t._v(", switch to "),s("strong",[t._v("Application Metadata")]),t._v(" and add entry:\n"),s("ul",[s("li",[s("code",[t._v("Key")]),t._v(": "),s("code",[t._v("tenant")])]),t._v(" "),s("li",[s("code",[t._v("Value")]),t._v(": "),s("code",[t._v("*")])])])])]),t._v(" "),s("h4",{attrs:{id:"include-custom-claim-to-access-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#include-custom-claim-to-access-token"}},[t._v("#")]),t._v(" Include custom claim to access token")]),t._v(" "),s("ol",[s("li",[t._v("Go to "),s("strong",[t._v("Rules")]),t._v(" and crete new one")]),t._v(" "),s("li",[t._v("Copy paste the function below which uses custom claim "),s("code",[t._v("https://plgd.dev/tenant")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTenantToAccessToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tenantClaim "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://plgd.dev/tenant'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tenant "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_metadata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tenant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientMetadata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tenant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accessToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tenantClaim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tenant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("idToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tenantClaim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tenant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("After the rule is created, Auth0 include into every access tokens custom claim "),s("code",[t._v("https://plgd.dev/tenant")]),t._v(' used to group users and "their" devices. In case the custom '),s("code",[t._v("OWNER_CLAIM")]),t._v(" is configured, devices are no more owned by a single user, but in this case, by the "),s("strong",[t._v("tenant")]),t._v(". Each user who is member of the tenant A will be able to access all the devices of this tenant.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If the configuration property "),s("code",[t._v("OWNER_CLAIM")]),t._v(" is changed, each user is required to have this claim present.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);