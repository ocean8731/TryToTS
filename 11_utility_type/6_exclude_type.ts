/**
 * Exclude Type
 */

// boolean | number 타입이 됨
type NoString = Exclude<string | boolean | number, string>;
// (() => void) 는 함수이기 때문에 string 타입이 됨
type NoFunction = Exclude<string | (() => void), Function>;