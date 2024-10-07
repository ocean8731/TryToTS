/*
Enum
*/

function runWork() {
    let state = 'INITIAL';

    try {
        state = 'LOADING';
        // 작업진행중....
        state = 'DONE';
    } catch (e) {
        state = 'ERROR';
    } finally {
        return state;
    }
}
// 1. 하드코딩
console.log(runWork() === 'DONNE');

const doneState = 'DONE';
const loadingState = 'LOADING';
const errorState = 'ERROR';
const initialState = 'INITIAL';

function runWork2() {
    let state = initialState;

    try {
        state = loadingState;
        // 작업진행중....
        state = doneState;
    } catch (e) {
        state = errorState;
    } finally {
        return state;
    }
}
// 2. 변수화
console.log(runWork2() === doneState);

enum State { // 기본값은 0부터 시작하는 숫자이지만
    DONE = 'DONE', // 이렇게 string 할당도 가능
    LOADING = 'LOADING',
    INITIAL = 'INITIAL',
    ERROR = 'ERROR',
}
function runWork3() {
    let state = State.INITIAL;

    try {
        state = State.LOADING;
        // 작업진행중....
        state = State.DONE;
    } catch (e) {
        state = State.ERROR;
    } finally {
        return state;
    }
}
// 3. Enum
console.log(runWork3() === State.DONE);
console.log(runWork3()); // 0이 나오는 이유는
