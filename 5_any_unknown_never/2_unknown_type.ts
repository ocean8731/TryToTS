/**
 * Unknown Type : Any와 비슷하지만, 덜 관대한 타입
 */
let anyValue: any; // 전부 다 가능

anyValue = 24;
anyValue = '아이유';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown; // 전부 다 가능

unknownValue = 24;
unknownValue = '아이유';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// 하지만 할당 시에 anyValue는 모든 타입에 할당이 가능한데

// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;

// unknownValue는 any 타입, unknown 타입 외에 다른 타입에 할당이 불가능하다.

// let anyType: any = unknownValue;
// let unknownType: unknown = unknownValue;
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;

// any : 가능한 것처럼 보인다.
anyValue.toUpperCase();
anyValue.name;
new anyValue();

// unknown : 확실히 불가능하다.
// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

// 굳이 따지면 any보다는 unknown을 사용해주는 것이 좋다.
function isString(target: unknown) : target is string{
    return typeof target === 'string';
}

let testVal: unknown;

if(isString(testVal)){
    testVal;
}

/**
 * Union Type
 */
type uOrString = unknown | string;  // unknown
type uOrBoolean = unknown | boolean; // unknown
type uOrNumber = unknown | number; // unknown
type uOrAny = unknown | any; // any
type anyOrU = any | unknown; // any

/**
 * Intersection Type : 무조건 상대 타입이 된다. unknown은 타입을 모른다는 개념이므로.
 */
type uAndString = unknown & string; // string
type uAndBoolean = unknown & boolean; // boolean
type uAndNumber = unknown & number; // number
type uAndAny = unknown & any; // any
type anyAndU = any & unknown; // any

/**
 * Operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;

// 연산 : 타입을 모르기 때문에 연산 자체가 불가능
// number1 + number2;
// number1 - number2;
// number1 * number2;
// number1 / number2;

number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;