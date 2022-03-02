import { transformArguments as transformArgumentsXClaim } from './XCLAIM';
export { FIRST_KEY_INDEX } from './XCLAIM';
export declare function transformArguments(...args: Parameters<typeof transformArgumentsXClaim>): Array<string>;
export declare function transformReply(): Array<string>;
