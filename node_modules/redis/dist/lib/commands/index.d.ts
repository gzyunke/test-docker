/// <reference types="node" />
import { RedisScriptConfig, SHA1 } from '../lua-script';
export declare type RedisCommandRawReply = string | number | Buffer | Array<RedisCommandRawReply> | null | undefined;
export declare type RedisCommandArguments = Array<string | Buffer> & {
    preserve?: unknown;
};
export interface RedisCommand {
    FIRST_KEY_INDEX?: number | ((...args: Array<any>) => string);
    IS_READ_ONLY?: boolean;
    transformArguments(this: void, ...args: Array<any>): RedisCommandArguments;
    BUFFER_MODE?: boolean;
    transformReply?(this: void, reply: RedisCommandRawReply, preserved?: unknown): any;
}
export declare type RedisCommandReply<C extends RedisCommand> = C['transformReply'] extends (...args: any) => infer T ? T : RedisCommandRawReply;
export interface RedisCommands {
    [command: string]: RedisCommand;
}
export interface RedisModule {
    [command: string]: RedisCommand;
}
export interface RedisModules {
    [module: string]: RedisModule;
}
export declare type RedisScript = RedisScriptConfig & SHA1;
export interface RedisScripts {
    [script: string]: RedisScript;
}
export interface RedisPlugins<M extends RedisModules, S extends RedisScripts> {
    modules?: M;
    scripts?: S;
}
