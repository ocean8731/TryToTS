/**
 * Generic 함수에서 사용하기
 */

function whatValue(value: any) {
    return value;
}

const value = whatValue('test'); // any type

// 타입의 변수화
function genericWhatValue<T>(value: T): T {
    return value;
}

// generic type 선언하기 : 선언한 타입에 맞는 값을 넣어야 한다.
const genericResult1 = genericWhatValue<number>(123);

let genericResult2 = genericWhatValue('123') // const를 사용하면'123' 타입

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
    return {
        x,
        y,
        z,
    }
}

const multipleGenericResult = multipleGenerics<number, boolean, string>(
    123,
    true,
    '123',
);

const multipleGenericResult2 = multipleGenerics(
    123,
    true,
    '123',
);

function getTuple<X, Y>(val1: X, val2: Y) {
    return [val1, val2] as const;
}

const tuple = getTuple(true, 100);

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    brand: string;
    codeName: string;

    constructor(brand: string, codeName: string) {
        this.brand = brand;
        this.codeName = codeName;
    }
}
// T 타입은 { new(...args: any[]): {} } 형태의 타입을 상속을 받겠다는 의미
// 무한한/어떤 타입이든 파라미터를 받고, constructor를 실행하면 객체 타입이 반환될 것이다.
function instantiator<T extends { new(...args: any[]): {} }>(constructor: T,
                                                             ...args: any[]) {
    return new constructor(...args);
}
// constructor : construct가 있는 class
console.log(instantiator(Idol, '아이유', 23));
console.log(instantiator(Car, 'BMW', 1111));