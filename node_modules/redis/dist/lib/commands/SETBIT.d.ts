import { RedisCommandArguments } from '.';
import { BitValue } from './generic-transformers';
export declare const FIRST_KEY_INDEX = 1;
export declare function transformArguments(key: string, offset: number, value: BitValue): RedisCommandArguments;
export declare function transformReply(): BitValue;
