/**
 * Loopholes of Any : Any의 문제점
 */
let number: number;
number = 10;

// number.toUpperCase(); error를 던져주는 케이스

// (number as any).toUpperCase(); error를 던져주지 못하는 케이스. TS를 쓰는 이유가...?

const multiplyTwo = (x: number, y: number) => {
    return x * y;
}
// any로 캐스팅하면
let args1: any = '코드팩토리';
let args2: any = true;
// 안되는데도 마치 되는것처럼...!
multiplyTwo(args1, args2);
// multiplyTwo('코드팩토리', true);

// any는 자동완성도 잘 지원되지 않는다.
let iu:any = {name: '아이유', age: 30};
iu;

// 변경사항이 코드에 문제를 일으키는지 일으키지 않는지 알기 힘들다!
// 그러니까 가능한 사용하지 말자.
const callbackRunner = (x: number, y: number, callback: any)=>{
    return callback(x);
}

const callback = (x:number, y: number)=>{
    return x * y;
}

console.log(callbackRunner(5, 4, callback));