/**
 * Generic in Inheritance
 */
class BaseCache<T>{
    data: T[] = [];
}

class StringCache extends BaseCache<string>{ }

const stringCache = new StringCache();
stringCache.data;

// 자식 클래스에서 받은 Type을 부모 클래스에 넘겨주기
class GenericChild<T, Message> extends BaseCache<T>{
    message?: Message;

    constructor(message?: Message) {
        super();
        this.message = message;
    }
}

const genericChild = new GenericChild<string, string>('error');
genericChild.data;
genericChild.message;

/**
 * 제너릭의 inheritance
 */
interface BaseGeneric {
    name: string;
}
// Extends한 구조를 강제할 수 있다.
class Idol<T extends BaseGeneric>{
    information: T;

    constructor(information: T) {
        this.information = information;
    }
}

// 즉, name propety가 존재해야만 한다.
const yuJin = new Idol({
    name: '안유진',
    // age: 23,
});

/**
 * keyof 함께 사용하기
 */
const testObj = {
    a: 1,
    b: 2,
    c: 3,
}
// K는 O의 key값
function objectParser<O, K extends keyof O>(obj: O, key: K) {
    return obj[key];
}

const val = objectParser(testObj, 'c');

/**
 * Ternary
 * 1=== 2 ? true : false
 */
class Idol2 {
    type?: string;
}

class FemaleIdol extends Idol2 {
    type: 'Female Idol' = 'Female Idol';
}

class MaleIdol extends Idol2 {
    type: 'Male Idol' = 'Male Idol';
}

// T가 MaleIdol Type을 extend하면 MaleIdol, 아니면 FemaleIdol
type SpecificIdol<T extends Idol2> = T extends MaleIdol ?
    MaleIdol : FemaleIdol;

const idol2: SpecificIdol<MaleIdol> = new MaleIdol();