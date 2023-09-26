// 산술 연산자
// +, -, *, /, %, ++, --
console.log(1 + 2);
console.log(5 - 7);
console.log(5 * 7);
console.log(10 / 2);
console.log(7 % 5);
/* %는 몫이 아니라 나머지를 의미함 언제쓰냐? 이 친구가 3의 배수인지 4의 배수인지 등등 배수 알아날 때 사용한다. */
console.log(6 % 3);
// 이 친구는 0이 나오는데 6이 3의 배수이기 때문이다.
console.log(8 % 2);

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(3)); /* 나머지가 0이 아니라서 false */
console.log(isEven(4)); /* 나머지가 0이라서 true */

// 할당 연산자

// const a = 2;
// console.log(a);

// a = 3;
// console.log(a);
// const 값은 재할당이 불가능하다.

let a = 2;
console.log(a);

// 재할당
a = 3;
console.log(a);

// a = a + 3;
a += 3; /* a = a + 3 이랑 같은 구문 */
// a %= 3;
console.log(a);

// 증감 연산자
let b = 1;

// console.log(b++); /* 이 아이는 1로 출력 */
// console.log(b++); /* 이 아이는 2로 출력 */

// b = b + 1;

console.log(b++); /* 1 (선출력 후연산) */
console.log(++b); /* 2 (선연산 후출력) */

// 감소 연산자

let c = 1;

// console.log(c--);
// console.log(c);

// c = c - 1;
console.log(c--); /* 1 (선출력 후연산) */
console.log(--c); /* 0 (선연산 후출력) */

// 부정 연산자
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!1);
console.log(!!0);

console.log(![]); /* 배열 */
console.log(!{}); /* 객체 */
console.log(!null);
console.log(!function () {});

// a = a + 1 (=) a =+ 1  무조건 = 이 먼저 나와야 한다.

// 비교연산자
// a === b, a > b, a <= b

console.log(1 == '1');
console.log(1 === '1');
console.log(1 != '1'); /* false(부동 연산자) */
console.log(1 !== '1'); /* true(불일치 연산자) */
console.log(1 > 2);
console.log(1 < 2);
console.log(1 >= 2);
console.log(1 <= 2);

// 논리 연산자
// &&

const f = true;
const g = true;

if (f && g) {
    console.log('둘 다 참입니다.');
}

// && 연산자는 둘 다 참일 경우에만 출력이 가능하다.

// 연산자를 기준으로 가장 먼저 만나는 거짓 데이터가 반환된다.
console.log(true && false);
console.log(1 && 0);
console.log(1 && 2 && 0);
console.log(1 && 0 && 3);
console.log('A' && 'B' && '');
console.log('a' && 'b' && 'c');

// 또(||)는 연산자
const h = false;
const i = true;

if (h || i) {
    console.log('둘 중 하나라도 참입니다. ');
}

console.log(h || i);

// 연산자를 기준으로 가장 먼저 만나는 true 데이터를 반환한다.
console.log(true || false);
console.log(1 || 0);
console.log(false || {} || 0); /* {} 가 반환된다. 객체데이터는 참의 성격 */
console.log(false || [] || null);
console.log(function () {} || '' || undefined); /* function(){}은 참의 성격! */
console.log(false || 0 || '' || NaN); /* 모두가 거짓이라 마지막 데이터만 반환된다.  */

// 병합 연산자
// a ?? b

const j = 0;
console.log(j || 5);
console.log(j ?? 5);
console.log(null ?? 1);
console.log(undefined ?? 1);
console.log(undefined || null);
console.log(null ?? 1 ?? 2);
console.log(0 ?? 1 ?? 2);

// 삼항 연산자
// 조건? 참 : 거짓

console.log(true ? 1 : 2);
console.log(false ? 1 : 2);

// if문
let p = 1;

// if (p < 3) {
//     console.log('p는 3보다 작습니다');
// } else {
//     console.log('p는 3보다 큽니다.');
// }

console.log(p < 3 ? '참' : '거짓');

// 예시
function isAnimal(text) {
    return text === '고양이' ? '고양이' : '고양이 아님';
}

// 아래는 함수 실행문
console.log(isAnimal('고양이'));
console.log(isAnimal('개'));

// 전개 연산자

// 배열의 전개 (순서로 꺼냄)
// ...q, ...r = q.concat(r)
const q = [1, 2, 3];
const r = [4, 5, 6];

console.log(q.concat(r));
console.log([...q, ...r]);

// 객체의 전개

const userC = {
    name: '김부모',
    age: 50,
};

const userD = {
    ...userC /* 가지고 오고 싶은 아이를 꼭 맨 위에 먼저 써줘야 한다.  */,
    nick: '김자식',
    // parent: userC,
};

console.log(userD);

// 함수의 인자에서의 전개 (=함수의 전개)
function sum(a, b, c) {
    console.log(a + b + c);
}
sum(1, 2, 3);

const num = [1, 2, 3];
sum(num[0], num[1], num[2]);

// 전개 연산자
sum(...num);
