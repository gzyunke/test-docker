export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
interface ZRangeOptions {
    BY?: 'SCORE' | 'LEX';
    REV?: true;
    LIMIT?: {
        offset: number;
        count: number;
    };
}
export declare function transformArguments(key: string, min: string | number, max: string | number, options?: ZRangeOptions): Array<string>;
export declare function transformReply(): Array<string>;
export {};
