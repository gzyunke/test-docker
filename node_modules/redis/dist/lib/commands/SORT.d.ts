export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
interface SortOptions {
    BY?: string;
    LIMIT?: {
        offset: number;
        count: number;
    };
    GET?: string | Array<string>;
    DIRECTION?: 'ASC' | 'DESC';
    ALPHA?: true;
    STORE?: string;
}
export declare function transformArguments(key: string, options?: SortOptions): Array<string>;
export declare function transformReply(reply: Array<string> | number): Array<string> | number;
export {};
