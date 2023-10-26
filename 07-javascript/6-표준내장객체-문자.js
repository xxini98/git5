const str = "Hello World";

// length

console.log(str.length);

// includes

console.log(str.includes("Hello"));
console.log(str.includes("hello"));
console.log(str.includes("Hello", 1));
console.log(str.includes("ello", 1));

// indexOf
console.log(str.indexOf("World"));
console.log(str.indexOf("world"));
// 위치값을 반환 (만약 없으면 -1 반환) 얘도 대소문자 구분을 한다.

if (str.indexOf("Hello") !== -1) {
  console.log("Hello가 포함된 문장입니다.");
}

if (!str.includes("hello")) {
  console.log("Hello가 포함되지 않은 문장입니다.");
}

// padStart

const str2 = "12345";

console.log(str2.padStart(10, "0"));
console.log(str2.padEnd(3, "0"));

// replace

const str3 = "hello winter winter";

console.log(str3.replace("winter", "summer"));
console.log(str3.replace(/winter/g, "summer"));
console.log(str3);

// slice
const str4 = "hello world";

console.log(str4.slice(0, 3)); /*  0부터 3의 직전인 2까지라는 의미! (hel)*/
console.log(str4.slice(6, -1)); /* w부터 -1(맨 뒤에서 첫번째) */
console.log(str4.slice(6)); /* 6이후로 끝까지 추출 */
console.log(str4);

// split
console.log(
  str4.split(" ")
); /* 따옴표 띄어쓰기 따옴표 이렇게 하면 hello / world 이렇게 반환된다*/

console.log(
  str4.split("")
); /* 따옴표 따옴표 중간에 띄어쓰기 없으묜 h e l l o w o r l d 이렇게 반환된다. */

// toLowerCase
const str5 = "Hello World";

console.log(str5.toLowerCase()); /* 소문자로 반환 */
console.log(str5.toUpperCase()); /* 대문자로 반환 */

// trim
const str6 = " hello world ";

console.log(str6.trim()); /* trim을 사용하면 양쪽에 공백이 사라진다. */
console.log(str6);
