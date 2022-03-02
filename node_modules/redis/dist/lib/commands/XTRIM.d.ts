export declare const FIRST_KEY_INDEX = 1;
interface XTrimOptions {
    strategyModifier?: '=' | '~';
    LIMIT?: number;
}
export declare function transformArguments(key: string, strategy: 'MAXLEN' | 'MINID', threshold: number, options?: XTrimOptions): Array<string>;
export declare function transformReply(): number;
export {};
