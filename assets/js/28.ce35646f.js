(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{229:function(t,a,r){"use strict";r.r(a);var s=r(0),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"신경망"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#신경망"}},[t._v("#")]),t._v(" 신경망")]),t._v(" "),r("h2",{attrs:{id:"지능형-기계-만들기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#지능형-기계-만들기"}},[t._v("#")]),t._v(" 지능형 기계 만들기")]),t._v(" "),r("p",[t._v("인간의 뇌와 유사한 지능형 기계를 꿈꿔왔지만, 최근에서야 딥러닝이라는 실마리를 찾았다.")]),t._v(" "),r("h2",{attrs:{id:"기존-컴퓨터-프로그램의-한계"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기존-컴퓨터-프로그램의-한계"}},[t._v("#")]),t._v(" 기존 컴퓨터 프로그램의 한계")]),t._v(" "),r("p",[t._v("손글씨를 인식하는 프로그램은 널리 알려진 예제인데, 기존 모델링 방식으로 숫자를 구분하는 방식을 정의한다고 하면 복잡한 알고리즘을 구성해야 할 것이다. 6과 0을 구분하기 힘든 손글씨를 구분하기 위해서는 고리의 시작점과 끝점 사이의 거리의 한계치를 지정할 수 있겠지만, 명확하게 구분하기는 쉽지않다. 사물인식, 음성 이해, 자동 번역 같은 문제가 이러한 부류이다.")]),t._v(" "),r("h2",{attrs:{id:"머신러닝의-작동-원리"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#머신러닝의-작동-원리"}},[t._v("#")]),t._v(" 머신러닝의 작동 원리")]),t._v(" "),r("p",[t._v("딥러닝은 머신러닝이라는 인공지능의 한 분야이다. 머신러닝은 데이터에서 배운다는 개념에 바탕을 두고 있는데, 수학적으로 살펴보면 입력자료와 파라미터로 구성된 함수를 정의하는 과정이다. 파라미터를 조정하여 입력자료를 이용하여 추정한 값이 목표치에 근접하도록 오차를 최소화하는 과정을 거치게 된다. 선형 퍼셉트론은 1950년대에 소개되었다. 선형 퍼셉트론에 대한 청사진을 추정하기 위해(초평면을 구하기 위해), 파라미터 벡터의 최적화가 필요하다. 경사하강법이 널리 이용되고 있다. 데이터가 선형분리가 안되는 경우에는 분류기가 제대로 동작하지 않으므로 한계가 분명하다.")]),t._v(" "),r("h2",{attrs:{id:"뉴런"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#뉴런"}},[t._v("#")]),t._v(" 뉴런")]),t._v(" "),r("p",[t._v("사람 뇌의 기본단위는 뉴런인데, 각 뉴런은 평균 6,000개 이상의 링크를 갖는다. 머신러닝은 이러한 생물학적 구조에서 영감을 얻어 모델을 발전시켜왔다. 뉴런은 입력신호를 받아들일 때 강도에 따라 반응여부를 결정하고, 여러 입력치가 일정 threshold를 넘을 경우 전기신호를 축삭돌기를 통해 신경말단으로 전달한다. 이 신호는 연결된 다른 뉴런의 가지돌기에서 다시 입력 신호가 된다. 워런 S. 메컬러와 월터 H. 피츠가 1943에 처음 시도한 접근법은 로짓함수를 이용하여, 다수의 입력신호를 하나의 신호로 변환한다. 이를 수학적으로 표현하면 "),r("code",[t._v("y=f(xw + b)")]),t._v("가 되고, "),r("code",[t._v("f")]),t._v("는 로짓함수, "),r("code",[t._v("x")]),t._v("는 입력벡터, "),r("code",[t._v("w")]),t._v("는 가중치 벡터, "),r("code",[t._v("b")]),t._v("는 바이어스 항이 된다.")]),t._v(" "),r("h2",{attrs:{id:"뉴런으로-선형-퍼셉트론-표현하기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#뉴런으로-선형-퍼셉트론-표현하기"}},[t._v("#")]),t._v(" 뉴런으로 선형 퍼셉트론 표현하기")]),t._v(" "),r("p",[t._v("선형 퍼셉트론은 뉴런과 정확히 일치함을 알 수 있다.")]),t._v(" "),r("h2",{attrs:{id:"전방향-신경망"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#전방향-신경망"}},[t._v("#")]),t._v(" 전방향 신경망")]),t._v(" "),r("p",[t._v("각각 3개의 뉴런이 존재하는 3개층의 신경망을 상상해 보자. 가중치는 1단계에서 9개, 2단계에서 9개, 총 18개의 가중치 벡터를 갖는 구조가 될 것이다. 최종단계 뉴런은 결과값을 표현하고, 첫 단계 뉴런은 입력값을 받아들인다. 중간계층은 은닉층(hidden layer)로 불린다. 이 때 연결은 입렵값에서 출력값까지 일방향으로 연결되어 있음에 주목하자.")]),t._v(" "),r("h2",{attrs:{id:"선형-뉴런과-한계"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#선형-뉴런과-한계"}},[t._v("#")]),t._v(" 선형 뉴런과 한계")]),t._v(" "),r("p",[t._v("선형 뉴런은 계산하기는 쉽지만, 은닉층이 없는 신경망으로, 복잡한 현상을 학습하지 못하는 한계가 있다. 일종의 비선형성을 갖는 뉴런이 필요하다.")]),t._v(" "),r("h2",{attrs:{id:"시그모이드-tanh-relu-뉴런"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#시그모이드-tanh-relu-뉴런"}},[t._v("#")]),t._v(" 시그모이드, tanh, ReLU 뉴런")]),t._v(" "),r("p",[t._v("뉴런 계산에서 널리 이용되는 3가지 뉴런이 있는데, 시그모이드 함수, tanh, ReLU 함수가 그것이다.")]),t._v(" "),r("p",[t._v("시그모이드 함수는 로짓이 낮은 숫자가 될수록 뉴런 결과가 0에 가깞고, 로짓이 클때는 1에 수렴하는 모양이 된다. tanh은 유사한 형태이지만 출력범위가 0에서 1사이가 아니라, -1에서 1사이인 것이 다르다. 비선형성을 고려할 때, 0이 중심이 되므로 선호하는 경향이 있다.")]),t._v(" "),r("p",[t._v("ReLU(렐루, 제한된 선형 유닛)은 하키 스틱모양으로 양수는 그대로 출력하는 반면 음수의 경우 무시한다. 컴퓨터 비전 분야를 비롯하여 많은 분야에서 널리 이용하고 있는 추세인데, 잠재적인 위험에 대처하는 전략과 ReLU가 선택된 이유는 5장에서 논의한다.")]),t._v(" "),r("h2",{attrs:{id:"소프트맥스-출력층"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#소프트맥스-출력층"}},[t._v("#")]),t._v(" 소프트맥스 출력층")]),t._v(" "),r("p",[t._v("소프트맥스는 출력벡터를 확률분포로 변환해준다. 지수의 자승형태로 값을 변환하여 비율을 구하는 방식이다. 약한 신호는 0에 수렴하도록 만드는 효과가 있다.")]),t._v(" "),r("h2",{attrs:{id:"요약"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#요약"}},[t._v("#")]),t._v(" 요약")]),t._v(" "),r("p",[t._v("뉴런에 대한 개념을 간단히 살펴보았다.")])])}),[],!1,null,null,null);a.default=v.exports}}]);