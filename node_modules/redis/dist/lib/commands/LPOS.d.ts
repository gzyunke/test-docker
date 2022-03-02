export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
export interface LPosOptions {
    RANK?: number;
    MAXLEN?: number;
}
export declare function transformArguments(key: string, element: string, options?: LPosOptions): Array<string>;
export declare function transformReply(): number | null;
