import { RedisCommandArguments } from '.';
import { ZMember } from './generic-transformers';
export declare const FIRST_KEY_INDEX = 1;
export declare function transformArguments(key: string | Array<string>, timeout: number): RedisCommandArguments;
interface ZMemberWithKey extends ZMember {
    key: string;
}
declare type BZPopMaxReply = ZMemberWithKey | null;
export declare function transformReply(reply: [key: string, value: string, score: string] | null): BZPopMaxReply | null;
export {};
