import { RedisCommandArguments } from '.';
export declare const FIRST_KEY_INDEX = 1;
export declare function transformArguments(destination: string, keys: Array<string> | string): RedisCommandArguments;
export declare function transformReply(): number;
