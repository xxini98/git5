// 숫자

// toFixed(자릿수) : 소수점 자릿수를 지정
const num = 3.1415926;

console.log(num.toFixed(2));
console.log(typeof num.toFixed(2));
console.log(Number(num.toFixed(2))); /* 3.14가 숫자로 나옴 */
// (Number)로 감싸면 숫자로 변환됨

// toLocaleString(언어) : 숫자를 문자열로 변환하면서 천 단위마다 구분

const num2 = 1000000000;

console.log(num2.toLocaleString());
console.log(`${num2.toLocaleString()}원`);

// Number.isInteger(숫자) : 숫자가 정수인지 확인

console.log(Number.isInteger(0.5)); /* False */
console.log(Number.isInteger(1)); /* true */
console.log(Number.isInteger(-1)); /* true */

// Math 객체
// Math.random() :  0 이상 1 미만의 랜덤한 숫자를 반환

console.log(Math.random());

function getRandom() {
  return Math.floor(Math.random() * 20);
}

console.log(getRandom());

// 7세 이하 어린이 찾기

const users = [
  { name: "고길동", age: 36 },
  { name: "둘리", age: 6 },
  { name: "또치", age: 25 },
];

const children = users.filter((user) => user.age <= 7);

console.log(children);

// 또치 찾기

const Ehcl = users.find((user) => user.name === "또치");

console.log(Ehcl);



// 

const arr = [1, [2, [3, [4]]]];

console.log(arr.flat(0)); // [1, 2, [3, [4]]] 
console.log(arr.flat()); // [1, 2, [3, [4]]]  
console.log(arr.flat(1)); // [1, 2, [3, [4]]]
console.log(arr.flat(2)); // [1, 2, 3, [4]]
console.log(arr.flat(Infinity)); // [1, 2, 3, 4]
