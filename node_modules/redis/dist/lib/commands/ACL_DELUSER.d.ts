import { RedisCommandArguments } from '.';
export declare function transformArguments(username: string | Array<string>): RedisCommandArguments;
export declare const transformReply: (reply: number) => number;
