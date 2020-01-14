(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{305:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-원격-접속하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-원격-접속하기"}},[s._v("#")]),s._v(" MySQL 원격 접속하기")]),s._v(" "),a("h2",{attrs:{id:"작업배경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#작업배경"}},[s._v("#")]),s._v(" 작업배경")]),s._v(" "),a("p",[s._v("웹서버로 셋팅해 놓지 않았던 vultr 서버에 급하게 LAMP 설치.\n간단한 구글링으로 웹서버 설치는 손쉽게 이루어 지고, MySQL 설치시 옵션중 외부 접속을 막아두었다.\n하지만, 근일에 mysql를 쓸 일이 생겼고, 터미널로 작업하기 귀찮아서 원격 접속계정을 추가하였다.")]),s._v(" "),a("h2",{attrs:{id:"외부연결-열기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#외부연결-열기"}},[s._v("#")]),s._v(" 외부연결 열기")]),s._v(" "),a("ol",[a("li",[s._v("my.cnf에서 접속 아이피 제한 풀고,")])]),s._v(" "),a("ul",[a("li",[s._v("MySQL 5.6 이하는 "),a("code",[s._v("/etc/mysql/my.cnf")])]),s._v(" "),a("li",[s._v("MySQL 5.7 이상은 "),a("code",[s._v("/etc/mysql/mysql.conf.d/mysqld.cnf")])]),s._v(" "),a("li",[s._v("아래 부분을 특정아이피 혹은 0.0.0.0으로 변경")])]),s._v(" "),a("div",{staticClass:"language-conf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("bind-address        = xxx.xxx.xxx.xxx\n")])])]),a("ol",[a("li",[s._v("MySQL에 외부 접속가능한 계정추가")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 계정 생성 접속은 모든 곳(@)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'myuser'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mypass'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 데이터베이스 권한 할당")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'myuser'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 권한 갱신")]),s._v("\nFLUSH "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("참고링크: "),a("a",{attrs:{href:"http://stackoverflow.com/questions/15663001/remote-connections-mysql-ubuntu",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://stackoverflow.com/questions/15663001/remote-connections-mysql-ubuntu"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"mysql-서버-데몬-다시-시작하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-서버-데몬-다시-시작하기"}},[s._v("#")]),s._v(" MySQL 서버 데몬 다시 시작하기")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql stop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);