(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{219:function(t,a,s){"use strict";s.r(a);var e=s(0),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"파이썬스러운-객체"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#파이썬스러운-객체"}},[t._v("#")]),t._v(" 파이썬스러운 객체")]),t._v(" "),s("blockquote",[s("p",[t._v("절대로 결코 앞에 언더바 두 개를 사용하지 말라. 이것은 짜증스러울 정도로 개인적인 이름이다.  - 이안 비킹. "),s("a",{attrs:{href:"http://pythonpaste.org/StyleGuide.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paste 스타일 가이드"),s("OutboundLink")],1),t._v("에서 발췌")])]),t._v(" "),s("h2",{attrs:{id:"객체의-표현"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#객체의-표현"}},[t._v("#")]),t._v(" 객체의 표현")]),t._v(" "),s("p",[s("code",[t._v("repr()")]),t._v("는 개발자가 보고자 하는 형태로 표현한 문자열, "),s("code",[t._v("str()")]),t._v("은 사용자가 보고자 하는 형태로 표현한 문자열을 반환한다.")]),t._v(" "),s("h2",{attrs:{id:"벡터-클래스의-구현"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#벡터-클래스의-구현"}},[t._v("#")]),t._v(" 벡터 클래스의 구현")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/fluentpython/example-code/tree/master/09-pythonic-obj",target:"_blank",rel:"noopener noreferrer"}},[t._v("깃헙 페이지"),s("OutboundLink")],1),t._v("를 참고하자.")]),t._v(" "),s("p",[s("code",[t._v("byte()")]),t._v(" 함수로 저장하고, "),s("code",[t._v("memoryview()")]),t._v("와 "),s("code",[t._v("cast()")]),t._v("로 로딩이 가능하다.")]),t._v(" "),s("h2",{attrs:{id:"classmethod와-staticmethod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classmethod와-staticmethod"}},[t._v("#")]),t._v(" @classmethod와 @staticmethod")]),t._v(" "),s("p",[t._v("이 두 데커레이터는 "),s("code",[t._v("self")]),t._v("를 생략하게 만드는데, 전자는 해당 클래스를 첫 인자로 받게 만들어주고, 후자는 첫번째 인자를 무시하게끔 만든다.")]),t._v(" "),s("h2",{attrs:{id:"포멧된-출력"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#포멧된-출력"}},[t._v("#")]),t._v(" 포멧된 출력")]),t._v(" "),s("p",[t._v("내장함수인 "),s("code",[t._v("format()")]),t._v("과 메서드인 "),s("code",[t._v("str.format()")]),t._v("를 이용한다. format에서 이용되는 형식을 "),s("a",{attrs:{href:"http://bit.ly/1Gt4vJF",target:"_blank",rel:"noopener noreferrer"}},[t._v("포맷 명시 간이 언어(Format Specification Mini-Language)"),s("OutboundLink")],1),t._v("라고 부른다.")]),t._v(" "),s("h2",{attrs:{id:"해시-가능한-vector2d"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#해시-가능한-vector2d"}},[t._v("#")]),t._v(" 해시 가능한 Vector2D")]),t._v(" "),s("p",[t._v("지금까지 정의한 Vector2D는 해시할 수 없으므로, 집합에 쓸 수 없다. 해시 가능하게 하려면 "),s("code",[t._v("__hash()__")]),t._v("를 구현해야 한다. 해시 가능하게 하려면 우선 불변형으로 만들어야 한다.")]),t._v(" "),s("p",[s("code",[t._v("@property")]),t._v(" 데커레이터를 통해서 변수의 직접 접근을 막고, 읽기 전용으로 만든다. 불변형이 된 상태에서 해시 함수를 구현해야 한다. 해시 함수는 반드시 int 형을 반환해야 한다. 동일한 객체는 동일한 해시를 가져야 하므로, "),s("code",[t._v("__eq()__")]),t._v(" 함수에서 이용한 특성을 이용해서 구현하는 것이 좋다. 공식 문서에는 요소의 해시에 비트 단위 XOR 연산자 (^)를 사용하는 것을 권장한다. Vector2D는 다음과 같이 구현할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__hash__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"파이썬에서의-비공개-속성과-보호된-속성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#파이썬에서의-비공개-속성과-보호된-속성"}},[t._v("#")]),t._v(" 파이썬에서의 비공개 속성과 보호된 속성")]),t._v(" "),s("p",[t._v("파이썬에서는 클래스의 상속 과정에서 변수명이 중복되는 것을 방지하기 위해서 이름 장식(name mangling)이라고 하는 방식을 도입하였다. 변수명앞에 클래스명을 추가로 붙여준다. 하지만 이는 보안 기능은 아니다. 실수를 방지하지만 고의적인 악용을 막지는 못한다. 이안 비킹은 이와 관련하여 언더바 두개(던더, dunder)를 쓰지 말것을 주장하면서, 차라리 던더 대신 언더바+클래스명+언더명을 쓰라고 주장한다. 이 또한 나쁘지만 최소한 의도가 명확하게 보이기 때문이다.")]),t._v(" "),s("p",[t._v("파이썬에서는 관례적으로 언더바 1개는 보호된 속성이라고 생각하고 사용하는 측면에서 의도적으로 사용하지 않으려고 하는 관례가 있지만, 강제적으로 규정할 수는 없다.")]),t._v(" "),s("h2",{attrs:{id:"slots-클래스-속성으로-공간-절약하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slots-클래스-속성으로-공간-절약하기"}},[t._v("#")]),t._v(" "),s("code",[t._v("__slots___")]),t._v(" 클래스 속성으로 공간 절약하기")]),t._v(" "),s("p",[t._v("파이썬은 기본적으로 객체 속성을 각 객체 안의 "),s("code",[t._v("__dict__")]),t._v("라는 딕셔너리형 속성에 저장한다. 이는 빠르게 속성에 접근할 수 있게 하지만, 메모리 사용량 부담이 커지게 된다. 이 때 "),s("code",[t._v("__slots__")]),t._v(" 클래스 속성을 이용하면 딕셔너리 대신 튜플에 저장하게 만듦으로써 메모리 사용량을 엄청나게 줄일 수 있다.")]),t._v(" "),s("p",[t._v("숫자 데이터를 처리하는 경우는 NumPy를 사용하자.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vector2d")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    __slots__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__x'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__y'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    typecode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d'")]),t._v("\n")])])]),s("p",[t._v("위 코드와 같이 작성하면, 인터프리터가 해당 속성을 튜플형 구조체에 저장한다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ time python3 mem_test.py vector2d_v3.py\n$ time python3 mem_test.py vector2d_slots.py\n")])])]),s("p",[s("a",{attrs:{href:"https://github.com/fluentpython/example-code/tree/master/09-pythonic-obj",target:"_blank",rel:"noopener noreferrer"}},[t._v("저장소"),s("OutboundLink")],1),t._v("의 코드를 이용하여, 위 명령으로 실행할 수 있다.")]),t._v(" "),s("p",[t._v("메모리 사용량을 체크하는 아래 코드는 인상적이다.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("mem_init "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getrusage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RUSAGE_SELF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ru_maxrss\n")])])]),s("p",[s("code",[t._v("__slots__")]),t._v("를 이용하게 되면, 클래스에 속성을 추가할 수 없게 되는데, 이는 최적화를 위한 희생이다. 이러한 방법을 클래스 확장을 막는 기능으로 사용하면 안된다.")]),t._v(" "),s("p",[t._v("어설픈 최적화는 독이 되기 마련이므로, 수치형 자료를 다룰 때는 NumPy를, 비수치형 자료를 다룰 때는 pandas를 이용하자.")]),t._v(" "),s("h3",{attrs:{id:"slots-사용시-유의점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slots-사용시-유의점"}},[t._v("#")]),t._v(" "),s("code",[t._v("__slots__")]),t._v(" 사용시 유의점")]),t._v(" "),s("ul",[s("li",[t._v("상속이 되지 않는다. 상속시 다시 정의해 줘야 한다.")]),t._v(" "),s("li",[s("code",[t._v("__dict__")]),t._v("를 추가하지 않는 이상, 클래스에 속성을 추가할 수 없다. 그러나 "),s("code",[t._v("__dict__")]),t._v("를 추가하면 최적화 효과가 반감된다.")]),t._v(" "),s("li",[t._v("약한 참조를 사용하기 위해서는 "),s("code",[t._v("__weakref__")]),t._v(" 속성을 "),s("code",[t._v("__slots__")]),t._v(" 리스트에 추가해주어야 한다.")])]),t._v(" "),s("h2",{attrs:{id:"클래스-속성-오버라이드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#클래스-속성-오버라이드"}},[t._v("#")]),t._v(" 클래스 속성 오버라이드")]),t._v(" "),s("p",[t._v("파이썬은 클래스 속성을 객체 속성의 기본값으로 사용하는 특징이 있다.")]),t._v(" "),s("p",[s("code",[t._v("__bytes__()")]),t._v(" 메서드에서 사용예를 살펴보았는데, "),s("code",[t._v("self.typecode")]),t._v("는 기본적으로 "),s("code",[t._v("Vector2d.typecode")]),t._v(" 클래스 속성을 가져온다.")]),t._v(" "),s("h2",{attrs:{id:"읽을거리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#읽을거리"}},[t._v("#")]),t._v(" 읽을거리")]),t._v(" "),s("p",[t._v("객체를 두 가지 문자열로 출력할 필요에 대한 초기 인식은 스몰토크에서 나타났다. 바비 울프(Bobby Woolf)의 1992년 논문 "),s("a",{attrs:{href:"http://bit.ly/1IIKX6t",target:"_blank",rel:"noopener noreferrer"}},[t._v('"객체를 문자열로 출력하는 방법: printString()과 displayString() 메서드"'),s("OutboundLink")],1),t._v("에서 설명하고 있다.")]),t._v(" "),s("p",[t._v("자바의 접근 지시자 역시 안전 장치이다. 보안 장치가 아니다. 보안 관리자와 함께 배포하지 않으면, 바이트 코드를 읽어서 쉽게 해당 필드를 읽을 수 있다.")])])}),[],!1,null,null,null);a.default=_.exports}}]);