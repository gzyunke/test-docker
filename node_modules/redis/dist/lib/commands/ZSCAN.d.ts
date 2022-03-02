import { ScanOptions, ZMember } from './generic-transformers';
export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
export declare function transformArguments(key: string, cursor: number, options?: ScanOptions): Array<string>;
interface ZScanReply {
    cursor: number;
    members: Array<ZMember>;
}
export declare function transformReply([cursor, rawMembers]: [string, Array<string>]): ZScanReply;
export {};
