import { RedisCommandArguments } from '.';
export declare const FIRST_KEY_INDEX = 1;
interface ZUnionOptions {
    WEIGHTS?: Array<number>;
    AGGREGATE?: 'SUM' | 'MIN' | 'MAX';
}
export declare function transformArguments(destination: string, keys: Array<string> | string, options?: ZUnionOptions): RedisCommandArguments;
export declare function transformReply(): number;
export {};
