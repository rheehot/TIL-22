# 탐색적 데이터 분석

통계학은 지난 한 세기동안 대부분 발전하였다. `데이터 분석`과 `모델링`을 다루는 일종의 응용과학이다.

통계학의 수학적 기반인 확률론은 17세기에서 19세기를 걸치면서 토머스 베이즈, 피에르시몽 드 라플라스, 카를 가우스가 이룬 업적을 기반으로 발전하였다.

현대 통계학은 1800년대 후반 프랜시스 골턴과 칼 피어슨에서 시작하여 20세기 초 로널드 피셔가 `실험계획법`과 `최대우도추정`를 정리하면서 정립되었다.

`탐색적 데이터 분석(Exploratory data analysis, EDA)`은 비교적 새로운 영역이다. 이전 통계학은 `추론`, 적은 표본에서 더 큰 모집단에 대한 결론을 도출하기 위한 일련의 과정이었지만, 1962년 존 투키가 `데이터 분석의 미래`라는 대표 논문을 통해 통계학의 개혁을 요구하며 `데이터 분석`이라는 새로운 과학적 학문을 제안했다. 탐색적 데이터 분석의 투키의 1977년 동명의 책을 통해 정립되었다.

투키의 학생이었던 데이비드 도노호 스탠퍼드 교수가 투키 탄생 100주년 기념 워크샵에서 발표한 논문([`50 Years of Data Science`](http://courses.csail.mit.edu/18.337/2015/docs/50YearsDataScience.pdf)]을 읽어보자.

## 정형화된 데이터의 요소

> 데이터 과학에서 가장 중요한 도전은 폭발적인 양의 원시 데이터를 활용가능한 형태의 정보로 변환하는 것이다.

데이터는 다음과 같은 형태로 정리할 수 있다.

* 연속형(continuous)
* 이산(discrete)
* 범주형(categorical)
* 이진(binary)
* 순서형(ordinal)

## 테이블 데이터

데이터 분석에서 대표적으로 사용되는 객체는 테이블 데이터(rectangular data)이다. 관련하여 용어를 정리하면 아래와 같다.

* 데이터 프레임: 통계와 ML에서 가장 기본이 되는 테이블 형태의 데이터 구조
* 피쳐: 일반적으로 테이블의 각 열. 유의어: 특징, 속성, 입력, 예측변수, 변수
* 결과(outcome): 목표가 되는 예측 성과물. 실험이나 연구는 피처를 이용해 결과를 예측한다. 유의어: 종속변수, 응답, 목표, 출력
* 레코드: 일반적으로 테이블의 각 행. 유의어: 사례, 관측값, 샘플

### 데이터 프레임과 인덱스

인덱스는 성능향상을 위해서 사용되는 열인데, 파이썬의 `pandas`에서는 다중/계층적 인덱스를 지원한다.

반면 R에서는 `data.frame`는 인덱스를 갖지만 다중 인덱스를 지원하지 않는다. 이를 보완하기 위해 `data.table`과 `dplyr`가 널리 사용되고 있다.

### 테이블 형식이 아닌 데이터 구조

시계열 데이터는 동일한 변수 안에 연속적인 측정값을 갖는다.

공간 데이터는 객체와 필드(field) 정보를 갖는다.

그래프(혹은 네트워크) 데이터는 객체들 간의 관계에 집중한다. 물류 혹은 추천 시스템에서 유용하게 이용되고 있다.

## 위치 추정

데이터가 주어졌을 때 가장 기초적인 단계는 각 피처의 대푯값(typical value)를 구하는 것이다. 이는 대부분의 값이 어디쯤 위치하는지(중심경향성)를 나타내는 추정값이다. 관련하여 주요 용어를 정리하면 다음과 같다.

* 평균
* 가중평균
* 중간값(median)
* 가중 중간값
* 절사평균(trimmed mean) 혹은 절단평균(truncated mean)
* 로버스트하다(robust): 극단값에 민감하지 않다. 저항성이 있다(resistant).
* 특잇값(outlier)

### 측정지표와 추정값

데이터에서 얻은 값을 실제 상태를 나타내는 이론적 참값과 구분하기 위하여 계산된 값을 추정값(estimate)과 측정지표(metric)로 부른다. 전자는 통계학에서 부르는 용어로 불확실성을 이해하고자 하는 노력의 발로인 반면, 후자는 데이터과학에서 이용되는 용어로 비즈니스나 조직의 목표치에 관심이 있음을 반영한다. 그러므로, 통계학자는 추정하고, 데이터과학자는 측정한다.

### 평균

평균은 가장 기본적인 위치 추정 방법이다. 값의 총합을 값의 개수로 나눈 값이다. 엑스바로 표시한다.

절사평균은 정렬후 양쪽 끝 p개의 값을 제외하고 평균한 것으로 피겨대회에서 채점시 최고점과 최저점을 제외하고 평균내는 방식이다. 이를 통해 극단값의 영향을 제거하고자 한다.

가중평균은 특정값이 큰 변화량을 가질 때, 그 영향을 상쇄시킬 수 있다. 예를 들어, 특정 센서의 정확도가 떨어진다면, 해당 센서의 가중치를 낮출 수 있다. 그리고 샘플 수집시 특정 집단의 비율이 너무 크거나 작을 경우, 가중치를 적용할 수 있다.

### 중간값과 로버스트 추정

데이터를 정렬하여 가장 중간에 위치하는 값을 중간값이라고 정의하는데, 데이터에 특이치가 있는 경우 평균이 왜곡될 수 있다. 흔히 드는 예는 빌게이츠를 포함한 지역의 가구소득이다.

가중중간값은 중간값과 비슷하나, 단순히 가운데 위치한 값이 아니라, 가중치를 적용한 위 어떤 기준에 따라 상위 절반의 합과 하위 절반의 합이 같은 지점을 찾게 된다. 이 역시 특잇값에 로버스트하다.

특잇값이 꼭 틀린 데이터는 아니다. 물론 유닛이 잘못되거나, 센서 오작동 등으로 에러가 특잇값으로 잡히기도 한다. 어떤 경우든 특잇값을 확인하고 자세히 살펴볼 필요가 있다.

`이상검출(anomaly detection)`은 특이치에 관심을 두는 분야이다.

중간값만이 유일한 로버스트한 방법은 아니다. 절사평균은 중간값과 평균의 절충안이라고 생각할 수 있다.

통계학자들은 로버스트하면서 효율적인 추정법을 찾기 위해 노력해 왔으나, 이는 작은 데이터에 유용하게 사용되었다. 하지만 빅데이터 시대에 큰 이점이 있다고 보기는 어렵다.

### 더 읽을거리

* 퍼듀대학교의 마이클 레빈의 [`[강의 슬라이드]`](http:/bit.ly/2NDvrhs)
* 존 투키의 고전 `탐색적 데이터 분석`은 여전히 널리 읽힌다.

## 변이 추정

변이(variability)는 값이 얼마나 밀집해 있는지 혹은 퍼져 있는지를 나타내는 산포도(dispersion)를 나타낸다. 관련 용어는 다음과 같다.

* 편차
* 분산: 편차의 제곱합을 n-1로 나눈 값
* 표준편차: L2 노름(norm), 유클리드 노름
* 평균절대편차: L1 노름, 맨하탄 노름
* 중간값의 중위절대편차(median absoute deviation from the median): 중간값과의 편차의 절대값의 중간값
* 범위(range)
* 순서통계량: 순위
* 백분위수(percentile): 분위수.
* 사분위범위: 75번째 백분위수와 25번째 백분위수 사이의 차이, IQR

### 표준편차와 관련 추정값들

평균절대편차, 분산, 표준편차. 

표준편차는 원래 데이터와 같은 척도(scale)이기 때문에 분산보다 훨씬 해석하기 쉽고, 수학적으로 제곱한 값이 절댓값보다 통계 모델을 다루는 데 편리한 것으로 통계 이론이 뒷받침하고 있어서 표준편차를 널리 이용하고 있다.

자유도(degree of freedom)은 `n-1`를 사용하는데, `n`를 이용하면 편향 추정이라고 부르며 참값을 과소평가하게 된다. `n-1`로 나누면 비편향 추정이 되고, `n-1` 자유도를 갖는 것은 표준편차가 표본의 평균에 따른다는 제약조건을 가지고 있기때문에 자유도가 1 작다.

분산, 표준편차, 평균절대편차 모두 특잇값과 극단값에 로버스트하지 않다.

로버스트한 변위 추정값으로는 중간값으로부터의 중위절대편차(MAD, median absoute deviation from the median)가 있다. 중간값과의 편차의 절대값을 리스트로 만들고, 해당 리스트의 중간값을 구하는 방식이다. 절사평균과 유사하게 절사 표준편차를 계산하는 것 역시 가능하다.

분산, 표준편차, 평균절대편차, 중위절대편차는 모두 동일한 추정은 아니지만, 모두 정규분포를 가정하고 있다. 항상 `표준편차 > 평균절대편차 > 중위절대편차` 이며, 중위절대편차에 척도인자(scaling factor) 1.4826를 곱하면 정규분포에서 표준편차와 같은 척도로 사용할 수 있다.

### 백분위수에 기초한 추정

정렬된 데이터인 **순서통계량**에서 분위수(quantile), 백분위수(percentile)를 이용할 수 있다. 50번째 백분위수는 중간값과 같다. 80번째 백분위수는 작은 값에서 시작해서 큰값으로 80% 위치에 있는 값이다. 사분위범위(IQR)은 25번째 백분위수와 75번째 백분위수 차이로, [1,2,3,3,5,6,7,9]의 데이터셋이 있다고 가정하자. 25번째 백분위수는 2.5, 75번째 백분위수는 6.5이다. 따라서, IQR은 4가 된다.

백분위수를 계산할 때, 변수 값이 정확히 구해지지 않을 수 있는데, 보통은 가중편균을 이용한다. R의 경우에는 분위수를 계산하기 위한 방법으로 9가지 방법을 제공한다.

### 예제

R에서는 `sd()`, `IRQ()`, `mad()` 함수를 통해서 계산할 수 있고, 표준편차가 MAD의 거의 두배가 되는데, 표준편차가 특잇값에 민감하기 때문이다. R에서는 `mad()` 함수가 평균과 같은 척도가 갖도록 보정한다.

### 더 읽을거리

* 데이비드 레인의 [온라인 통계자료](http://onlinestatbook.com/2/introduction/percentiles.html)
* 케빈 데이븐포트의 [R-Bloggers 글](https://www.r-bloggers.com/absolute-deviation-around-the-median/)

## 데이터 분포 탐색하기

데이터 분포를 알아보기 위한 방식으로 다음과 같은 도구들이 있다.

* 상자그림(boxplot): Tukey, Jogn W. Exploratory Data Analysis. Pearson (1977). 소개
* 도수분포표(frequency table)
* 히스토그램(histogram): 도수분포표의 그림
* 밀도 그림(density plot)

### 백분위수와 상자그림

투키에 의해 소개된 박스플롯은 `boxplot()` 함수를 이용하여 R에서 쉽게 그릴 수 있다. 위쪽과 아래쪽은 각각 75%, 25% 백분위수를 나타내며, 아래 위로 점선(whisker)으로 데이터 전체의 범위를 나타낸다. R의 기본 설정은 수염부분이 사분위 범위의 1.5배 이상 더 멀리 나가지 않도록 하며, 그 밖의 자료는 점으로 표시한다.

### 도수분포표와 히스토그램

R에서 도수분포표는 `seq()` 함수를 이용하여 분절점(breaks)을 결정하고, 이 분절점을 `cut()`함수에 넘겨주어 구할 수 있다. 히스토그램은 `hist()` 함수에 분절점 정보를 넘겨주어 그릴 수 있다.

통계학 이론에서 위치와 변이는 분포의 일차, 이차 적률(혹은 모멘트)이라고 한다. 삼차, 사차 모멘트는 왜도(skewness), 첨도(kurtosis)라고 부른다. 왜도는 얼마나 비스듬히 쏠려 있는지를 나타내고, 첨도는 데이터가 극단값을 갖는 경향성을 나타낸다.

### 밀도추정

**커널밀도추정**은 데이터로부터 직접 계산하는데, 부드러운 히스토그램으로 생각할 수 있다. `density()`함수를 통해서 구할 수 있으며, 밀도 그림에서는 개수가 아닌 비율을 표시한다.

밀도추정은 통계학에서 오랜 역사를 갖고 있는 주제로, R에서 20개 이상의 함수를 제공하고 있다. 쉬운 문서에서는 ASH나 KernSmooth 같은 패키지를 추천하고 있는데, 기본 함수를 사용하는 것만으로 충분할 것이다.

### 더 읽을거리

* 뉴욕 주립대 오스웨고의 [튜토리얼](http://www.oswego.edu/~srp/stats/bp_con.htm)
* 밀도추정을 다룬 논문 ["Density estimation in R"](http://vita.had.co.nz/papers/density-estimation.pdf)
* R-Bloggers에 소개된 [히스토그램에 대한 유용한 포스트](https://www.r-bloggers.com/basics-of-histograms)

## 이진 데이터와 범주 데이터 탐색하기

범주형 데이터에서는 간단한 비율로 데이터를 살펴볼 수 있다. 관련한 주요 용어는 다음과 같다.

* 최빈값(mode)
* 기댓값(expected value): 출현 확률에 따른 평균
* 막대도표(bar chart)
* 파이그림(pie chart)

히스토그램은 x축이 수치적으로 값을 나타내고 막대 사이가 붙어있지만, 막대도표는 x축은 서로 다른 범주를 표시하고, 막대가 서로 떨어져 있다.

### 최빈값

범주형 데이터를 분석하는데 간단히 사용되나, 수치 데이터에는 잘 사용하지 않는다.

### 더 읽을거리

['오해를 일으킬 수 있는 그래프들'](http://passyworldofmathematics.com/misleading-graphs)

## 상관관계

용어정리

* 상관계수(correlation coefficient)
* 상관행렬
* 산점도(scatterplot)

상관계수(피어슨 상관계수)는 변수 1과 변수2 각각의 평균에서 편차들을 서로 곱한 값들의 평균을 각 변수의 표준편차의 곲으로 나눠준다. 다만 이때, 평균을 구하기 위해 나누는 갯수는 `N` 대신 `N-1`를 사용한다.

상관계수 역시, 평균과 표준편차와 같이 특잇값에 민감하다. 따라서 R의 `cor`함수 같은 경우, 절사평균과 유사한 `trim`이라는 인자를 제공한다.

데이터 순위를 기초로 하는 `스피어먼의 로(Spearman's rho)` 혹은 `켄들의 타우(Kendall's tau)` 등의 방식은 로버스트한 비선형 관계를 다룰 수 있으나, 데이터 크기가 작고, 특별한 가설검정이 필요할 때만 주로 이용됨.

### 더 읽을거리

데이비드 프리드먼, 로버트 피사니, 로저 퍼브스가 공저한 `Statistics` (W. W. Norton, 2007)