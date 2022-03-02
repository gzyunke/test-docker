/// <reference types="node" />
import { RedisCommandArguments } from '.';
export declare const FIRST_KEY_INDEX = 1;
export declare function transformArguments(keys: string | Buffer | Array<string | Buffer>, timeout: number): RedisCommandArguments;
declare type BLPOPReply = null | {
    key: string;
    element: string;
};
export declare function transformReply(reply: null | [string, string]): BLPOPReply;
export {};
