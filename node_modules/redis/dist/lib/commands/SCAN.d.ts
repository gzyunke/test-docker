import { ScanOptions } from './generic-transformers';
export declare const IS_READ_ONLY = true;
export interface ScanCommandOptions extends ScanOptions {
    TYPE?: string;
}
export declare function transformArguments(cursor: number, options?: ScanCommandOptions): Array<string>;
export interface ScanReply {
    cursor: number;
    keys: Array<string>;
}
export declare function transformReply([cursor, keys]: [string, Array<string>]): ScanReply;
