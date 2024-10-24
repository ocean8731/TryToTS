/**
 * Readonly Type
 */
interface Cat {
    name: string;
    age: number;
}

const nyaong: Cat = {
    name: '냐옹이',
    age: 8
};

nyaong.name = '코드팩토리';

// 프로퍼티 재할당이 불가능하게 만들어준다.
const bori: Readonly<Cat> = {
    name: '보리',
    age: 7,
}

// bori.name = '아이유';

// js에서 프로퍼티 재할당이 불가능하게 만드는 기법
Object.freeze(bori);