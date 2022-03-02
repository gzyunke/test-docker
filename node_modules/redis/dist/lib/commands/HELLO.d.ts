import { AuthOptions } from './AUTH';
interface HelloOptions {
    protover: number;
    auth?: Required<AuthOptions>;
    clientName?: string;
}
export declare function transformArguments(options?: HelloOptions): Array<string>;
declare type HelloRawReply = [
    _: never,
    server: string,
    _: never,
    version: string,
    _: never,
    proto: number,
    _: never,
    id: number,
    _: never,
    mode: string,
    _: never,
    role: string,
    _: never,
    modules: Array<string>
];
interface HelloTransformedReply {
    server: string;
    version: string;
    proto: number;
    id: number;
    mode: string;
    role: string;
    modules: Array<string>;
}
export declare function transformReply(reply: HelloRawReply): HelloTransformedReply;
export {};
