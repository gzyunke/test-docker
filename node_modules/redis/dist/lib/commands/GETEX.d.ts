import { RedisCommandArguments } from '.';
export declare const FIRST_KEY_INDEX = 1;
declare type GetExModes = {
    EX: number;
} | {
    PX: number;
} | {
    EXAT: number | Date;
} | {
    PXAT: number | Date;
} | {
    PERSIST: true;
};
export declare function transformArguments(key: string, mode: GetExModes): RedisCommandArguments;
export declare function transformReply(): string | null;
export {};
