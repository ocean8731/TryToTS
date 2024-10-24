//<string | boolean | number 중에서 string 타입만 가지길 원함
type stringOnly = Extract<string | boolean | number, string>;

type functionOnly = Extract<string | (() => void), Function>;