import { RedisCommand, RedisCommandArguments, RedisCommandRawReply, RedisScript } from './commands';
export interface RedisMultiQueuedCommand {
    args: RedisCommandArguments;
    transformReply?: RedisCommand['transformReply'];
}
export default class RedisMultiCommand {
    static generateChainId(): symbol;
    readonly queue: Array<RedisMultiQueuedCommand>;
    readonly scriptsInUse: Set<string>;
    addCommand(args: RedisCommandArguments, transformReply?: RedisCommand['transformReply']): void;
    addScript(script: RedisScript, args: Array<unknown>): RedisCommandArguments;
    exec(): undefined | Array<RedisMultiQueuedCommand>;
    handleExecReplies(rawReplies: Array<RedisCommandRawReply>): Array<RedisCommandRawReply>;
    transformReplies(rawReplies: Array<RedisCommandRawReply>): Array<RedisCommandRawReply>;
}
