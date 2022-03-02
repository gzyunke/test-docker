export declare function transformArguments(username: string): Array<string>;
declare type AclGetUserRawReply = [
    _: string,
    flags: Array<string>,
    _: string,
    passwords: Array<string>,
    _: string,
    commands: string,
    _: string,
    keys: Array<string>,
    _: string,
    channels: Array<string>
];
interface AclUser {
    flags: Array<string>;
    passwords: Array<string>;
    commands: string;
    keys: Array<string>;
    channels: Array<string>;
}
export declare function transformReply(reply: AclGetUserRawReply): AclUser;
export {};
