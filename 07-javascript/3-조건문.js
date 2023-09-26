// 조건문

// if문
// if (조건문) {
//   실행문;
// }

// // if-esle문
// if (조건문) {
//   실행문;
// } else {
// }

// // if-esle if문

// if (조건문) {
//   실행문;
// } else if (조건문) {
//   실행문;
// } else {
//   실행문;
// }

// 예시

function isPositive(num) {
  if (num > 0) {
    return "양수입니다.";
  } else if (num < 0) {
    return "음수입니다.";
  } else {
    return "0입니다.";
  }
}

console.log(isPositive(1));
console.log(isPositive(-1));
console.log(isPositive(0));

// switch문
// switch (조건) {
//   case 값1:
//     실행문;
//     break;

//   case 값2:
//     실행문;
//     break;

//   default:
//     실행문;
// }

// 예시

function getSound(animal) {
  // let sound;
  // switch (animal) {
  //   case "개":
  //     sound = "멍멍";
  //     break;

  //   case "고양이":
  //     sound = "야옹";
  //     break;

  //   case "참새":
  //     sound = "짹잭";
  //     break;

  //   case "비둘기":
  //     sound = "구구구구";
  //     break;

  //   default:
  //     sound = "....?";
  // }
  // return sound;

  switch (animal) {
    case "개":
      return "멍멍";
    // break를 안 써도 되는게 return을 사용하여 함수가 빠져나가서 break가 필요 없게 되는 것!

    case "고양이":
      return "야옹";

    case "참새":
      return "짹짹";

    case "비둘기":
      return "구구구구구";

    default:
      return "....?";
  }
}

console.log(getSound("개"));
console.log(getSound("고양이"));
console.log(getSound("비둘기"));
console.log(getSound("우엥"));

// if문으로 바꾸기

function getSound2(animal) {
  if (animal === "개") return "멍멍";
  if (animal === "고양이") return "야옹";
  if (animal === "참새") return "짹짹";
  if (animal === "비둘기") return "ㄱ구구ㅜ구";
  return "...?";
}

console.log(getSound2("개"));
console.log(getSound2("인간"));

// 반복문
// for 문
// for(초기화; 조건; 종료식)
// for문에서 변수는 대부분 i로 사용한다

for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}

// 감소하는 for문

for (let i = 9; i > 0; i--) {
  if (i < 4) {
    break;
  }
  console.log(i);
}

// continue문
for (let i = 9; i > 0; i--) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// break는 전체 반복 종료 continue는 현재 반복을 종료

const animalsA = ["dog", "cat", "fish", "lion"];

console.log(animalsA[0]);
console.log(animalsA[1]);
console.log(animalsA[2]);

// for (let i = 0; i < 3; i++) {
//   console.log(animalsA[i]);
// }
// 근데 배열의 길이가 맨날 바뀔때마다 i<4 5 6 이런식으로 바꾸기 힘드니 아래의 구문을 사용한다!
// 배열의 길이 : animalsA.length

for (let i = 0; i < animalsA.length; i++) {
  console.log(animalsA);
}

// for of문

// for(변수 of 배열) {실행문}

for (let animal of animalsA) {
  console.log(animal);
}

// 예시2
const users = [
  { name: "winter", age: 2 },
  { name: "여울이", age: 8 },
  { name: "가을이", age: 1 },
];

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

for (let user of users) {
  console.log(user);
  console.log(user.name);
}

// for in문
// for (변수 in 객체) {실행문}

const user = {
  name: "겨울이",
  age: 2,
  cute: true,
};

for (let key in user) {
  console.log(key);
  console.log(user[key]);
}

// while 문
// white (조건) {실행문}

// 0~9까지 출력
let j = 0;
while (j < 10) {
  console.log(j);
  j = j + 1;
}

let k = 0;

do {
  console.log(k)
  k++
} while (k < 10);
