const users = [
  { name: "홍길동", age: 44 },
  { name: "마이콜", age: 24 },
  { name: "둘리", age: 6 },
];

const newUsers = users.map((user) => ({
  ...user,
  email: null,
}));

console.log(newUsers);

// 평균 나이 구하기

const totalAge = users.reduce((acc, cur) => acc + cur.age, 0);

console.log(totalAge);

const avgAge = (totalAge / users.length).toFixed();

console.log(avgAge);

// 모든 이름 출력하기
const namesArr = users.reduce((acc, cur) => {
  acc.push(cur.name);
  return acc;
}, []);

console.log(namesArr);

// 모든 이름을 한 줄로 출력하기

// const names = namesArr.join(",");
// console.log(names);
