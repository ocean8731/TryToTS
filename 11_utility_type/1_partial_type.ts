/**
 * Partial Type
 * 부분적으로 입력하게 하고싶을 때
 */
interface Idol{
    name: string;
    age: number;
    groupName: string;
}

const yuJin: Idol = {
    name: '안유진',
    age: 23,
    groupName: '아이브',
}

function updateIdol(original: Idol, updates: Partial<Idol>): Idol{
    return {
        ...original,
        ...updates,
    }
}

// Idol 타입에 존재하는 key값이기만 하면 되고, 일부만 입력하면 입력한 일부만 수정됨!
console.log(updateIdol(yuJin, {
    age: 27,
    name: '코드팩토리',
    groupName: '주식회사 코드팩토리',
}));