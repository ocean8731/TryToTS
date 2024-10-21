/**
 * Extension
 */
interface IName{
    name: string;
}

interface IIdol extends IName{
    age: number;
}

const idol: IIdol = {
    name: '안유진',
    age: 23,
}

type TName = {
    name: string;
}

type TIdol = TName & {
    age: number
};

const idol2: TIdol = {
    name: '아이유',
    age: 29,
}

// interface에서 Type 상속받기
interface IIdol2 extends TName{
    age: number;
}

const idol3: IIdol2 = {
    name: '제니',
    age: 29,
}
// Interface / and를 이용한 타입 선언
type TIdol2 = IName & {
    age: number;
}

const idol4: TIdol2 = {
    name: '지수',
    age: 31,
}

/**
 * extending multiple
 */
type DogName = {
    name: string;
}

type DogAge = {
    age: number;
}

type DogBreed = {
    breed: string;
}

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
    name: '코드팩토리',
    age: 32,
    breed: 'Poodl',
}

interface CatName{
    name: string;
}
interface CatAge{
    age: number;
}
interface Cat extends CatName, CatAge{
    breed: string;
}

const cat: Cat = {
    name: '오리',
    age: 7,
    breed: '코리안 냥냥이',
}

/**
 * Overrding
 */
type THeight = {
    height: number;
}

type TRectangle = THeight & {
    height: string; // 중복으로 선언하고 싶으면 같은 타입을 선언하자!
    width: number;
}

// const rectangle: TRectangle = {
//     height:, : never type이 들어감. number 타입과 string 타입이 동시에 되는 상황
//     width: 100,
// }

type TWidth = {
    width: number | string; // Union을 사용하여
}
type TRectangle2 = TWidth & {
    width: number;
    height: number;
}

const rectangle: TRectangle2 = {
    height: 100,
    width: 200, // Number로 narrowing이 된 상황
}

interface IHeight{
    height: number;
}

// interface IRectangle extends IHeight{
//     height: string;
//     width: number;
// }

interface IWidth{
    width: number | string;
}

interface IRectangle extends IWidth{
    width: number;
    height: number;
}