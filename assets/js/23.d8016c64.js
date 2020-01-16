(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{269:function(e,t,_){"use strict";_.r(t);var r=_(0),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"콘텍스트-관리자와-else-블록"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#콘텍스트-관리자와-else-블록"}},[e._v("#")]),e._v(" 콘텍스트 관리자와 else 블록")]),e._v(" "),_("h2",{attrs:{id:"else-블록"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#else-블록"}},[e._v("#")]),e._v(" else 블록")]),e._v(" "),_("p",[_("code",[e._v("if/else")]),e._v("는 매우 직관적이나, "),_("code",[e._v("for/else")]),e._v(", "),_("code",[e._v("while/else")]),e._v(", "),_("code",[e._v("try/else")]),e._v("는 반대 의미로 동작한다. "),_("code",[e._v("else")]),e._v("대신 "),_("code",[e._v("then")]),e._v("으로 읽으면 쉽게 이해될 법하다. 예외나 "),_("code",[e._v("return")]),e._v(", "),_("code",[e._v("break")]),e._v(", "),_("code",[e._v("continue")]),e._v("와 같이 블록 중간에서 빠져나오지 않았을 때 "),_("code",[e._v("else")]),e._v("문은 실행된다. 즉, "),_("code",[e._v("for")]),e._v(" 문장이 문제 없이 실행되고 나서, "),_("code",[e._v("else")]),e._v(" 구문이 실행되는 것이다.")]),e._v(" "),_("p",[_("code",[e._v("EAFP")]),e._v(": 허락을 구하기보다는 용서를 구하는 것이 더 쉽다. (Easier to Ask for Forgiveness than Permission)")]),e._v(" "),_("p",[_("code",[e._v("LBYL")]),e._v(": 누울 자리를 보고 다를 뻗으라. (Leap Before You Leap)")]),e._v(" "),_("p",[e._v("C언어는 LBYL, 파이썬은 EAFP 스타일이다.")]),e._v(" "),_("h2",{attrs:{id:"콘텍스트-관리자와-with-블록"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#콘텍스트-관리자와-with-블록"}},[e._v("#")]),e._v(" 콘텍스트 관리자와 with 블록")]),e._v(" "),_("p",[e._v("반복자가 for문을 제어하기 위한 것처럼, 콘텍스트 관리자는 with문을 제어하기 위해 존재한다.")]),e._v(" "),_("p",[_("code",[e._v("with")]),e._v(" 문은 "),_("code",[e._v("try/finally 패턴")]),e._v("을 단순화하기 위해 설계되었다. 콘텍스트 관리자는 "),_("code",[e._v("__enter__()")]),e._v("와 "),_("code",[e._v("__exit__()")]),e._v("로 구성.\n"),_("code",[e._v("with")]),e._v(" 문을 새로운 범위를 지정하는 것은 아니므로, 변수 자체는 with문 바깥에서도 살아 있다. 하지만 "),_("code",[e._v("with")]),e._v("에서 진입코드가 실행되고, 끝날 때 "),_("code",[e._v("__exit__()")]),e._v(" 메서드가 호출된다.")]),e._v(" "),_("p",[e._v("콘텍스트 관리자는 느리지만, 독특한 기능 덕분에, 파이썬 커뮤니티에서는 창의적으로 활용하는 방법을 찾고 있고, 표준라이브러리에서 다음과 같이 이용되고 있다.")]),e._v(" "),_("ul",[_("li",[e._v("sqlite3 모듈의 트랜잭션: "),_("a",{attrs:{href:"http://bit.ly/1MM89PC",target:"_blank",rel:"noopener noreferrer"}},[e._v("연결을 콘텍스트 관리자로 사용하기"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("threading 코드에서 lock, condition, semaphore 보관: "),_("a",{attrs:{href:"http://bit.ly/1MM8guy",target:"_blank",rel:"noopener noreferrer"}},[e._v("with 문에서 락, 컨디션, 세마포어 이용하기"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("Decimal 객체의 산술 연산: "),_("a",{attrs:{href:"http://bit.ly/1MM8eTw",target:"_blank",rel:"noopener noreferrer"}},[e._v("decimal.localcontext 문서"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("객체의 테스트를 위한 임시 패치: "),_("a",{attrs:{href:"http://bit.ly/1MM8imk",target:"_blank",rel:"noopener noreferrer"}},[e._v("unittest.mock.patch()"),_("OutboundLink")],1)])]),e._v(" "),_("h2",{attrs:{id:"contextlib-유틸리티"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#contextlib-유틸리티"}},[e._v("#")]),e._v(" contextlib 유틸리티")]),e._v(" "),_("p",[_("a",{attrs:{href:"http://bit.ly/1HGqZpJ",target:"_blank",rel:"noopener noreferrer"}},[e._v("contextlib - with 문 콘텍스트를 위한 유틸리티"),_("OutboundLink")],1),e._v("를 먼저 참고하자.")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("closing()")]),e._v(": "),_("code",[e._v("close()")]),e._v(" 메서드를 제공하지만, 콘텍스트 프로토콜을 구현하지 않은 객체를 위해 콘텍스트 관리자를 생성")]),e._v(" "),_("li",[_("code",[e._v("suppress")]),e._v(": 지정한 예외를 임시로 무시")]),e._v(" "),_("li",[_("code",[e._v("@contextmanager")]),e._v(": 클래스를 사용하지 않고, 간단한 제너레이터 함수로부터 콘텍스트 관리자 생성. 가장 널리 이용.")]),e._v(" "),_("li",[_("code",[e._v("ContextDecorator")]),e._v(": 콘텍스트 관리자를 함수 데커레이터로도 사용할 수 있게 해주는 기반 클래스")]),e._v(" "),_("li",[_("code",[e._v("ExitStack")]),e._v(": "),_("code",[e._v("__exit__()")]),e._v(" 메서드를 LIFO 순으로 호출해줌.")])]),e._v(" "),_("h2",{attrs:{id:"contextmanager-사용하기"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#contextmanager-사용하기"}},[e._v("#")]),e._v(" @contextmanager 사용하기")]),e._v(" "),_("p",[_("code",[e._v("@contextmanager")]),e._v("는 간편하게 콘텍스트 관리자를 생성할 수 있는 데코레이터로, "),_("code",[e._v("yield")]),e._v("문을 하나만 가진 제너레이터를 구현하면 된다. "),_("code",[e._v("yield")]),e._v(" 문 앞은 "),_("code",[e._v("__enter__()")]),e._v(" 메서드로, 그 이후 코드는 "),_("code",[e._v("__exit__()")]),e._v(" 메서드로 할당된다.")]),e._v(" "),_("h2",{attrs:{id:"읽을거리"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#읽을거리"}},[e._v("#")]),e._v(" 읽을거리")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://bit.ly/1MMa1YB",target:"_blank",rel:"noopener noreferrer"}},[e._v("8장 복합문"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"http://bit.ly/1MMa2Mp",target:"_blank",rel:"noopener noreferrer"}},[e._v("파이썬에서 try-except-else를 사용하는 것이 좋은 방법인가?"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("레이몬드 헤팅거의 "),_("a",{attrs:{href:"http://bit.ly/1MM9pCm",target:"_blank",rel:"noopener noreferrer"}},[e._v("PyCon US 2013 키노트"),_("OutboundLink")],1),e._v(" "),_("ul",[_("li",[e._v("'서브루틴은 컴퓨터 언어 역사에서 가장 중요한 발견'이라며, A;B;C작업과 P;B;Q 작업 사이에서 B작업을 서브루틴으로 만들 수 있다. 즉 샌드위치를 만들면서 속을 마음대로 바꿀 수 있는데, with 문은 샌드위치 빵을 마음대로 바꿀 수 있는 기능인 것이다. with문은 서브루틴의 짝이다.")])])])])])}),[],!1,null,null,null);t.default=v.exports}}]);