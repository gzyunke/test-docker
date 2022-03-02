import { ScanOptions } from './generic-transformers';
export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
export declare function transformArguments(key: string, cursor: number, options?: ScanOptions): Array<string>;
interface SScanReply {
    cursor: number;
    members: Array<string>;
}
export declare function transformReply([cursor, members]: [string, Array<string>]): SScanReply;
export {};
