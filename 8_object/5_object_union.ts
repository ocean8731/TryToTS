/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat = Math.random() > 0.5 ?
    // 강아지
    {
        name: '별이',
        age: 12,
    } :
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    }

dogOrCat.name;
dogOrCat.age; // 고양이에는 존재하지 않으므로
dogOrCat.breed; // 강아지에는 존재하지 않으므로

/**
 * 직접 선언한 객체 타입 유니언
 */

interface Dog {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ?
    // 강아지
    {
        name: '별이',
        age: 12,
    } :
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    }

dogOrCat2.name;
// dogOrCat2.age; cat에 age가 없기 때문에
// dogOrCat2.breed;

if('age' in dogOrCat2){
    // Dog Type
    dogOrCat2;
    dogOrCat2.age;
    dogOrCat2.name;
}else{
    // Cat Type
    dogOrCat2;
    dogOrCat2.name;
    dogOrCat2.breed;
}