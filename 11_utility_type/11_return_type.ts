/**
 * Return Type
 */
// number type
type ReturnTypeSample = ReturnType<()=> number>;

type FunctionSign = (x: number, y: number) => number;

// number type
type ReturnType2 = ReturnType<FunctionSign>;