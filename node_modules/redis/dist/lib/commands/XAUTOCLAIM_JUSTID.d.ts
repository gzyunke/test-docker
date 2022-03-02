import { transformArguments as transformXAutoClaimArguments } from './XAUTOCLAIM';
export { FIRST_KEY_INDEX } from './XAUTOCLAIM';
export declare function transformArguments(...args: Parameters<typeof transformXAutoClaimArguments>): Array<string>;
interface XAutoClaimJustIdReply {
    nextId: string;
    messages: Array<string>;
}
export declare function transformReply(reply: [string, Array<string>]): XAutoClaimJustIdReply;
