# 문자열 내장 함수

> 문자열을 활용한 여러 함수들을 정리하였다.

## 목차

- [문자열의 인덱스 번호 찾기](#문자열의-인덱스-번호-찾기)
- [인덱스 번호로 문자 찾기](#인덱스-번호로-문자-찾기)
- [특정 구간의 문자 찾기](#특정-구간의-문자-찾기)
- [특정 구간의 문자를 바꾸기](#특정-구간의-문자를-바꾸기)

---

## 문자열의 인덱스 번호 찾기

#### 1. `indexOf()` - 첫 번째 위치 찾기

문자열 앞에서부터 검색하여 가장 처음 발견된 문자열의 인덱스를 반환합니다.

```javascript
const str = "Hello World, Hello JavaScript";
console.log(str.indexOf("Hello")); // 0
console.log(str.indexOf("JavaScript")); // 18
console.log(str.indexOf("Python")); // -1 (없으면 -1 반환)
```

#### 2. `lastIndexOf()` - 마지막 위치 찾기

문자열 뒤에서부터 검색하여 가장 먼저 발견된 문자열의 인덱스를 반환합니다. 

```javascript
const str = "Hello World, Hello JavaScript";
console.log(str.lastIndexOf("Hello")); // 13 (뒤쪽 Hello 위치)
```

#### 3. 시작 위치 지정 (Optional)

`indexOf(searchValue, fromIndex)`를 사용해 특정 인덱스 이후부터 검색할 수 있습니다.

```javascript
const str = "Hello World, Hello JavaScript";
// 5번 인덱스 이후부터 'Hello' 검색
console.log(str.indexOf("Hello", 5)); // 13
```

#### 4. `search()` - 정규식 사용

정규표현식을 사용하여 문자열 위치를 찾을 때 유용합니다.

```javascript
const str = "Hello World";
console.log(str.search("World")); // 6
```

---

## 인덱스 번호로 문자 찾기

JavaScript에서 특정 인덱스 번호로 문자를 가져오는 방법은 크게 세 가지가 있습니다.

#### 1. 대괄호 표기법 (Bracket Notation)

배열처럼 인덱스를 직접 사용하여 문자를 가져옵니다. 가장 읽기 쉽고 현대적인 방식입니다.

```js
const str = "Hello";
console.log(str[3]); // "l"
```

범위를 벗어난 인덱스 입력 시 `undefined` 반환을 한다.

#### 2. `charAt()` 메서드

전통적인 메서드로, 지정한 인덱스의 문자를 반환합니다.

```js
const str = "Hello";
console.log(str.charAt(3)); // "l"
```

범위를 벗어난 인덱스 입력 시 `""`(빈문자열) 반환을 한다.

#### 3. `at()` 메서드 (최신방식)

가장 최근(ES2022)에 추가된 방식으로, **음수 인덱스**를 사용하여 뒤에서부터 문자를 찾을 때 매우 유용합니다.

```js
const str = "Hello";
console.log(str.at(3));  // "l"
console.log(str.at(-1)); // "o" (마지막 문자)
```

범위를 벗어난 인덱스 입력 시 `undefined` 반환을 한다.

---

## 특정 구간의 문자 찾기

문자열의 특정 구간(*예를 들어 인덱스 2부터 6까지*)을 추출할 때는 `slice()` 또는 `substring()` 메서드를 사용합니다.

#### 1. `slice()` 메서드 

`slice(start_index, end_index)`를 사용합니다. 이 때 **끝 인덱스는 포함되지 않으므로**, 6번 인덱스까지 포함하려면 7을 넣어야 합니다.

```js
const str = "0123456789"; // 10자 문자열
const result = str.slice(2, 7); 

console.log(result); // "23456" (인덱스 2, 3, 4, 5, 6 추출)
```

#### 2. `substring()` 메서드 

`slice()`와 거의 동일하게 동작합니다.

```js
const str = "0123456789";
console.log(str.substring(2, 7)); // "23456"
```

---

## 특정 구간의 문자를 바꾸기

문자열의 특정 구간을 다른 문자로 바꿀 때는 `replace()` 또는 `slice()` 조합을 사용합니다.

#### 1. `replace()`와 정규식 사용

가장 간단한 방법은 바꾸고 싶은 **문자열 자체**를 지정하거나, **정규표현식**을 사용하는 것입니다.

```js
let str = "0123456789";
// "23456" 부분을 "ABC"로 교체
let newStr = str.replace("23456", "ABC"); 

console.log(newStr); // "01ABC789"
```

#### 2. 인덱스 번호로 잘라서 합치기

*2번부터 6번 인덱스*라는 **위치 정보**만 알고 있을 때는 `slice()`로 앞뒤를 잘라 새로운 문자를 끼워 넣는 방식이 가장 확실합니다.

```js
let str = "0123456789";
let start = 2;
let end = 7; // 6번 인덱스까지 포함하기 위해 7 지정
let replacement = "ABC";

// (0~1번) + (새 문자) + (7번~끝)
let newStr = str.slice(0, start) + replacement + str.slice(end);

console.log(newStr); // "01ABC789"
```

#### 3. `toSpliced()` 배열 변환 (최신 방식)

문자열을 배열로 바꾼 뒤 특정 구간을 갈아끼우고 다시 합치는 방법입니다. (최신 브라우저 지원)

```js
let str = "0123456789";
let arr = [...str]; // 문자열을 배열로 변환

// 인덱스 2부터 5개를 제거하고 "ABC" 추가
let newStr = arr.toSpliced(2, 5, "ABC").join("");

console.log(newStr); // "01ABC789"
```