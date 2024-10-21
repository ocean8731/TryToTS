/**
 * Statement and Expression
 */

// statement (문장)
function addTwoNumbers(x: number, y: number) {
    return x + y;
}

// expression (표현식)
const addTwoNumbersExp = (x: number, y: number) => {
    return x + y;
}

/**
 * Statement
 * 일일히 type을 지정해줘야 하는 불편함이 존재
 */
function add(x: number, y: number) : number{
    return x + y;
}

function subtract(x: number, y: number) : number{
    return x - y;
}

function multiply(x: number, y: number) : number{
    return x * y;
}

function divide(x: number, y: number) : number{
    return x / y;
}

/**
 * Expression
 * 한번 타입을 지정해주면 계속 활용 가능
 */
// 함수의 시그니쳐를 정의하고
type CalculationType = (x: number, y: number) => number;
// 정의한 함수의 시그니쳐를 그대로 가져다 쓸 수 있다.
const add2 : CalculationType = function(x, y){
    return x + y;
}

const subtract2 : CalculationType = function(x, y){
    return x - y;
}

const multiply2 : CalculationType = function(x, y){
    return x * y;
}

const divide2 : CalculationType = function(x, y){
    return x / y;
}