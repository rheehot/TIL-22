(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{232:function(t,a,e){"use strict";e.r(a);var r=e(17),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"색깔-겹치기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#색깔-겹치기"}},[t._v("#")]),t._v(" 색깔 겹치기")]),t._v(" "),e("h2",{attrs:{id:"배경-및-진행상황"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#배경-및-진행상황"}},[t._v("#")]),t._v(" 배경 및 진행상황")]),t._v(" "),e("p",[t._v("여러가지 색깔의 레이어를 중첩하여 보여줄 필요가 있었다. 그래서 색을 더하려고 했는데, 생각처럼 딱 떨어지는 결과가 나오지는 않는다.")]),t._v(" "),e("p",[t._v("d3에서 지도를 중첩해서 그리면, 가장 위쪽 레이어만 마우스 이벤트가 걸리기 때문에 (이미지를 덮어버리므로), 하나의 레이어에서 색을 합칠 필요가 있었다.\n일단은 좋은 링크가 있어서 그대로 적용하였으나, RGB는 더할수록 밝아지기 때문에, 원하는 결과물이 나오지는 않았다.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://stackoverflow.com/questions/8743482/calculating-opacity-value-mathematically",target:"_blank",rel:"noopener noreferrer"}},[t._v("알파값을 고려하여 색 합치기"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("그래서 실제 구현은 위 예제를 이용해서 RGB로 나눈다음 단순 평균을 하였다. 최대 3개의 레이어만 합치면 되기때문에, 큰 문제는 없었는데, 평균을 취하면, 값을 더할수록 결과값이 평균에 가까워지므로, 선명도가 떨어지게 된다. 그래서 2개 레이어를 더할 때랑 3개 레이어를 더할 때 다소 선명도가 떨어지는 현상이 있는데, 현 시점에서는 무시하기로 하였다.")])])}),[],!1,null,null,null);a.default=s.exports}}]);