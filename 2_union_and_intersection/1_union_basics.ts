/**
 * Union Basics
 *
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법중 하나이다.
 */
type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '아이브';
stringOrBooleanType = true;

// stringOrBooleanType = undefined;

type StrBoolNullType = string | boolean | null;

type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL';

/**
 * 리스트의 유니언
 */
// string으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList: StringListOrBooleanList = ['아이유', '김고은', '박소담'];

strListOrBooleanList = [true, false, false, true];

// strListOrBooleanList = [
//     true,
//     '아이유',
// ] 리스트에 있는 값들이 전부 string이거나, 혹은 전부 boolean이거나. 혼용 안됨.

type StrOrNumberList = (string | number)[]; // 리스트에 들어갈 수 있는 값이 string도 가능하고 number도 가능하고

let stringOrNumberList = [1, 2, 3, '아이유', '레드벨벳'];

stringOrNumberList = [1, 2, 3];

stringOrNumberList = ['아이유', '레드벨벳'];

// stringOrNumberList = [
//     true,
//     false,
// ]

/**
 * Interface로 사용하는 union
 */
interface Animal {
    name: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
    name: '최지호',
    age: 32,
    address: '대한민국',
};

console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
console.log(animalOrHuman.address);

// 왜 타입을 이용해서 선언하면 좋은가?
animalOrHuman = {
    name: '오리',
    age: 9,
};

console.log(animalOrHuman);

console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
// console.log(animalOrHuman.address); 'Animal' 형식에 'address' 속성이 없습니다.

let animalOrHuman2:
    | {
          name: string;
          age: number;
      }
    | {
          name: string;
          age: number;
          address: string;
      } = {
    name: '최지호',
    age: 32,
    address: '대한민국',
};

console.log(animalOrHuman2.address);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

animalOrHuman2 = {
    name: '오리',
    age: 9,
};

// console.log(animalOrHuman2.address); '{ name: string; age: number; }' 형식에 'address' 속성이 없습니다.
// 에러파악의 용이성!
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가
type Person = {
    name: string;
    age: number;
};

type Cat = {
    breed: string;
    country: string;
};

type PersonOrCat = Person | Cat;

// Union은 일종의 합집합이라고 생각하면 편하다.
// 다만 A집합의 일부와 B집합의 일부만 보여주는 건 안되고
// 다 보여주거나, 아예 보여주지 않거나!
const personOrCat: PersonOrCat = {
    name: '코드팩토리',
    age: 32,
    breed: 'Yorkshire Terrier',
    country: '영국',
};
