import { RedisCommandArguments } from '.';
export declare const FIRST_KEY_INDEX = 1;
export declare function transformArguments(key: string | Array<string>, timeout: number): RedisCommandArguments;
declare type BRPOPReply = null | {
    key: string;
    element: string;
};
export declare function transformReply(reply: null | [string, string]): BRPOPReply;
export {};
