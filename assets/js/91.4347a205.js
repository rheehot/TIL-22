(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{471:function(t,a,s){"use strict";s.r(a);var e=s(25),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"github에서-각주-넣기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github에서-각주-넣기"}},[t._v("#")]),t._v(" Github에서 각주 넣기")]),t._v(" "),s("h2",{attrs:{id:"배경"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#배경"}},[t._v("#")]),t._v(" 배경")]),t._v(" "),s("p",[t._v("Markdown은 다양한 변종이 존재하는데, 현재 내가 작업하고 있는 맥환경은 Sublime Text + Marked2를 이용하고 있다. Marked2에서는 풋노트를 지원해주기 때문에 문제 없이 사용할 수 있었는데, 이게 깃헙에 올라가니 작동하지 않는다. 깃헙페이지(userid.github.io)에서는 풋노트가 작동하는 것으로 봤었는데, jekyll 엔진이 붙어야 제대로 동작하나 보다.")]),t._v(" "),s("h2",{attrs:{id:"해결법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#해결법"}},[t._v("#")]),t._v(" 해결법")]),t._v(" "),s("p",[t._v("임시방편으로 해결한 방법은 다음과 같다."),s("sup",{attrs:{id:"a1"}},[s("a",{attrs:{href:"#f1"}},[t._v("1")])]),t._v("\nExpanding on the previous answers even further, you can add an id attribute to your footnote's link:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("Bla bla "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("sup")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("[1](#f1)"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("sup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Then from within the footnote, link back to it.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("f1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Footnote content here. [↩](#a1)\n")])])]),s("p",[t._v("This will add a little ↩ at the end of your footnote's content, which takes your readers back to the line containing the footnote's link.")]),t._v(" "),s("h2",{attrs:{id:"꼼수"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#꼼수"}},[t._v("#")]),t._v(" 꼼수")]),t._v(" "),s("p",[t._v("이런 방법을 제안한 사람이 있다.")]),t._v(" "),s("p",[t._v("Here is a note"),s("a",{attrs:{href:"#-note-two"}},[t._v("²")]),t._v(".")]),t._v(" "),s("p",[t._v("...\nAt the bottom:")]),t._v(" "),s("h4",{attrs:{id:"_2-note-two"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-note-two"}},[t._v("#")]),t._v(" ² Note Two")]),t._v(" "),s("h2",{attrs:{id:"테스트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#테스트"}},[t._v("#")]),t._v(" 테스트")]),t._v(" "),s("p",[t._v("cmark-gfm에 풋노트가 추가되어 merge된 상태인데, 반영된 것인지 몰라서, 테스트를 해본다.[^3]")]),t._v(" "),s("p",[t._v("여기 밑에 각주가 나타난다고 가정하였다. 이건 작동이 안되는 것으로 보인다. (2019년 5월 24일 현재)")]),t._v(" "),s("p",[t._v("[^3]: 아래 출처에서 참고하였다.")]),t._v(" "),s("ul",[s("li",[t._v("출처: "),s("a",{attrs:{href:"https://github.com/github/markup/issues/498",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enable Markdown footnotes extension #498"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("출처: "),s("a",{attrs:{href:"https://github.com/github/cmark-gfm/pull/64",target:"_blank",rel:"noopener noreferrer"}},[t._v("Footnotes #64"),s("OutboundLink")],1)])]),t._v(" "),s("hr"),t._v(" "),s("p",[s("b",{attrs:{id:"f1"}},[t._v("1")]),t._v(" "),s("a",{attrs:{href:"http://stackoverflow.com/questions/25579868/how-to-add-footnotes-to-github-flavoured-markdown",target:"_blank",rel:"noopener noreferrer"}},[t._v("stackoverflow: How to add footnotes to GitHub-flavoured Markdown?"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"#a1"}},[t._v("↩")])])])}),[],!1,null,null,null);a.default=n.exports}}]);