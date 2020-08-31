(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{414:function(_,e,t){"use strict";t.r(e);var v=t(25),r=Object(v.a)({},(function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_8장-객체-참조-가변선-재활용"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8장-객체-참조-가변선-재활용"}},[_._v("#")]),_._v(" 8장 객체 참조, 가변선, 재활용")]),_._v(" "),t("p",[_._v("파이썬에서 발생하는 미묘한 버그의 핵심 원인 중 하나인 객체와 이름과의 구분, 참조 변수, 튜플의 가변성, 얕은 복사/깊은 복사 등을 살펴볼 것이다.")]),_._v(" "),t("h2",{attrs:{id:"변수는-상자가-아니다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#변수는-상자가-아니다"}},[_._v("#")]),_._v(" 변수는 상자가 아니다")]),_._v(" "),t("blockquote",[t("p",[_._v("'상자로서의 변수' 개념이 실제로는 객체지향 언어에서 참조 변수를 이해하는 데 방해가 된다. - 린 안드레아 스타인 교수 (프랭클린 W. 올린 공과대학교)")])]),_._v(" "),t("p",[_._v("예를 들어, '변수 s가 시소에 할당되었다.'라고 표현하고, '시소가 변수 s에 할당되었다.'라고 표현하지는 않도록 주의한다.")]),_._v(" "),t("h2",{attrs:{id:"정체성-동질성-별명"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#정체성-동질성-별명"}},[_._v("#")]),_._v(" 정체성, 동질성, 별명")]),_._v(" "),t("p",[t("code",[_._v("is")]),_._v("는 "),t("code",[_._v("id()")]),_._v("를 이용하여 정체성, 즉 정확히 동일한 객체임을 비교한다.")]),_._v(" "),t("h3",{attrs:{id:"연산자와-is-연산자-간의-선택"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#연산자와-is-연산자-간의-선택"}},[_._v("#")]),_._v(" "),t("code",[_._v("==")]),_._v(" 연산자와 "),t("code",[_._v("is")]),_._v(" 연산자 간의 선택")]),_._v(" "),t("p",[_._v("일반적으로 "),t("code",[_._v("==")]),_._v(" 연산자가 더 흔하다. 하지만 변수가 싱글턴인 경우 "),t("code",[_._v("is")]),_._v(" 연산자를 사용한다. "),t("code",[_._v("is")]),_._v(" 연산자가 더 빠르며, "),t("code",[_._v("==")]),_._v(" 연산자는 "),t("code",[_._v("__eq__()")]),_._v(" 메소드를 호출한다. object 객체는 기본적으로 객체의 ID를 비교하도록 구현되어 있으므로 "),t("code",[_._v("is")]),_._v("와 같은 결과를 돌려주지만, 내장 자료형은 이를 오버라이드하므로 차이가 있다.")]),_._v(" "),t("h3",{attrs:{id:"튜플의-상대적-불변성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#튜플의-상대적-불변성"}},[_._v("#")]),_._v(" 튜플의 상대적 불변성")]),_._v(" "),t("p",[_._v("튜플은 기본적으로 분변형이지만, 내부에 가변형 객체를 포함하는 경우, 내부의 가변객체에 값이 변경되는 걸 막을 수 없다. 즉 해당 객체의 id()는 동일하지만 값은 다른 객체가 존재할 수 있게 된다.")]),_._v(" "),t("h2",{attrs:{id:"기본-복사는-얕은-복사"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#기본-복사는-얕은-복사"}},[_._v("#")]),_._v(" 기본 복사는 얕은 복사")]),_._v(" "),t("p",[_._v("기본 복사는 얕은 복사다. "),t("code",[_._v("l2 = l1[:]")]),_._v("도 얕은 사본(shallow copy)을 생성한다. 모든 항목이 불변형이면 메모리를 절약하며 문제가 없지만, 가변 항목이 포함되어 있다면 불쾌한 문제가 발생할 수 있다.")]),_._v(" "),t("h3",{attrs:{id:"깊은-복사와-얕은-복사"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#깊은-복사와-얕은-복사"}},[_._v("#")]),_._v(" 깊은 복사와 얕은 복사")]),_._v(" "),t("p",[t("code",[_._v("copy")]),_._v("모듈은 "),t("code",[_._v("deepcopy()")]),_._v("와 "),t("code",[_._v("copy()")]),_._v("를 제공한다. 일반적으로 "),t("code",[_._v("deepcopy()")]),_._v("는 잘 작동한다. 다만 복사하면 안되는 외부 리소스나 싱글턴을 참조하는 경우에는 "),t("code",[_._v("__deepcopy__()")]),_._v(" 특별 메서드를 구현하여 제어할 수 있다.")]),_._v(" "),t("h2",{attrs:{id:"참조로서의-함수-매개변수"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#참조로서의-함수-매개변수"}},[_._v("#")]),_._v(" 참조로서의 함수 매개변수")]),_._v(" "),t("p",[_._v("파이썬은 *공유로 호출(call by sharing)*되는데, 대부분의 객체언어와 마찬가지로, 참조의 사본을 넘겨받는다. 참조가 가르키는 실제 객체는 공유하게 된다.")]),_._v(" "),t("p",[t("code",[_._v("+=")]),_._v(" 연산자는 list에 대해서는 객체를 그대로 두고, 내용만 변경하는 반면, tuple에 대해서는 새로운 객체를 생성하여 할당한다. 즉 변수의 참조가 바뀌게 된다.")]),_._v(" "),t("p",[_._v("가변형을 매개변수의 기본값으로 이용하면, 생각과 다르게 동작할 가능성이 높다. 함수에서 기본값으로 이용한 객체는 매번 새롭게 생성하는 것이 아니라, 공유된다. 빈 리스트를 매개변수의 기본값으로 준 경우, 두번째 함수 호출부터는 첫 함수호출에서 변경한 리스트의 값을 그대로 가지고 있다. 이 경우 버그를 찾기 쉽지 않다.")]),_._v(" "),t("p",[_._v("인수로 받은 객체를 메서드가 변경할 것이라는 의도가 명백하지 않은 클래스에서 인수 객체에 별명을 붙이는 작업에 주의할 필요가 있다. 불명확할 때는 사본을 만들어라.")]),_._v(" "),t("h2",{attrs:{id:"del과-가비지-컬렉션"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#del과-가비지-컬렉션"}},[_._v("#")]),_._v(" del과 가비지 컬렉션")]),_._v(" "),t("p",[_._v("del은 실제 객체를 지우지 않고, 이름만 제거한다. 참조 카운트가 0이 되면 가비지 컬렉트된다. 기본적으로 참조 카운트를 세면서 0이 되면 특별 메소드가 호출되지만, 상호 참조되어 카운트가 0이 될 수 없지만 그 외 코드에서 사용되지 않는 경우에도 세대별 가비지 컬렉션 알고리즘(generational garbage collection algorithm)을 이용해서 제거한다.")]),_._v(" "),t("p",[t("code",[_._v("__del__()")]),_._v("이라는 특별 메소드가 있지만, 제대로 구현하기 매우 어렵다. 건드리지 않는 것이 좋다.")]),_._v(" "),t("p",[t("code",[_._v("__del__()")]),_._v('의 적절한 사용과 부적절한 사용은 제시 지류 데이비스의 "'),t("a",{attrs:{href:"http://bit.ly/1GsWTa7",target:"_blank",rel:"noopener noreferrer"}},[_._v("PyPy, 가비지 컬렉션, 데드락"),t("OutboundLink")],1),_._v('"를 참조하자.')]),_._v(" "),t("p",[t("code",[_._v("weakref.finalize()")]),_._v("를 사용해서 객체가 소멸될 때 콜백 함수를 지정할 수 있다.")]),_._v(" "),t("h2",{attrs:{id:"약한-참조"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#약한-참조"}},[_._v("#")]),_._v(" 약한 참조")]),_._v(" "),t("p",[_._v("약한 참조는 객체 참조 카운트에 영향을 주지 않는 참조형태이며, 캐시 애플리케이션에 유용하게 사용된다.")]),_._v(" "),t("p",[_._v("콘솔 세션에서는 출력결과가 "),t("code",[_._v("_")]),_._v(" 변수에 자동할당된다. 이 때문에 생각치 않은 참조를 만들어내기도 한다.")]),_._v(" "),t("p",[t("code",[_._v("weakref.ref")]),_._v("클래스는 고급 사용자를 위한 저수준 인터페이스이며, 일반 사용자는 "),t("code",[_._v("weakref")]),_._v(" 컬렉션과 "),t("code",[_._v("finalize()")]),_._v("를 이용하는 것이 좋다.")]),_._v(" "),t("p",[t("code",[_._v("WeakValueDictionary")]),_._v("는 일반적으로 캐시를 구현할 때 사용된다.")]),_._v(" "),t("p",[t("code",[_._v("for")]),_._v("루프에서 사용한 변수는 "),t("code",[_._v("for")]),_._v(" 루프에서 스코프가 한정되지 않고, 전역 변수가 된다. 명시적으로 제거하기 전까지는 사라지지 않는다.")]),_._v(" "),t("p",[t("code",[_._v("list")]),_._v("와 "),t("code",[_._v("dict")]),_._v("는 약한 참조 대상이 될 수 없으나, 이를 상속받은 새로운 클래스는 약한 참조가 될 수 있다. "),t("code",[_._v("int")]),_._v("와 "),t("code",[_._v("tuple")]),_._v("은 상속클래스를 이용하더라도 약한 참조를 할 수 없다.")]),_._v(" "),t("h2",{attrs:{id:"파이썬의-특이한-불변형-처리법"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#파이썬의-특이한-불변형-처리법"}},[_._v("#")]),_._v(" 파이썬의 특이한 불변형 처리법")]),_._v(" "),t("p",[_._v("문자열 리터럴을 공유하는 최적화 기법을 인터닝(interning)이라고 한다. 구현체의 특징이므로, 문서화되어있지 않고, 사용자가 여기에 의지해서도 안된다.")]),_._v(" "),t("h2",{attrs:{id:"읽을거리"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#읽을거리"}},[_._v("#")]),_._v(" 읽을거리")]),_._v(" "),t("ul",[t("li",[_._v('"Core Python" 저자인 웨슬리 천의 '),t("a",{attrs:{href:"http://bit.ly/1GsZvEO",target:"_blank",rel:"noopener noreferrer"}},[_._v("Python 103: 메모리 모델과 모범 사례"),t("OutboundLink")],1),_._v(", "),t("a",{attrs:{href:"http://bit.ly/1HGCayS",target:"_blank",rel:"noopener noreferrer"}},[_._v("EuroPython 2011 발표영상"),t("OutboundLink")],1)]),_._v(" "),t("li",[_._v("더그 헬먼의 "),t("a",{attrs:{href:"http://pymotw.com",target:"_blank",rel:"noopener noreferrer"}},[_._v("금주의 파이썬 모듈"),t("OutboundLink")],1),_._v(': 이 블로그는 "The Python Standard Library by Example"이라는 책이 되었다.\n'),t("ul",[t("li",[_._v("그의 글 중 '"),t("a",{attrs:{href:"http://pymotw.com/2/copy",target:"_blank",rel:"noopener noreferrer"}},[_._v("copy: Duplicate Objects"),t("OutboundLink")],1),_._v("'와 '"),t("a",{attrs:{href:"http://pymotw.com/2/weakref",target:"_blank",rel:"noopener noreferrer"}},[_._v("weakref: Garbage-Collectable References to Objects"),t("OutboundLink")],1),_._v("'를 참고하자.")])])])]),_._v(" "),t("p",[_._v("파이썬의 가비지 컬렉션은 선택적이다. 구현체에 따라서 다르게 동작한다.")]),_._v(" "),t("p",[_._v("자바에서는 "),t("code",[_._v("==")]),_._v("이 정체성을 비교하기 때문에, 항상 "),t("code",[_._v("equals()")]),_._v(" 메서드를 염두해야 한다. 하지만 파이썬에서는 "),t("code",[_._v("==")]),_._v("를 제대로 오버라이드해서 정상적으로 값을 비교한다. 정체성을 비교하기 위해서는 "),t("code",[_._v("is")]),_._v(" 키워드를 이용한다.")])])}),[],!1,null,null,null);e.default=r.exports}}]);