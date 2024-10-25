/**
 * Reflection Metadata
 */
import 'reflect-metadata';

const iu = {
    name: '아이유',
    age: 32,
    nationality: 'korean',
}

console.log(iu);

/**
 * 파라미터의 정의
 *
 * 1) 메타데이터의 키
 * 2) 메타데이터 키에 저장할 값
 * 3) 메타데이터를 저장할 객체
 * 4) 메타데이터를 저장할 객체의 프로퍼티
 *
 * 4번은 필수가 아니다.
 *
 * 메타데이터가 무엇인가? - 데이터에 대한 데이터
 */
Reflect.defineMetadata('test-meta', 123, iu);
// 실제 코드에서는 보이지 않는다.
console.log(iu);
// Reflect를 이용해서 볼 수 있다.
console.log(Reflect.getMetadata('test-meta', iu));
// 데이터에 대한 데이터를 저장하고 가져온다.
// 두 번 정의하게 되면, 최근에 사용한 값으로 덮어씌워진다.
Reflect.defineMetadata('test-meta', 456, iu);
console.log(Reflect.getMetadata('test-meta', iu));

Reflect.defineMetadata('meta2', 789, iu);
console.log(Reflect.getMetadata('meta2', iu));
console.log(Reflect.getMetadata('test-meta', iu));
//value에 객체를 넣어도 된다.
Reflect.defineMetadata('meta2', {name: '코드팩토리'}, iu);
console.log(Reflect.getMetadata('meta2', iu));

/**
 * 프로퍼티에 저장하기 : 프로퍼티에 메타데이터를 정의해준다.
 */
Reflect.defineMetadata('object-meta', 999, iu, 'name');
console.log(Reflect.getMetadata('object-meta', iu, 'name'));

console.log(Reflect.getMetadata('meta2', iu));

// Reflect.deleteMetadata('object-meta', iu, 'name');
console.log(Reflect.getMetadata('object-meta', iu, 'name'));

console.log(Reflect.hasMetadata('object-meta', iu, 'name'));

console.log(Reflect.getMetadataKeys(iu));
console.log(Reflect.getMetadataKeys(iu, 'name'));

Reflect.defineMetadata('prototype-data', '프로토타입 메타예요!', Object.getPrototypeOf(iu));

console.log(Reflect.getMetadataKeys(iu));
console.log(Reflect.getOwnMetadataKeys(iu));