/**
 * Property Initialization
 */
class Person {
    // 일반적인 필수값 선언법
    name: string;
    // 초기값 제공 선언법
    age: number = 23;
    // optional 값 선언법 : 초기화 안해도 됨
    pet?: string;
    // type of undefined 선언법 : 초기화 안해도 됨
    petAge: number | undefined;

    constructor(name: string, pet?: string){
        this.name = name;
        this.pet = pet;
    }
}

class RouteStack{
    stack!: string[]; // 초기화가 보장이 됨을 알려줌

    constructor(){
        this.initialize();
    }

    initialize(){
        this.stack = [];
    }
}

const routeStack = new RouteStack();
console.log(routeStack);