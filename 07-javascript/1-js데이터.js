// String (문자) 데이터

const string1 = 'hello';
// 큰 따옴표 가능!
const string2 = 'hi';
// 작은 따옴표도 가능

const string3 = `바보 ${1 + 1}`;
/* 백틱 기호는 ${name} or ${1 + 1]을 통한 사용도 가능하다. */

console.log(string1, string2, string3);

// Number (숫자)

const number = 123;
const negative = -123;
const float = 0.123;
// 따옴표를 붙이면 문자로 출력이 되고 따옴표가 없으면 숫자로 출력이 된다.

console.log(number + 1);
console.log(negative + number);
console.log(float + negative);

const number2 = -123.123;

console.log(number2 + undefined);
console.log(typeof (number2 + undefined));

// 숫자로 변환
const a = 0.1;
const b = 0.2;

console.log(a + b);
console.log((a + b).toFixed(1)); /* 소수점 자리수를 지정해주는 메소드로 문자열로 반환된다/ */
console.log(typeof (a + b).toFixed(1)); /* 문자열이기 때문에 type of 로 확인해보면 string이 나옴 */
console.log(Number((a + b).toFixed(1))); /* number로 싸줘야지만 숫자로 변환이 된다.  */

// boolean(참 과 거짓)

const truthy = true;
const falsy = false;

if (truthy) {
    console.log('truthy');
}

// null
let age = null;
console.log(age);

// 재할당의 경우 let 사용하지 않음
age = 1;
console.log(age);

// undefined
let white;
console.log(white);

white = 'jini'; /* 문자 넣을때 꼭 ""(따옴표) 넣어줘야 한다. */
console.log(white);

// ex
const user1 = {
    name: 'jini',
    age: 20,
    height: 160,
    email: null,
};

console.log(user1.name, user1.age, user1.height);
console.log(user1.email);
console.log(user1.weight);

// array (배열)
const animals = ['dog', 'cat', 'fish'];

console.log(animals);
console.log(animals[0]);
console.log(animals[2]);
console.log(animals.length);
console.log(animals[animals.length - 1]);

// object (객체)
const user2 = {
    name: 'jini',
    age: 1,
};

console.log(user2);
console.log(user2.name);
console.log(user2.age);

console.log(user2['name']);
console.log(user2['age']);

// ex

const userA = {
    name: 'KIM',
    age: '50',
};

const userB = {
    name: 'LEE',
    age: '20',
    parent: userA,
};

console.log(userB);
console.log(userB.parent.name);

console.log(userB['parent']['name']);

// 배열에 객체 넣기
const users = [userA, userB];

console.log(users[0]);
console.log(users[0].name);
console.log(users[0]['name']);

// function(함수)
// 함수 선언식 (기명 함수)
function printHello() {
    console.log('hello');
}

printHello();

console.log(printHello);
console.log(printHello());

// 함수 표현식(익명함수)

const getNumber = function () {
    return 123;
};

console.log(getNumber);
console.log(typeof getNumber);
console.log(getNumber());
console.log(typeof getNumber());

// TYPE CONVERSTION (타입 변환)

const aa = 1;
const bb = '1';

console.log(aa == bb);
console.log(aa === bb);

//  === 일치 연산자를 의미 ==는 동등 연산자를 의미

const cc = false;
const dd = 0; /* 0은 거짓을 의미한다. */

console.log(cc === dd);
console.log(cc == dd);

// === 일때는 false가 나온다. why) 0과 false를 가지고 있지 않아서
// 하지만 == 일때는 true가 나오는다 why)0은 false 의미를 가지고 있는데 이 의미가 false랑 동등하기에!

const ee = true;
const ff = 1;

console.log(ee == ff);
console.log(ee === ff);

// truthy (참 같은 값) & falsy(거짓 같은 값)

if (true) {
    console.log('true');
}
if (false) {
    console.log('true');
}

// 데이터 타입 확인 (typeof)

console.log('123');
console.log(typeof '123');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});
