/**
 * Problems with Array in JS
 */
const number = [1, '2', 3, '4', 5]; // JS는 이래도 인지를 못하는거고, TS는 타입 추론을 하는 것

let strings: string[] = ['1', '2', '3'];

// strings.push(1);

// string과 number 둘 다 들어갈 수 있는 array
let stringsOrNumbersArray: (string | number)[] = [
    1,
    '2',
    3,
    '4',
]

// string array number array 둘 중 하나만 가능
let stringArrNumberArr: string[] | number[] = [
    1,
    2,
    3,
]

stringArrNumberArr = [
    '1', '2', '3',
]
 // string이거나 number array이거나
let stringOrNumberArr: string | number[] = [
    1, 2, 3
]

stringOrNumberArr = '3';

let boolsArr = [true, false, true];

boolsArr.push(false);

// boolsArr.push(1);

const onlyString = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3];

for(let i = 0; i < onlyString.length; i++){
    let item = onlyString[i];
}

for(let item of onlyNumbers){

}

let number3 = onlyNumbers[0];

// TS도 index의 length를 신경쓰지 않기 때문에, 실제로는 undefined가 출력됨
let number4 = onlyNumbers[9999];