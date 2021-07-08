(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{386:function(t,e,a){"use strict";a.r(e);var s=a(25),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-gateway"}},[t._v("#")]),t._v(" HTTP Gateway")]),t._v(" "),a("p",[t._v("HTTP Gateway exposes the client's "),a("a",{attrs:{href:"https://petstore.swagger.io/?url=https://raw.githubusercontent.com/plgd-dev/cloud/v2/http-gateway/swagger.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("REST API"),a("OutboundLink")],1),t._v(" to manage the user's devices, as well as the Web UI known as "),a("a",{attrs:{href:"..."}},[t._v("plgd Dashboard")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-image"}},[t._v("#")]),t._v(" Docker Image")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker pull plgd/http-gateway:latest\n")])])]),a("h2",{attrs:{id:"docker-run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-run"}},[t._v("#")]),t._v(" Docker Run")]),t._v(" "),a("h3",{attrs:{id:"how-to-make-certificates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-make-certificates"}},[t._v("#")]),t._v(" How to make certificates")]),t._v(" "),a("p",[t._v("Before you run docker image of plgd/http-gateway, you make sure certificates exists on "),a("code",[t._v(".tmp/certs")]),t._v(" folder."),a("br"),t._v("\nIf not exists, you can create certificates from plgd/bundle image by following step only once.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create local folder for certificates and run plgd/bundle image to execute shell.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(".tmp/certs\ndocker run -it "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/.tmp/certs:/certs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CLOUD_SID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("00000000-0000-0000-0000-000000000001 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--entrypoint /bin/bash "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\tplgd/bundle:latest\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Copy & paste below commands on the bash shell of plgd/bundle container.")]),t._v("\ncertificate-generator --cmd.generateRootCA --outCert"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/certs/root_ca.crt --outKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/certs/root_ca.key --cert.subject.cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("RootCA\ncertificate-generator --cmd.generateCertificate --outCert"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/certs/http.crt --outKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/certs/http.key --cert.subject.cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localhost --cert.san.domain"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localhost --signerCert"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/certs/root_ca.crt --signerKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/certs/root_ca.key\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Exit shell.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# See common certificates for plgd cloud services.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" .tmp/certs\nhttp.crt\thttp.key\troot_ca.crt\troot_ca.key\n")])])]),a("h3",{attrs:{id:"how-to-get-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-configuration-file"}},[t._v("#")]),t._v(" How to get configuration file")]),t._v(" "),a("p",[t._v("A configuration template is available on "),a("a",{attrs:{href:"https://github.com/plgd-dev/cloud/blob/v2/http-gateway/config.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("http-gateway/config.yaml"),a("OutboundLink")],1),t._v("."),a("br"),t._v("\nYou can also see "),a("code",[t._v("config.yaml")]),t._v(" configuration file on the "),a("code",[t._v("http-gateway")]),t._v(" folder by downloading "),a("code",[t._v("git clone https://github.com/plgd-dev/cloud.git")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Copy & paste configuration template from the link and save the file named `http-gateway.yaml` on the local folder.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" http-gateway.yaml\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Or download configuration template.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://github.com/plgd-dev/cloud/blob/v2/http-gateway/config.yaml --output http-gateway.yaml\n")])])]),a("h3",{attrs:{id:"edit-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edit-configuration-file"}},[t._v("#")]),t._v(" Edit configuration file")]),t._v(" "),a("p",[t._v("You can edit configuration file such as server port, certificates, OAuth provider and so on."),a("br"),t._v("\nRead more detail about how to configure OAuth Provider "),a("a",{attrs:{href:"https://github.com/plgd-dev/cloud/blob/v2/docs/guide/developing/authorization.md#how-to-configure-auth0",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("See an example of address, tls, event bus and service clients config on the followings.")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0:9086"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("caPool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/certs/root_ca.crt"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keyFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/certs/http.key"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("certFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/certs/http.crt"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clientCertificateRequired")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authorization")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authority")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://auth.example.com/authorize"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("audience")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.example.com"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("caPool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/certs/root_ca.crt"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keyFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/certs/http.key"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("certFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/certs/http.crt"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clients")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("grpcGateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("grpc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:9083"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("caPool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/certs/root_ca.crt"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keyFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/certs/http.key"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("certFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/certs/http.crt"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ui")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("directory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/var/www"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("oauthClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("domain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth.example.com"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clientID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"412dsFf53Sj6$"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("audience")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.example.com"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"openid,offline_access"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("httpGatewayAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.example.com"')]),t._v("\n")])])]),a("h3",{attrs:{id:"run-docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-docker-image"}},[t._v("#")]),t._v(" Run docker image")]),t._v(" "),a("p",[t._v("You can run plgd/http-gateway image using certificates and configuration file on the folder you made certificates.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker run -d --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http-gateway "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/.tmp/certs:/data/certs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/http-gateway.yaml:/data/http-gateway.yaml "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\tplgd/http-gateway:latest --config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/http-gateway.yaml\n")])])]),a("h2",{attrs:{id:"yaml-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yaml-configuration"}},[t._v("#")]),t._v(" YAML Configuration")]),t._v(" "),a("h3",{attrs:{id:"logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[t._v("#")]),t._v(" Logging")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("log.debug")])]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[a("code",[t._v("Set to true if you would like to see extra information on logs.")])]),t._v(" "),a("td",[a("code",[t._v("false")])])])])]),t._v(" "),a("h3",{attrs:{id:"http-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-api"}},[t._v("#")]),t._v(" HTTP API")]),t._v(" "),a("p",[t._v("APIs of the HTTP Gateway service as defined "),a("a",{attrs:{href:"https://github.com/plgd-dev/cloud/blob/v2/http-gateway/uri/uri.go",target:"_blank",rel:"noopener noreferrer"}},[t._v("uri"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://petstore.swagger.io/?url=https://raw.githubusercontent.com/plgd-dev/cloud/v2/http-gateway/swagger.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("swagger"),a("OutboundLink")],1),t._v(" for REST API.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("api.http.address")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("Listen specification <host>:<port> for http client connection.")])]),t._v(" "),a("td",[a("code",[t._v('"0.0.0.0:9100"')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api.http.tls.caPool")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("File path to the root certificate in PEM format which might contain multiple certificates in a single file.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api.http.tls.keyFile")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("File path to private key in PEM format.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api.http.tls.certFile")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("File path to certificate in PEM format.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api.http.tls.clientCertificateRequired")])]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[a("code",[t._v("If true, require client certificate.")])]),t._v(" "),a("td",[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api.http.authorization.authority")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("Endpoint of OAuth provider.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api.http.authorization.audience")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("Identifier of the API configured in your OAuth provider.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api.http.authorization.http.maxIdleConns")])]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[a("code",[t._v("It controls the maximum number of idle (keep-alive) connections across all hosts. Zero means no limit.")])]),t._v(" "),a("td",[a("code",[t._v("16")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api.http.authorization.http.maxConnsPerHost")])]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[a("code",[t._v("It optionally limits the total number of connections per host, including connections in the dialing, active, and idle states. On limit violation, dials will block. Zero means no limit.")])]),t._v(" "),a("td",[a("code",[t._v("32")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api.http.authorization.http.maxIdleConnsPerHost")])]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[a("code",[t._v("If non-zero, controls the maximum idle (keep-alive) connections to keep per-host. If zero, DefaultMaxIdleConnsPerHost is used.")])]),t._v(" "),a("td",[a("code",[t._v("16")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api.http.authorization.http.idleConnTimeout")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("The maximum amount of time an idle (keep-alive) connection will remain idle before closing itself. Zero means no limit.")])]),t._v(" "),a("td",[a("code",[t._v("30s")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api.http.authorization.http.timeout")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("A time limit for requests made by this Client. A Timeout of zero means no timeout.")])]),t._v(" "),a("td",[a("code",[t._v("10s")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api.http.authorization.http.tls.caPool")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("File path to the root certificate in PEM format which might contain multiple certificates in a single file.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api.http.authorization.http.tls.keyFile")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("File path to private key in PEM format.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api.http.authorization.http.tls.certFile")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("File path to certificate in PEM format.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api.http.authorization.http.tls.useSystemCAPool")])]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[a("code",[t._v("If true, use system certification pool.")])]),t._v(" "),a("td",[a("code",[t._v("false")])])])])]),t._v(" "),a("h3",{attrs:{id:"grpc-gateway-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc-gateway-client"}},[t._v("#")]),t._v(" GRPC Gateway Client")]),t._v(" "),a("p",[t._v("Client configurations to internally connect to GRPC Gateway service.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("clients.grpcGateway.grpc.address")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("GRPC Gateway service address.")])]),t._v(" "),a("td",[a("code",[t._v('"127.0.0.1:9100"')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("clients.grpcGateway.grpc.tls.caPool")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("File path to the root certificate in PEM format which might contain multiple certificates in a single file.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("clients.grpcGateway.grpc.tls.keyFile")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("File path to private key in PEM format.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("clients.grpcGateway.grpc.tls.certFile")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("File path to certificate in PEM format.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("clients.grpcGateway.grpc.tls.useSystemCAPool")])]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[a("code",[t._v("If true, use system certification pool.")])]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("clients.grpcGateway.grpc.keepAlive.time")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("After a duration of this time if the client doesn't see any activity it pings the server to see if the transport is still alive.")])]),t._v(" "),a("td",[a("code",[t._v("10s")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("clients.grpcGateway.grpc.keepAlive.timeout")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("After having pinged for keepalive check, the client waits for a duration of Timeout and if no activity is seen even after that the connection is closed.")])]),t._v(" "),a("td",[a("code",[t._v("20s")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("clients.grpcGateway.grpc.keepAlive.permitWithoutStream")])]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[a("code",[t._v("If true, client sends keepalive pings even with no active RPCs. If false, when there are no active RPCs, Time and Timeout will be ignored and no keepalive pings will be sent.")])]),t._v(" "),a("td",[a("code",[t._v("false")])])])])]),t._v(" "),a("h3",{attrs:{id:"web-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-ui"}},[t._v("#")]),t._v(" Web UI")]),t._v(" "),a("p",[t._v("These configurations are for "),a("code",[t._v("PLGD Dashboard")]),t._v(" as described in "),a("a",{attrs:{href:"https://github.com/plgd-dev/cloud/blob/v2/docs/guide/developing/dashboard.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("ui.enabled")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("Set to true if you would like to run the web UI.")])]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ui.directory")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("Path to default web ui built by nodejs")])]),t._v(" "),a("td",[a("code",[t._v('"/usr/local/var/www"')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ui.oauthClient.domain")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("Domain address of OAuth Provider.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ui.oauthClient.clientID")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("Client ID to exchange an authorization code for an access token.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ui.oauthClient.audience")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("Identifier of the API configured in your OAuth provider.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ui.oauthClient.scopes")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("Comma separated list of required scopes.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ui.oauthClient.httpGatewayAddress")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("External address of Http gateway service.")])]),t._v(" "),a("td",[a("code",[t._v('""')])])])])]),t._v(" "),a("blockquote",[a("p",[t._v('Note that the string type related to time (i.e. timeout, idleConnTimeout, expirationTime) is decimal numbers, each with optional fraction and a unit suffix, such as "300ms", "1.5h" or "2h45m". Valid time units are "ns", "us", "ms", "s", "m", "h".')])])])}),[],!1,null,null,null);e.default=r.exports}}]);