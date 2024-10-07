"use strict";
/*
Types
*/
let helloText = 'Hello';
// helloText = true
/*
7개의 타입 in JS
*/
const stringVar = 'String';
const numberVar = 3;
const bigIntVar = BigInt(234567890);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/*
타입 in TS
*/
// any - 아무 타입이나
let anyVar;
anyVar = 100;
anyVar = '재영';
anyVar = true;
// 다른 어떤 타입의 변수에도 값을 저장
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
// unknown - 알 수 없는 타입, any와 유사하지만
let unknownType;
unknownType = 100;
unknownType = '재영';
unknownType = true;
// 다른 타입을 가진 다른 변수에는 할당 못한다.
//let testNumber1: number = unknownType;
//let testString1: string = unknownType;
//let testBoolean1: boolean = unknownType;
let unknownType1 = unknownType; // 같은 타입이니까 할당 가능
let anyType1 = unknownType; // any는 예외
// never - 어떤 타입도 저장되거나 반환되지 않음
//let neverType : never = null;
//let neverType: never = undefined;
//let neverType: never = 'string';
/*
리스트 타입
*/
const kGirls = ['Ive', 'BlackPink', 'RedVelvet'];
const booleanList = [true, true, false];
