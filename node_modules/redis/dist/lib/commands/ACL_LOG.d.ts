export declare function transformArguments(count?: number): Array<string>;
declare type AclLogRawReply = [
    _: string,
    count: number,
    _: string,
    reason: string,
    _: string,
    context: string,
    _: string,
    object: string,
    _: string,
    username: string,
    _: string,
    ageSeconds: string,
    _: string,
    clientInfo: string
];
interface AclLog {
    count: number;
    reason: string;
    context: string;
    object: string;
    username: string;
    ageSeconds: number;
    clientInfo: string;
}
export declare function transformReply(reply: Array<AclLogRawReply>): Array<AclLog>;
export {};
