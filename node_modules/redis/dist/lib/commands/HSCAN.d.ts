import { ScanOptions } from './generic-transformers';
export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
export declare function transformArguments(key: string, cursor: number, options?: ScanOptions): Array<string>;
export interface HScanTuple {
    field: string;
    value: string;
}
interface HScanReply {
    cursor: number;
    tuples: Array<HScanTuple>;
}
export declare function transformReply([cursor, rawTuples]: [string, Array<string>]): HScanReply;
export {};
