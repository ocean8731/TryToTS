/**
 * Abstract class
 * 인스턴스화 불가능
 */
abstract class ModelWithId {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

// const modelWithId = new ModelWithId(123); 인스턴스화 불가능

class Product extends ModelWithId{

}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod{
    abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod{
    shout(name: string): string {
        return '소리질러~';
    }
}