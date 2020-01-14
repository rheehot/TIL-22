(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{214:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_3장-딕셔너리와-집합"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3장-딕셔너리와-집합"}},[t._v("#")]),t._v(" 3장 딕셔너리와 집합")]),t._v(" "),a("h2",{attrs:{id:"기본-자료형"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기본-자료형"}},[t._v("#")]),t._v(" 기본 자료형")]),t._v(" "),a("p",[t._v("자료형인지 검사할 때 dict로 직접 체크하는 것보다 "),a("code",[t._v("isinstance(my_dict, collections.abc.Mapping)")]),t._v("과 같이 추상베이스클래스(ABC)를 이용하는 편이 낫다. dict와 유사한 다른 매핑형 자료도 체크할 수 있기 때문이다.")]),t._v(" "),a("p",[t._v("**해시 가능하다(hashable)**라는 뜻은 "),a("a",{attrs:{href:"http://bit.ly/1K4qjwE",target:"_blank",rel:"noopener noreferrer"}},[t._v("파이썬 용어집"),a("OutboundLink")],1),t._v("에서 다음과 같이 정의한다.")]),t._v(" "),a("blockquote",[a("p",[t._v("수명 주기 동안 결코 변하지 않는 해시값을 갖고 있고("),a("code",[t._v("__hash__()")]),t._v(" 필요), 다른 객체와 비교할 수 있으면("),a("code",[t._v("__eq__()")]),t._v(" 필요) 해당 객체를 해시 가능하다고 한다. 동일하다고 판단되는 객체는 반드시 해시값이 동일해야 한다.")])]),t._v(" "),a("h2",{attrs:{id:"지능형-딕셔너리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#지능형-딕셔너리"}},[t._v("#")]),t._v(" 지능형 딕셔너리")]),t._v(" "),a("p",[t._v("지능형 리스트(listcomp)와 제너레이터 표현식(genexps)과 마찬가지 형태로 구현가능하다.")]),t._v(" "),a("h2",{attrs:{id:"존재하지-않는-키를-채워넣어주는-방식"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#존재하지-않는-키를-채워넣어주는-방식"}},[t._v("#")]),t._v(" 존재하지 않는 키를 채워넣어주는 방식")]),t._v(" "),a("p",[a("code",[t._v("setdefault")]),t._v("와 "),a("code",[t._v("defaultdict")]),t._v("가 있다.\n딕셔너리에서 키로 검색한 후, 여러개의 값을 리스트에 추가하는 경우에 코드는 다음과 같다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# setdefault를 이용하는 경우")]),t._v("\nindex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nindex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setdefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# defaultdict를 이용하는 경우")]),t._v("\nindex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaultdict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nindex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("setdefault는 키를 검색하고, 있을 때와 없을 때 각각 추가적으로 발생하는 접근횟수를 줄여줌으로써 성능향상이 크다.")]),t._v(" "),a("p",[t._v("defaultdict는 "),a("code",[t._v("__getitem__()")]),t._v(" 호출에 대한 기본값만을 제공하므로, "),a("code",[t._v("index.get(word)")]),t._v("와 같은 형식에서는 값이 없을 때 None를 리턴한다.")]),t._v(" "),a("p",[a("code",[t._v("__missing__()")]),t._v(" 메소드는 "),a("code",[t._v("__getitem__()")]),t._v("에서 키가 없을 경우 호출된다.")]),t._v(" "),a("h2",{attrs:{id:"그-외-매핑형"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#그-외-매핑형"}},[t._v("#")]),t._v(" 그 외 매핑형")]),t._v(" "),a("ul",[a("li",[t._v("collections.OrderedDict")]),t._v(" "),a("li",[t._v("collections.ChainMap: 여러 개의 목록 중 하나라도 검색되면 성공. "),a("code",[t._v("pylookup = ChainMap(locals(), globals(), vars(builtins))")])]),t._v(" "),a("li",[t._v("collections.Counter: 자세한 설명은 "),a("a",{attrs:{href:"http://bit.ly/1JHVi2E",target:"_blank",rel:"noopener noreferrer"}},[t._v("문서"),a("OutboundLink")],1),t._v("를 참조.")]),t._v(" "),a("li",[t._v("collections.UserDict: 표준 dict처럼 동작하는 매핑형")])]),t._v(" "),a("h2",{attrs:{id:"불변-매핑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#불변-매핑"}},[t._v("#")]),t._v(" 불변 매핑")]),t._v(" "),a("p",[t._v("MappingProxyType이라는 래퍼 클래스는 mappingproxy 객체를 반환하는데, SQL에서 view같은 역할을 하며, 원 객체의 자료를 그대로 보여주는 반면(업데이트되면, 업데이트된 값으로 보여준다), 직접 수정을 불가능하도록 한다.")]),t._v(" "),a("p",[t._v("Pingo.io에서 Board 클래스는 pins 속성을 공개하는데, 핀번호를 바꿀 수 없도록 하여 실수하지 않고, 내부 기능을 이용할 수 있도록 하고 있다. 다만 개념상 동일하나 mappingproxy를 이용한 것은 아니다.")]),t._v(" "),a("h2",{attrs:{id:"집합"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#집합"}},[t._v("#")]),t._v(" 집합")]),t._v(" "),a("p",[t._v("set과 불변형 frozenset이 내장형으로 있다. 빈 집합은 "),a("code",[t._v("set()")]),t._v("으로 표기해야 한다. "),a("code",[t._v("{}")]),t._v("는 딕셔너리 타입이 된다.")]),t._v(" "),a("p",[t._v("집합을 이용하여 교집합 갯수 세는 법은 다음과 같다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 방법1: 둘다 집합일 경우만 가능")]),t._v("\nfound "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("needles "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" haystack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 방법2: 반복 가능형이면 됨")]),t._v("\nfound "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" needles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" haystack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        found "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 방법3a: 하나라도 집합이면 방법2보다 빠르다")]),t._v("\nfound "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("needles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("haystack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 방법3b")]),t._v("\nfound "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("needles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("intersection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("haystack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("집합을 초기화하는 방식은 "),a("code",[t._v("{1, 2, 3}")]),t._v("이 "),a("code",[t._v("set([1, 2, 3])")]),t._v("보다 더 빠르고 효율적이다.")]),t._v(" "),a("p",[t._v("지능형 집합(set comprehension, setcomp) 또한 가능하다.")])])}),[],!1,null,null,null);s.default=e.exports}}]);