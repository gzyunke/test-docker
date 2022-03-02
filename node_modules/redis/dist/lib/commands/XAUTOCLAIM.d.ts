import { StreamMessagesReply } from './generic-transformers';
export declare const FIRST_KEY_INDEX = 1;
export interface XAutoClaimOptions {
    COUNT?: number;
}
export declare function transformArguments(key: string, group: string, consumer: string, minIdleTime: number, start: string, options?: XAutoClaimOptions): Array<string>;
interface XAutoClaimReply {
    nextId: string;
    messages: StreamMessagesReply;
}
export declare function transformReply(reply: [string, Array<any>]): XAutoClaimReply;
export {};
