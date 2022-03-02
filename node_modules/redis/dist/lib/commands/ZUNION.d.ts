import { RedisCommandArguments } from '.';
export declare const FIRST_KEY_INDEX = 2;
export declare const IS_READ_ONLY = true;
interface ZUnionOptions {
    WEIGHTS?: Array<number>;
    AGGREGATE?: 'SUM' | 'MIN' | 'MAX';
}
export declare function transformArguments(keys: Array<string> | string, options?: ZUnionOptions): RedisCommandArguments;
export declare function transformReply(): Array<string>;
export {};
