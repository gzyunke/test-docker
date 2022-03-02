export declare const FIRST_KEY_INDEX = 2;
export declare const IS_READ_ONLY = true;
export declare function transformArguments(key: string, group: string): Array<string>;
declare type XInfoConsumersReply = Array<{
    name: string;
    pending: number;
    idle: number;
}>;
export declare function transformReply(rawReply: Array<any>): XInfoConsumersReply;
export {};
