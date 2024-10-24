/**
 * Parameter Type
 */

function sampleFunction(x: number, y: string, z: boolean){

}
// [x: number, y: string, z: boolean] type
type Params = Parameters<typeof sampleFunction>;
// [one: number] type
type Params2 = Parameters<(one: number) => void>;