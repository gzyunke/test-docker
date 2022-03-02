export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
interface BitCountRange {
    start: number;
    end: number;
}
export declare function transformArguments(key: string, range?: BitCountRange): Array<string>;
export declare function transformReply(): number;
export {};
