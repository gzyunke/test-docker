import { StreamMessageReply } from './generic-transformers';
export declare const FIRST_KEY_INDEX = 2;
export declare const IS_READ_ONLY = true;
export declare function transformArguments(key: string): Array<string>;
interface XInfoStreamReply {
    length: number;
    radixTreeKeys: number;
    radixTreeNodes: number;
    groups: number;
    lastGeneratedId: string;
    firstEntry: StreamMessageReply | null;
    lastEntry: StreamMessageReply | null;
}
export declare function transformReply(rawReply: Array<any>): XInfoStreamReply;
export {};
