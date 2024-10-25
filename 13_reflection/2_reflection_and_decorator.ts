/**
 * Reflection and Decorator
 */
import 'reflect-metadata';
// symbol을 이용해서 유일한 값이 되도록
const restrictParamValueKey = Symbol('restrictParamValue');

interface RestrictionInfo<T>{
    index: number;
    restrictedValues: T[];
}

// 메타데이터를 저장하는 역할
function RestrictParamValue<T>(restrictedValues: T[]){
    return (target: any, propertyKey: string, index: number) => {
        // 메타데이터 저장
        const prevMeta = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

        const info: RestrictionInfo<T> = {
            // 몇 번째 파라미터인지
            index,
            // 정의한 restrictedValues
            restrictedValues,
        }

        Reflect.defineMetadata(restrictParamValueKey, [
            // spread
            ...prevMeta,
            // 새로 만든 값
            info,
        ], target, propertyKey);

        console.log(Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey));
    }
}

// 저장된 메타데이터를 이용해 검증하는 역할
function ValidateMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const metas: RestrictionInfo<any>[] = Reflect.getOwnMetadata(restrictParamValueKey,
        target, propertyKey) ?? [];

    const original = descriptor.value;

    descriptor.value = function(...args: any){
        // 메타데이터에 정의되지 않은 값이 있을 때
        const invalids = metas.filter(
            (x) => !x.restrictedValues.includes(args[x.index])
        );
        // 잘못된 값입니다.
        if(invalids.length > 0){
            throw Error(`잘못된 값입니다. ${invalids.map(x => args[x.index]).join(', ')}`)
        }

        return original.apply(this, args);
    }
}

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    @ValidateMethod
    // style에는 '신나게' | '열정적으로' 만 입력할 수 있게 한다. 핵심은 런타임에도 제한하는 것
    // restrictedValues를 metadata에 저장
    sing(@RestrictParamValue(['신나게', '열정적으로']) style: string,
         @RestrictParamValue([1,2,3]) ranking: number) {
        // if(style !== '신나게' && style !== '열정적으로'){
        //     throw Error('안됨');
        // }

        return `${this.name}이 ${style} 노래를 부릅니다.`
    }
}

const yuJin = new Idol('안유진', 23);

console.log('--- sing ---');
console.log(yuJin.sing('신나게', 1));
console.log(yuJin.sing('열정적으로', 2));
console.log(yuJin.sing('기분 나쁘게', 3));