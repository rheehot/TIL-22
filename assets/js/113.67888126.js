(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{410:function(t,e,a){"use strict";a.r(e);var r=a(25),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"깃을-통해-실행서버에-코드-배포하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#깃을-통해-실행서버에-코드-배포하기"}},[t._v("#")]),t._v(" 깃을 통해 실행서버에 코드 배포하기")]),t._v(" "),a("p",[t._v("gitlab.com에서 CI를 보다가, 헤로쿠만 지원하는 것 같아서, 이게 가능하지 않을까 찾아보다가 우연히 이 링크를 찾았다.")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://zabana.me/notes/deploy-django-application-git.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deploy your Django application with git"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("개념은 굉장히 간단하다. 실행서버에 깃 저장소를 두고, 여기를 원격서버로 등록하고 푸시를 날리면 된다.\n(이건 로컬 git에서 push와 동시에 ssh로 서버에 접속해서 특정 스크립트를 실행할 수 있는 기능이 있다면, 더 간단한 방법일 것 같다.)")]),t._v(" "),a("p",[t._v("푸시를 날리면, 저장소에서 post-recieve 스크립트가 자동으로 후킹된다. 이 스크립트가 하는 일은 매우 간단하다. 그저 정해진 폴더에 가서 소스코드를 pull한다.")]),t._v(" "),a("p",[t._v("장고 같은 경우, 서버를 한번 돌려놓으면, 변경된 소스코드는 자동으로 감지하기 때문에 다른 설정을 할 필요가 없다. 즉 소스코드를 pull하는 것만으로 끝.")]),t._v(" "),a("p",[t._v("웹 서버도 마찬가지일 것이다. 웹 쪽은 웹스톰에서 파일이 변경될 때마다 자동으로 소스코드를 업로드하는 방식으로 진행하는데, 장고 같은 경우 모든 변경이 에러 없음을 보장하지 않기 때문에, 본문에서 설명한 git를 이용하는 방법이 더 적절해 보인다.")]),t._v(" "),a("h2",{attrs:{id:"한가지-주의할-점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#한가지-주의할-점"}},[t._v("#")]),t._v(" 한가지 주의할 점")]),t._v(" "),a("p",[t._v("위 링크에서는 root로 작업을 하는데, 보통은 rootless 환경일 것이다. 간단하게 디렉토리를 사용자로 소유주를 바꾸어주면 된다. 끝.")])])}),[],!1,null,null,null);e.default=o.exports}}]);