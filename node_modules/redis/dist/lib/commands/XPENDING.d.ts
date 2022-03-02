export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
export declare function transformArguments(key: string, group: string): Array<string>;
interface XPendingReply {
    pending: number;
    firstId: string | null;
    lastId: number | null;
    consumers: Array<string> | null;
}
export declare function transformReply(reply: [number, string | null, number | null, Array<string> | null]): XPendingReply;
export {};
