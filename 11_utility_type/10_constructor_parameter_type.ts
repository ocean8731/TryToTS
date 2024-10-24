/**
 * Constructor Parameter
 */
class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// Initial type:
// [name: string, age: number]
type ConstructorParamType = ConstructorParameters<typeof Idol>;