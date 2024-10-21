/**
 * Property Check
 *
 * 초과 속성 검사
 * 객체 리터럴을 직접 입력할 때에만 작동하고
 */
type TName = {
    name: string;
}

type TAge = {
    age: number;
}

const iu = {
    name: '아이유',
    age: 30,
}

// narrowing
const testName: TName = iu; // 이렇다고 iu의 name만 출력되지 않는다.
const testAge: TAge = iu;  // 이렇다고 iu의 age만 출력되지 않는다.