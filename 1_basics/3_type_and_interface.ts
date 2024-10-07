/*
Type and Interface
*/

/*
Type - TS의 타입에 이름을 지어준다!
*/
type NewStringType = string;
type NewNullType = null;
type NewNumberType = number;
type MaleOrFemale = 'male' | 'female';

const stringVar: NewStringType = 'test';

type Idol = {
    name: string;
    year: number;
};

const yuJin: Idol = {
    name: '안유진',
    year: 2002,
};

/*
Interface - Type과 겹치는게 많기는 함
*/
interface MyIdol {
    name: string;
    year: number;
}

const yuJin2: MyIdol = {
    name: '안유진',
    year: 2002,
};

interface YourIdol {
    name: NewStringType;
    year: NewNumberType;
}

const yuJin3: YourIdol = {
    name: '안유진',
    year: 2002,
};

// Optional
interface IdolOptional {
    name: NewStringType;
    year?: NewNumberType;
}
const yuJin4: IdolOptional = {
    name: '안유진',
};
