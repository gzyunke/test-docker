export declare const FIRST_KEY_INDEX = 2;
export declare const IS_READ_ONLY = true;
export declare function transformArguments(key: string): Array<string>;
declare type XInfoGroupsReply = Array<{
    name: string;
    consumers: number;
    pending: number;
    lastDeliveredId: string;
}>;
export declare function transformReply(rawReply: Array<any>): XInfoGroupsReply;
export {};
