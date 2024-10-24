/**
 * Generic in Interface
 */
interface Cache<T> {
    // 다양한 타입의 데이터를 받고 싶은데, 타입 체크는 필요해요!
    data: T[];
    lastUpdate: Date;
}

const cache1: Cache<string> = {
    data: ['data1', 'data2'],
    lastUpdate: new Date(),
}

// const cache2: Cache<number> = {
//     data: [123, 456],
//     lastUpdate: new Date(),
// }

// default 값을 정해주면
interface DefaultGeneric<T = string>{
    data:T[];
}
// 아래처럼 타입을 따로 정의해주지 않아도 되지만, 당연히 다른 타입의 자료를 넣는 것은 안된다.
// const cache3: DefaultGeneric = {
//     data: [123, 456],
// }