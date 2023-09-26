const arr = [1, 2, 3];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// 구조 분해 할당
const [a, b, c] = arr;

// 변수를 배열로 만든 다음 (배열 개수는 똑같아야 함!) 상단의 arr을 같게 하는 것 그것이 구조 분해 할당이다.

console.log(a, b, c);

// 변수가 미리 할당되어 있을 경우
let e = 5,
  f = 6;
// let d = 4 let e = 5 let f = 6 이런 식으로도 가능하거나 위의 써져있는 것처럼 사용하는 것이 가능하다.

const arr2 = [1, 2, 3];

// const d = arr2[0];
// 구조 분해 할당

[, e, f] = arr2;
console.log(e, f);
// 재할당했기에 1,2,3이 나오고 재할당을 안했으면 4,5,6이 나온다.

// 구조 분해 할당을 할 때에는 b,c가 순서대로 들어가야 하므로 꼭 , e, f 이렇게 붙여준다.

// 나머지 할당
const arr3 = [6, 7, 8];
const [g, ...rest] = arr3;
// const [g, rest] 하면 6,7 이 출력이 되지만 [g, ...rest]하면 rest에 남은 7,8이 재할당이 되면서 6 [7, 8] 이 출력된다.
console.log(g, rest);

// 객체 구조 분해 할당
const obj = {
  h: 1,
  i: 2,
  j: 3,
};

// const ee = obj.e;
// const ff = obj.f;
// const gg = obj.g;

// console.log(obj.e, obj.f, obj.g);

// 구조 분해 할당
const { h = 4, i: free, k: kk = 10 } = obj;

console.log(h, free, kk);

// 선택적 체이닝 (?.)
let user = null; /* 주소 정보가 없는 사용자 */

// console.log(user.name)
console.log(user?.name);

// 예시
let user2 = {
  name: "winter",
  age: 2,
  address: {
    city: "seoul",
    zipcode: "12345",
  },
};

let user3 = {
  name: "fall",
  age: 3,
};

function printCity(user) {
  return user.address?.city || "주소 정보가 없습니다"
}

// address.city는 타입 에러가 나지만 address?.city는 undefined

console.log(printCity(user2))
console.log(printCity(user3))
