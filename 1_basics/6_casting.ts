/**
 * Casting
 *
 * TS에서 Casting을 하면 JS에서는 적용이 안된다.
 */
let codefactory = 'code factory'; // string literal type
let testNumber = 3;

console.log(codefactory.toUpperCase()); // 'CODE FACTORY'
// console.log(testNumber.toUpperCase());

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase()); toUpperCase() 가 존재하는 것처럼 인식
let stringVar = sampleNumber as string;

// 타입 캐스팅을 하게 되면 TS에서는 그 타입에 맞는 함수들을 사용할 수 있는 것처럼 보이지만...
// 실제 런타임 환경인 JS에서는 적용이 안된다.
console.log(typeof (sampleNumber as string));
let number = 5;

// 즉, 코딩할 때 사용하는 타입과 실제 JS 런타임에서 적용되는 타입이 달라질 수 있다...!
// 절대 any를 남용하지 말자.
console.log((number as any).toUpperCase());
