/**
 * Type Inference
 *
 * 타입 추론
 */
let stringType = 'string';
let booleanType = true;
let numberType = 30;

booleanType = false;

// booleanType = 'false';

// const를 이용하면 constStringType이 왜 'const string'으로 잡히는가? 조금 더 구체적인 타입!
const constStringType = 'const string';
const constBooleanType = true;

// 객체에서 타입 구체적으로 선언하기
let yuJin = {
    name: '안유진',
    age: 2003,
};
// 이렇게 단순히 const를 쓰는 것만으로는 안되고
const yuJin2 = {
    name: '안유진',
    age: 2003,
};

yuJin2.name = '코드팩토리';
console.log(yuJin2);
// 각 프로퍼티를 const로 캐스팅해야 한다.
const yuJin3 = {
    name: '안유진' as const,
    age: 2003 as const,
};

// yuJin3.name = '코드팩토리'; 그러면 의도한대로, 값이 '코드팩토리'로 바뀌지 않고 에러가 발생한다.
console.log(yuJin3.name);
console.log(yuJin2.name);

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, '4', '5', '6'];

// numbers.push('6');
const number = numbers[0];
const nos = numbersAndString[0];
const nos2 = numbersAndString[100]; // 주의 : ts는 array의 범위를 넘어도 탐지하지 못한다.

// tuple
const twoNumbers = [1, 3] as const;

// twoNumbers[0] = 10;
// twoNumbers.push(100);
const first = twoNumbers[0];
// const first2 = twoNumbers[3];
