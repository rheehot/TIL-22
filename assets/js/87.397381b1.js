(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{295:function(t,s,a){"use strict";a.r(s);var r=a(0),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"zsh-셋팅하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zsh-셋팅하기"}},[t._v("#")]),t._v(" zsh 셋팅하기")]),t._v(" "),a("h2",{attrs:{id:"배경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#배경"}},[t._v("#")]),t._v(" 배경")]),t._v(" "),a("p",[t._v("종종 개발자 유투브를 보다보면, 화려한 터미널을 볼 때가 있다. 터미널에 무슨 기능을 기대하겠냐만은 git의 상태를 보여주는 것만으로도 매우 근사해 보였다. 우연히 트윗에서 그 존재를 알게 되었고, 오늘 설치해 보았다.")]),t._v(" "),a("h2",{attrs:{id:"설치하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설치하기"}},[t._v("#")]),t._v(" 설치하기")]),t._v(" "),a("h3",{attrs:{id:"oh-my-zsh-설치하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh-설치하기"}},[t._v("#")]),t._v(" oh my zsh 설치하기")]),t._v(" "),a("p",[t._v("기본적으로 zsh이 깔려있었던 탓에 설치는 매우 쉬웠다.\n"),a("a",{attrs:{href:"http://ohmyz.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식홈페이지"),a("OutboundLink")],1),t._v("에서 시키는대로 다음과 같이 터미널에서 실행시키면 된다.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n")])])]),a("h3",{attrs:{id:"테마-설정하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#테마-설정하기"}},[t._v("#")]),t._v(" 테마 설정하기")]),t._v(" "),a("p",[t._v("테마는 기본적으로 설치가 되는 듯 하다. 설정파일에서 테마 이름만 바쭤주면 된다.\n상세한 설명은 "),a("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh/wiki/Themes",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식페이지"),a("OutboundLink")],1),t._v("에서 참조하면 된다.")]),t._v(" "),a("p",[t._v("간단히 설명하자면,\n"),a("code",[t._v("~/.zshrc")]),t._v(" 에서 "),a("code",[t._v("ZSH_THEME=robbyrussell")]),t._v("를 바꿔주면 된다.")]),t._v(" "),a("h3",{attrs:{id:"agnoster테마와-특수문자-오류-해결"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agnoster테마와-특수문자-오류-해결"}},[t._v("#")]),t._v(" agnoster테마와 특수문자 오류 해결")]),t._v(" "),a("p",[t._v("이렇게 설정했음에도 결과가 매끄럽게 나오지 않는다.\n전체적인 설명은 "),a("a",{attrs:{href:"https://gist.github.com/kevin-smets/8568070",target:"_blank",rel:"noopener noreferrer"}},[t._v("다음 글"),a("OutboundLink")],1),t._v("을 참조하면 되는데, 요약하자면, 폰트를 새로 깔고, iterm2에서 폰트를 바꿔주면 된다.")]),t._v(" "),a("p",[t._v("폰트 설치는 다음 "),a("a",{attrs:{href:"https://github.com/powerline/fonts",target:"_blank",rel:"noopener noreferrer"}},[t._v("깃허브 저장소"),a("OutboundLink")],1),t._v("를 참조하여 설치하면 된다.")]),t._v(" "),a("p",[t._v("역시나 간단히 쓰자면, 다음 구문을 실행하면 된다.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# clone")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/powerline/fonts.git --depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" fonts\n./install.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# clean-up a bit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf fonts\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);