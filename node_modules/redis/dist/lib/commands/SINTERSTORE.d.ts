import { RedisCommandArguments } from '.';
export declare const FIRST_KEY_INDEX = 1;
export declare function transformArguments(destination: string, keys: string | Array<string>): RedisCommandArguments;
export declare function transformReply(): Array<string>;
