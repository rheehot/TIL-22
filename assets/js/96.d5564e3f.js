(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{205:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flask를-이용한-앱의-반응이-너무-느릴-때"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flask를-이용한-앱의-반응이-너무-느릴-때"}},[t._v("#")]),t._v(" Flask를 이용한 앱의 반응이 너무 느릴 때")]),t._v(" "),a("p",[t._v("Flask로 구현한 기상자료 API의 반응이 이상할 정도로 느렸다. 특히 3개의 API를 동시에 던져서 지도 3장을 그리는 데모에서 이 현상이 두드러졌다. 그래서 찾아보니, 기본 설정이 쓰레드를 쓰지 않는 모양이다. 코드에 파라미터를 추가하는 것만으로 문제를 해결하였다. 여전히 3개의 쿼리에 대한 반응이 2초대에 머무르고 있어, 개선이 필요해 보인다. 하지만 안정적으로 2초대의 반응을 보여주고 있기 때문에 일단 시연용으로는 큰 무리가 없을 것 같다.")]),t._v(" "),a("p",[t._v("실행코드에 다음과 같이 "),a("code",[t._v("threaded=True")]),t._v("를 추가하면 된다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" threaded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/11150343/slow-requests-on-local-flask-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("stackoverflow: Slow Requests on Local Flask Server"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);