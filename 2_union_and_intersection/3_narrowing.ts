/**
 * Narrowing
 *
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게 되는걸 의미한다.
 */
// let numberOrString: number | string = 'Code Factory';
// numberOrString;
// 타입을 union을 이용해서 선언했어도, ts는 값을 보고 어떤 값인지 추론할 수 있다.

// const decimal = 12.3278;
// console.log(decimal.toFixed(2));

// numberOrString.toFixed(); number or string이여도, 이미 ts는 값을 보고 string으로 추론하고 있다.

/**
 * Narrowing 종류
 *
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator narrowing
 * 6) instanceof narrowing
 * 7) discrimated union narrowing (차별된 유니언 내로잉)
 * 8) exhaustiveness checking
 */

// (1) Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numbOrString: number | string = '아이유';

numbOrString.toString();

// (2) typeof narrowing
numbOrString = Math.random() > 0.5 ? 1123 : '아이유'; // let numbOrString: string | number

if (typeof numbOrString === 'string') {
    numbOrString; // 아이유
} else {
    numbOrString; // 1123
}

// (3) Truthiness Narrowing : IF문을 사용했을 때 False가 나오는 케이스!
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['아이유', '레드벨벳']; // let nullOrString: string[] | null

if (nullOrString) {
    // null is always false
    nullOrString; // string[]
} else {
    nullOrString; // null
}

// (4) Equality Narrowing
let numbOrString2: number | string = Math.random() > 0.5 ? 1123 : '아이유';
let stringOrBool2: string | boolean = Math.random() > 0.5 ? '아이브' : true;

if (numbOrString2 === stringOrBool2) {
    // 논리적으로 둘 다 같아질 수 있는 경우는 string 타입밖에 없음
    numbOrString2; // let numbOrString2: string
    stringOrBool2; // let stringOrBool2: string
} else {
    numbOrString2; // let numbOrString2: string | number
    stringOrBool2; // let stringOrBool2: string | true
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ? 1123 : Math.random() > 0.5 ? '안유진' : null;

if (typeof numberOrStringOrNull === 'number') {
    numberOrStringOrNull;
} else {
    numberOrStringOrNull;
}

// (5) in operator narrowing
interface Human {
    name: string;
    age: number;
}

interface Dog {
    name: string;
    type: string;
}

let human: Human = {
    name: '안유진',
    age: 23,
};

let dog: Dog = {
    name: '오리',
    type: 'Yorkshire Terrier',
};

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

if ('type' in humanOrDog) {
    humanOrDog;
} else {
    humanOrDog;
}

// (6) instanceof narrowing
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : '코드팩토리';

if (dateOrString instanceof Date) {
    // Date 클래스의 INSTANCE냐?
    dateOrString;
} else {
    dateOrString;
}

// (7) Discriminated Union Narrowing
interface Animal {
    type: 'dog' | 'human';
    height?: number;
    // 강아지의 종
    breed?: string;
}

let animal: Animal =
    Math.random() > 0.5
        ? {
              type: 'human',
              height: 177,
          }
        : {
              type: 'dog',
              breed: 'Yorkshire Terrier',
          };

if (animal.type === 'human') {
    animal.height;
} else {
    animal.breed;
    animal.height;
}

interface Human2 {
    type: 'human';
    height: number;
}

interface Dog2 {
    type: 'dog';
    breed: string;
}

interface Fish2 {
    type: 'fish';
    length: number;
}
// 결론 : 공통적인 값을 사용하는 interface가 존재할 때, interface를 뭉뚱그려 사용하는 것보다 인터페이스를 여러개로 나눈 후에
// union을 사용해서 정의하는 방법이 더 낫다.
type HumanOrDog2 = Human2 | Dog2 | Fish2;

let humanOrDog2: HumanOrDog2 =
    Math.random() > 0.5
        ? {
              type: 'human',
              height: 177,
          }
        : Math.random() > 0.5
        ? {
              type: 'dog',
              breed: 'Yorkshire Terrier',
          }
        : {
              type: 'fish',
              length: 12,
          };

if (humanOrDog2.type === 'human') {
    humanOrDog2;
} else {
    humanOrDog2;
}

// (8) Exhuastiveness Checking
switch (humanOrDog2.type) {
    case 'human':
        humanOrDog2;
        break;
    case 'dog':
        humanOrDog2;
        break;
    case 'fish':
        humanOrDog2;
        break;
    default:
        humanOrDog2;
        // 만약에 또 다른 타입이 HumanOrDog2에 들어가게 된다면
        // 마지막 체크를 하나 해뒀기 때문에, 타입이 새로 생겼을 때 문제를 파악할 수 있다.
        const _check: never = humanOrDog2;
        break;
}
