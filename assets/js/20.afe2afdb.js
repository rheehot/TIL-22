(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{266:function(_,t,e){"use strict";e.r(t);var v=e(0),r=Object(v.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"_10장-시퀀스-해킹-해시-슬라이스"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10장-시퀀스-해킹-해시-슬라이스"}},[_._v("#")]),_._v(" 10장 시퀀스 해킹, 해시, 슬라이스")]),_._v(" "),e("p",[_._v("벡터 공간 모델은 주로 정보 검색 분야에서 이용되며, 핵심 연관성 척도는 코사인 유사도이다. 실제 벡터 연산을 위해서는 NumPy와 SciPy 패키지가 유용하다. "),e("a",{attrs:{href:"https://pypi.python.org/pypi/gensim",target:"_blank",rel:"noopener noreferrer"}},[_._v("gensim PyPI"),e("OutboundLink")],1),_._v("은 이 둘을 이용하여 자연어 처리 및 정보 검색을 위한 벡터 공간 모델링을 보여준다.")]),_._v(" "),e("h2",{attrs:{id:"사용자-정의형-vector2d-예제"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용자-정의형-vector2d-예제"}},[_._v("#")]),_._v(" 사용자 정의형 Vector2D 예제")]),_._v(" "),e("p",[e("code",[_._v("__repr__()")]),_._v("는 디버깅 시에 시스템에서 호출하므로, 결코 예외를 발생시키면 안된다.")]),_._v(" "),e("h2",{attrs:{id:"프로토콜과-덕-타이핑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로토콜과-덕-타이핑"}},[_._v("#")]),_._v(" 프로토콜과 덕 타이핑")]),_._v(" "),e("p",[_._v("파이썬에서 완전히 작동하는 시퀀스형을 구현하기 위해서 특별한 클래스를 상속할 필요가 없다. 단지 시퀀스 프로토콜이 필요로 하는 메서드만 구현하면 된다. 시퀀스형임을 선언하지 않았음에도 시퀀스처럼 "),e("strong",[_._v("동작")]),_._v("하기 때문에 시퀀스인 것이다. 이러한 메커니즘에 대해 알렉스 마르텔리는 "),e("strong",[_._v("덕 타이핑")]),_._v("이라고 정의하였다.")]),_._v(" "),e("p",[_._v("프로토콜은 비공식적이며, 강제로 적용되는 개념이 아니므로, 특정 환경에 따라 필요한 메서드만 구현하여 쓰면 된다.")]),_._v(" "),e("blockquote",[e("p",[_._v("덕 타이핑")]),_._v(" "),e("p",[_._v("그것이 오리인지 조사하지 말라.")]),_._v(" "),e("p",[_._v("오리 같은 행동의 정확히 어떤 부분을 언어로 표현해야 하는지에 따라 오리처럼 꽥꽥거리는지, 오리처럼 뒤뚱뒤뚱 걷는지 등을 조사하라.")]),_._v(" "),e("p",[_._v("by 알렉스 마르텔리 (2000.07.26, comp.lang.python 뉴스그룹)")])]),_._v(" "),e("h2",{attrs:{id:"슬라이스-가능한-벡터-구현"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#슬라이스-가능한-벡터-구현"}},[_._v("#")]),_._v(" 슬라이스 가능한 벡터 구현")]),_._v(" "),e("p",[e("code",[_._v("__len()__")]),_._v("과 "),e("code",[_._v("__getitem__()")]),_._v("를 구현하면 참조와 슬라이스가 기능한다(제대로 동작하는 건 아니다).")]),_._v(" "),e("h3",{attrs:{id:"슬라이스의-작동방식"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#슬라이스의-작동방식"}},[_._v("#")]),_._v(" 슬라이스의 작동방식")]),_._v(" "),e("p",[_._v("슬라이스에서 "),e("code",[_._v("1:4")]),_._v("와 같은 표현식은 "),e("code",[_._v("slice(1, 4, None)")]),_._v("이 된다.")]),_._v(" "),e("p",[e("code",[_._v("slice")]),_._v("객체의 "),e("code",[_._v("indices")]),_._v("라는 메서드는 생략되거나 음수인 인덱스를 주어진 시퀀스에 맞게 맞추어주는 역할을 한다.")]),_._v(" "),e("h3",{attrs:{id:"슬라이스를-인식하는-getitem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#슬라이스를-인식하는-getitem"}},[_._v("#")]),_._v(" 슬라이스를 인식하는 "),e("code",[_._v("__getitem__()")])]),_._v(" "),e("p",[_._v("인자로 넘어오는 인덱스의 타입에 따라서 작동 방식을 달리 지정해줘야 한다.")]),_._v(" "),e("h2",{attrs:{id:"동적-속성-접근을-구현한-벡터-예제"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#동적-속성-접근을-구현한-벡터-예제"}},[_._v("#")]),_._v(" 동적 속성 접근을 구현한 벡터 예제")]),_._v(" "),e("p",[_._v("속성을 찾지 못하면, 인터프리터는 "),e("code",[_._v("__getattr__()")]),_._v(" 메서드를 호출한다. 다시 말해, 파이썬은 객체의 속성이 찾고, 해당 속성이 없는 경우 객체의 클래스에서 검색하고, 상속 트리를 따라 계속 올라가면서 검색한다. 그래도 찾지 못하면 self와 속성명을 인자로 하는 "),e("code",[_._v("__getattr__()")]),_._v(" 메서드를 호출한다.")]),_._v(" "),e("p",[_._v("이 특성 때문에, "),e("code",[_._v("__getattr__()")]),_._v(" 메서드를 구현할 때는 "),e("code",[_._v("__setattr__()")]),_._v(" 메서드도 함께 구현해야 한다. 그렇지 않은 경우, 사용자가 새로운 값을 속성값으로 지정하면, 그 값은 객체 내에 새로운 속성을 만들고, 다시는 "),e("code",[_._v("__getattr__()")]),_._v(" 메서드에 도달하지 않는다.")]),_._v(" "),e("h2",{attrs:{id:"해싱과-더-빠른"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#해싱과-더-빠른"}},[_._v("#")]),_._v(" 해싱과 더 빠른 "),e("code",[_._v("==")])]),_._v(" "),e("p",[_._v("일반적으로 객체의 각 속성마다 해시값을 구한다음 배타적 비트 연산자(xor, ^)를 이용하여 객체의 해싱 값을 구한다.")]),_._v(" "),e("p",[_._v("이 때, "),e("code",[_._v("functools.reduce()")]),_._v("가 유용하게 이용될 수 있다.\n비트 연산자는 "),e("code",[_._v("operator.xor")]),_._v("로 참조 가능하다.")]),_._v(" "),e("p",[_._v("임의의 길이를 갖는 벡터의 값을 비교하기 위해서는 먼저 길이가 동일한지 검사하고, "),e("code",[_._v("zip()")]),_._v("를 이용하여 1:1 비교가 가능하다.")]),_._v(" "),e("p",[e("code",[_._v("zip()")]),_._v("은 가장 짧은 시퀀스에 맞춰서 쌍을 맞춰주는데, zipper가 잠기는 건 연상하면 쉽다. "),e("code",[_._v("fillvalue")]),_._v(" 파라미터를 이용하여 가장 긴 리스트에 맞출 수도 있다.")]),_._v(" "),e("h2",{attrs:{id:"포맷팅을-구현한-벡터"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#포맷팅을-구현한-벡터"}},[_._v("#")]),_._v(" 포맷팅을 구현한 벡터")]),_._v(" "),e("p",[e("code",[_._v("__format__()")]),_._v("함수를 이용하여 포맷을 지정할 수 있는데, 기존에 사용하는 코드는 피하는 것이 좋다. 실수형 포멧 코드로는 "),e("code",[_._v("eEfFgGn%")]),_._v("가 있고, 정수형은 "),e("code",[_._v("bcdoxXn")]),_._v(", 문자열은 "),e("code",[_._v("s")]),_._v("를 쓰고 있다.")]),_._v(" "),e("h2",{attrs:{id:"요약"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#요약"}},[_._v("#")]),_._v(" 요약")]),_._v(" "),e("p",[_._v("슬라이스 표현식은 슬라이스 객체를 만들고, "),e("code",[_._v("__getitem__()")]),_._v("에서 처리한다. "),e("code",[_._v("__getattr__()")]),_._v("는 반드시 "),e("code",[_._v("__setattr__()")]),_._v("와 같이 써줘야 하며, "),e("code",[_._v("__hash__()")]),_._v(" 메서드를 살펴보면서, "),e("code",[_._v("functools.reduce()")]),_._v("도 살펴보았다.")]),_._v(" "),e("h2",{attrs:{id:"읽을거리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#읽을거리"}},[_._v("#")]),_._v(" 읽을거리")]),_._v(" "),e("p",[e("code",[_._v("reduce()")]),_._v(" 고위함수는 다른언어에서 fold(), accumulate(), aggregate(), compress(), inject() 등의 함수로 제공된다. 함수형 프로그래밍에 중점을 둔 고위함수 응용방법은 "),e("a",{attrs:{href:"http://en.wikipedia.org/wiki/Fold_(higher-order_function)",target:"_blank",rel:"noopener noreferrer"}},[_._v('"Fold (higer-order function)" 문서'),e("OutboundLink")],1),_._v("를 참조하자.")])])}),[],!1,null,null,null);t.default=r.exports}}]);