/// <reference types="node" />
import { RedisCommandArguments } from '.';
export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
export declare function transformArguments(key: string | Buffer): RedisCommandArguments;
export declare function transformReply(): string | null;
