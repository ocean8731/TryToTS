/**
 * Required Type
 */
interface Dog {
    name: string;
    age?: number;
    country?: string;
}

// 모든 프로퍼티를 필수로 만들어준다!
const requiredDog: Required<Dog> = {
    name: '모찌',
    age: 7,
    country: '한국'
}