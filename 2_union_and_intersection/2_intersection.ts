/**
 * Intersection
 *
 * And
 */
interface Human {
    name: string;
    age: number;
}

interface Contacts {
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
    name: '코드팩토리',
    age: 32,
    phone: '01012341234',
    address: '서울시',
};

type NumberAndString = number & string;

// let numberAndString: NumberAndString = never; 어떤 타입도 논리적으로 들어갈 수 없는 경우!
