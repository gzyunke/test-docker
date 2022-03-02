import { RedisCommandArguments } from '.';
export declare const FIRST_KEY_INDEX = 2;
declare type BitOperations = 'AND' | 'OR' | 'XOR' | 'NOT';
export declare function transformArguments(operation: BitOperations, destKey: string, key: string | Array<string>): RedisCommandArguments;
export declare function transformReply(): number;
export {};
