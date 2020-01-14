(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{213:function(t,s,a){"use strict";a.r(s);var r=a(0),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_4장-텍스트와-바이트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4장-텍스트와-바이트"}},[t._v("#")]),t._v(" 4장 텍스트와 바이트")]),t._v(" "),a("h2",{attrs:{id:"문자-문제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#문자-문제"}},[t._v("#")]),t._v(" 문자 문제")]),t._v(" "),a("ul",[a("li",[t._v("코드 포인트: 문자의 단위원소. 유니코드에서 U+ 접두사를 붙여 4자리에서 6자리의 16진수로 표시.")]),t._v(" "),a("li",[t._v("인코딩: 코드 포인트를 바이트로 변환하는 것")]),t._v(" "),a("li",[t._v("디코딩: 바이트를 코드 포인트로 변환하는 것")])]),t._v(" "),a("h2",{attrs:{id:"바이트에-대한-기본지식"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#바이트에-대한-기본지식"}},[t._v("#")]),t._v(" 바이트에 대한 기본지식")]),t._v(" "),a("p",[t._v("bytes와 bytearray가 있는데, 전자는 파이썬3에 추가된 불변형, 후자는 파이썬 2.6에 추가된 가변형")]),t._v(" "),a("blockquote",[a("p",[t._v("s[0] == s[:1]이 되는 시퀀스 형은 str이 유일하다. 그 외 모든 시퀀스는 s[i]는 항목 하나를, s[i:i+1]은 s[i] 항목을 가진 동일한 자료형의 시퀀스를 반환한다.")])]),t._v(" "),a("h2",{attrs:{id:"구조체와-메모리뷰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#구조체와-메모리뷰"}},[t._v("#")]),t._v(" 구조체와 메모리뷰")]),t._v(" "),a("p",[t._v("메모리뷰는 바이트를 복사하지 않고, 뷰만 제공한다. 다음 코드는 GIF파일을 읽어서 헤더 정보를 알아낼 수 있다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" struct\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fmt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<3s3sHH'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <는 리틀 엔디언, 3바이트 시퀀스 2개, 그리고 short int 2개를 의미한다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image.gif'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     img "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("memoryview")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" header "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" struct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("이미지 파일은 mmap 모듈을 이용하여 메모리 맵 파일로 열면 훨씬 적은 바이트로 처리 가능하다. 관련 자료는 다음과 같다.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.python.org/3/library/mmap.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("mmap - 메모리 맵 파일 지원"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://bit.ly/1Vm7ZnI",target:"_blank",rel:"noopener noreferrer"}},[t._v("메모리 뷰"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://bit.ly/1Vm7YjA",target:"_blank",rel:"noopener noreferrer"}},[t._v("struct-bytes를 패킹된 이진 데이터로 해석하기"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"bom-byte-order-mark-유용한-깨진-문자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bom-byte-order-mark-유용한-깨진-문자"}},[t._v("#")]),t._v(" BOM(Byte Order Mark): 유용한 깨진 문자")]),t._v(" "),a("p",[a("code",[t._v("b'\\xff\\xfe'")]),t._v("가 문자열 가장 앞에 나오는데, 리틀엔디언을 표시하고, 바이트 순서가 최하위 바이트부터 시작한다는 것을 의미한다.\n반대로 빅엔디언은 최상위 바이트부터 차례대로 쓰여진다. utf-16le와 utf-16be 와 같이 미리 지정하면 BOM 를 생성하지 않는다.")]),t._v(" "),a("p",[t._v("엑셀파일의 경우, UTF8를 탐지하기 위하여 BOM에 의존하는데, BOM이 없는 경우, 윈도우 코트페이지로 인코딩되어 있다고 가정한다. 그래서 맥용 엑셀에서는 한글이 깨지는데, csv 파일에 BOM을 넣어주면 글자가 깨지지 않는다.")]),t._v(" "),a("h2",{attrs:{id:"텍스트-파일-다루기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#텍스트-파일-다루기"}},[t._v("#")]),t._v(" 텍스트 파일 다루기")]),t._v(" "),a("p",[t._v("인코딩을 지정하지 않으면, 시스템 기본 인코딩을 이용하기 때문에, 윈도우에서 제대로 동작하지 않을 가능성이 높다.")]),t._v(" "),a("p",[t._v("따라서 기본 인코딩에 의존하지 않고, 늘 인코딩을 명시하는 것이 좋다.")]),t._v(" "),a("h2",{attrs:{id:"유니코드-정규화하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#유니코드-정규화하기"}},[t._v("#")]),t._v(" 유니코드 정규화하기")]),t._v(" "),a("p",[t._v("NFC, NFD로 정규화할 수 있다. unicodedata 모듈에 normailze 함수를 이용한다. 호환성 문자로 변환하는 경우, NFKC와 NFKD가 있다.")]),t._v(" "),a("h2",{attrs:{id:"유니코드-텍스트-정렬하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#유니코드-텍스트-정렬하기"}},[t._v("#")]),t._v(" 유니코드 텍스트 정렬하기")]),t._v(" "),a("p",[t._v("비아스키 텍스트는 "),a("code",[t._v("locale.strxfrm()")]),t._v(" 함수를 정렬 키로 이용하여 정렬할 수 있다. 하지만 특정 시스템이나 환경에서 제대로 동작하지 않을 수도 있다.")]),t._v(" "),a("p",[t._v("더 간단한 방식은 PyUCA 라이브러리가 있다. 유니코드 대조 알고리즘을 이용한 정렬방식이다.")]),t._v(" "),a("p",[t._v("re 모듈 대신 regex라는 모듈이 유니코드를 더욱 잘 지원한다. 그러나 여전히 해결되지 않은 문제점이 존재한다.")]),t._v(" "),a("h2",{attrs:{id:"정규표현식에서의-str과-bytes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#정규표현식에서의-str과-bytes"}},[t._v("#")]),t._v(" 정규표현식에서의 str과 bytes")]),t._v(" "),a("p",[t._v("정규표현식에서 bytes는 아스키 범위를 벗어나는 문자는 무시한다. str 정규 표현식에서 아스키만 검색할 때는 "),a("code",[t._v("re.ASCII")]),t._v(" 플래그가 있다.")]),t._v(" "),a("h2",{attrs:{id:"os-모듈-함수에서-str과-bytes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#os-모듈-함수에서-str과-bytes"}},[t._v("#")]),t._v(" os 모듈 함수에서 str과 bytes")]),t._v(" "),a("p",[t._v("다국적 사용자를 대상으로 서비스를 하는 경우, 서버에서 파일명이 문제가 될 수 있다. 기본적으로 유니코드를 지원하더라도.\n예상치 않은 바이트에 대해 문제가 발생할 것을 방지하기 위해 surrogateescape 에러 처리기가 있다.")])])}),[],!1,null,null,null);s.default=e.exports}}]);