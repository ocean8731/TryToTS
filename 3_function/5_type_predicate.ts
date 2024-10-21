/**
 * Type Predicate : 타입을 구분하는 기능을 가지는 함수
 */
// Input이 Number를 체크하는 함수
function isNumber(input: any): input is number{
    return typeof input === 'number';
}

console.log(isNumber(10));

function isNumberRetBool(input: any): boolean{
    return typeof input === 'number';
}

let number: any = 5;

if(isNumberRetBool(number)){
    number; // 그대로 any 타입
}

if(isNumber(number)){
    number; // number 타입으로 정확히 나옴
}

interface Doge{
    name: string;
    age: number;
}

interface Cat{
    name: string;
    breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge{
    return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat = Math.random() > 0.5 ? {
    name: '도지',
    age: 32,
} : {
    name: '오리',
    breed: '코리안 길냥이'
}

if(isDoge(doge)){
    doge;
}else{
    doge;
}