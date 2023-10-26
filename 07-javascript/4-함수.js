// 함수 선언하기
hello();
// world();

// 함수 선언문
function hello() {
  console.log("hello");
}

// 함수 표현식
const world = function () {
  console.log("world");
};

world();
// 함수 선언문은 함수 호출이 위에 있든 아래에 있든 자동으로 선언이 된다. (호이스팅이 작동o)
// 하지만 함수 표현식은 함수 호출이 위에 있으면 작동이 안된다. (호이스팅이 작동x)

// 반환 및 종료
// 함수는 return을 만나면 종료된다.
// return 뒤에 오는 코드는 실행되지 않는다.

function hello1() {
  return "hello";
}
function hello2() {
  return;
}
function hello3() {
  return 1;
  return 2;
}
function hello4() {
  console.log("4");
  return 3;
  console.log("5");
}
console.log(hello1(), hello2(), hello3(), hello4());

// 예시
function getGrade(score) {
  if (score === 100) {
    // A+
    return "A+";
  } else if (score >= 90) {
    // A
    return "A";
  } else if (score >= 80) {
    // B
    return "B";
  } else if (score >= 70) {
    // C
    return "C";
  } else if (score >= 60) {
    // D
    return "D";
  } else {
    return "F";
    // F일 경우
  }
}

console.log(getGrade(100));

// 매개 변수의 패턴
function sum(x, y = 1) {
  return x + y;
}

console.log(
  sum(1, 5)
); /* y=1이라는 값이 있지만 여기에 5를 할당해서 총 6이 나온다. */
console.log(sum(1)); /* 기본값이 1이라서 2라는 결과가 나온다. */

// 객체의 구조 분해 할당
const user = {
  name: "winter",
  age: 2,
  email: "wwww@naver.com",
};

function getName({ name }) {
  return name;
}
// 매개변수는 받는 역할이라서 꼭 같은 이름일 필요는 없다.

function getEmail({ email = "이메일이 없습니다." }) {
  return email;
}

console.log(getName(user));
console.log(getEmail(user));

// const에 email 이 있으면 email 값이 나온다. why? 이메일이 없습니다.는 기본값이다. 근데 email이 생겨버려서 기본값 이상인 것

// 배열의 구조 분해 할당
const animals = ["dog", "cat", "fish"];

// 두번째 요소 반환
function getSecond([, b = "두 번째 요소가 없습니다.", c]) {
  return [b, c];
}

console.log(getSecond(animals));

// 화살표 함수
// function 함수이름(매개변수){실행문}
// (매개변수) => {실행문}

// () => {실행문} 매개변수가 없을 때
// x => {...} 메개변스기 힌 개인 경우, 소괄호를 생략할 수 있다.
// (x,y) => {...} 매개변수기 여러 개인 경우, 소괄호를 생략할 수 없다.

function hello() {
  console.log("hello");
}

const hello11 = function () {
  console.log("hello11");
};

const hello12 = () => {
  console.log("hello12");
};

hello();
hello11();
hello12();

// sum 함수
function sum1(x, y) {
  return x + y;
}

// 표현식

const sum2 = function (x, y) {
  return x + y;
};

const sum3 = (x, y) => {
  return x + y;
};

// 화살표 함수 축약
const sum4 = (x, y) => x + y;

console.log(sum1(1, 2));
console.log(sum2(1, 2));
console.log(sum3(1, 2));

// 화살표 함수 예시
const a = () => {};
const b = (x) => {};
const c = (x, y) => {};
const d = (x) => {
  return x + x;
};
const e = (x) => x + x;
const f = (x) => {
  console.log(x);
  return x * x;
};

const g = () => {
  return { a: 1 };
};
const h = () => ({ a: 1 });

const i = () => {
  return [1, 2];
};
const j = () => [1, 2];

// 객체 구조 분해 할당
const user1 = {
  name: "가을",
  age: 2,
};

function print({ name, age }) {
  // const { name, age } = u;

  return `${name}은 ${age}살 입니다.`;
  // return u.name;
}

console.log(print(user1));

// 배열의 구조 분해 할당

const animals1 = ["개", "고양이", "참새"];

function print2([, b]) {
  // const [, b] = arr;
  return b;
}

console.log(print2(animals1));

// 나머지 매개변수

function sum9(a, b, ...rest) {
  console.log(a, b, rest);
}

console.log(sum9(1, 2));
console.log(sum9(1, 2, 3, 4, 5, 6, 7, 8, 9));

// 화살표 함수
// 기본 문법
// const name = () => {}
// x => {}; /* 매개변수가 하나일 때 소괄호 생략 가능 */
// (x, y) => {} 매개변수가 두개일 때에는 소괄호 생략이 불가능
// x => {return x + x}
// x => x + x  중괄호 생략 시 return문 생략 가능
// (x) => {
//   console.log(x);
//   return x * x;
// }; return키워드로 시작하지 않는 경우 중괄호 생략이 불가능하다.

const gg = () => {
  return { a: 1 };
};

const ggg = () => ({ a: 1 }); /* 객체 반환 시 소괄호로 감싸준다.  */

const hh = () => {
  return [1, 2];
};

const hhh = () => {
  [1, 2];
};

// 콜백 함수
// 함수의 매개변수로 전달되는 함수

const aa = (callback) => {
  callback();
  console.log("a");
};

const bb = () => {
  console.log("b");
};

aa(bb);

// 매개변수 기본값
function sum10(x, y = 1) {
  return x + y;
}

console.log(sum10(1, 3));
console.log(sum10(1)); /* 1 + undefined = NaN */
console.log(sum10(1)); /* 2 */

// callback 함수
const cc = (c) => {
  c(); /* dd */
  console.log("cc"); /* cc */
};

const dd = () => {
  console.log("dd");
};

cc(dd);

// 콜백 함수 예시1

// const sum11 = (a, b) => a + b; /* = const sum11 = (a,b) => {return a + b} */

// const sum11 = (a, b) => {
//   setTimeout(() => {}, 1000);
// };

const sum11 = (a, b, c) => {
  setTimeout(() => {
    c(a + b);
    return;
  }, 1000);
};

sum11(1, 3, (value) => {
  console.log(value);
});
sum11(3, 15, (value) => {
  console.log(value);
});

// 재귀함수
// 함수가 자기 자신을 호출하는 함수

let ii = 0;
const x = () => {
  console.log("x");
  ii++;
  if (ii < 4) {
    x();
  }
};
x();

// 재귀함수 예시1
const userA = { name: "A", parent: null };
const userB = { name: "B", parent: userA };
const userC = { name: "C", parent: userB };
const userD = { name: "D", parent: userC };

const getRootUser = (user) => {
  if (user.parent) {
    return getRootUser(user.parent);
  }
  return user;
};

console.log(getRootUser(userB));

// setTimeout(함수, 시간)

// const hello13 = () => {
//   console.log("hello");
// };

// const timeOut = setInterval(hello13, 3000);

// const h1El = document.querySelector("button");

// h1El.addEventListener("click", () => {
//   console.log("click");
//   clearInterval(timeOut);
// });

// this
// 일반함수는 호출 위치(함수x)에서 this가 정의

function user20() {
  this.first = "odd";
  this.last = "jin";
  return {
    first: "winter",
    last: "Kim",
    // getFull: function () {
    //   return `${this.first} ${this.last}`;
    // }, //메소드
    getFull: () => {
      return `${this.first} ${this.last}`;
    },
  };
}

// 화살표 함수에서의 this는 함수의 위치! 

const u = user20();
console.log(u.getFull());
