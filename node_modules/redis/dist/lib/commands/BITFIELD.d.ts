export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
declare type BitFieldType = string;
interface BitFieldOperation<S extends string> {
    operation: S;
}
interface BitFieldGetOperation extends BitFieldOperation<'GET'> {
    type: BitFieldType;
    offset: number | string;
}
interface BitFieldSetOperation extends BitFieldOperation<'SET'> {
    type: BitFieldType;
    offset: number | string;
    value: number;
}
interface BitFieldIncrByOperation extends BitFieldOperation<'INCRBY'> {
    type: BitFieldType;
    offset: number | string;
    increment: number;
}
interface BitFieldOverflowOperation extends BitFieldOperation<'OVERFLOW'> {
    behavior: string;
}
declare type BitFieldOperations = Array<BitFieldGetOperation | BitFieldSetOperation | BitFieldIncrByOperation | BitFieldOverflowOperation>;
export declare function transformArguments(key: string, operations: BitFieldOperations): Array<string>;
export declare function transformReply(): Array<number | null>;
export {};
