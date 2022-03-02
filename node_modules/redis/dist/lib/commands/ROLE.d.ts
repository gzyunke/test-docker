export declare const IS_READ_ONLY = true;
export declare function transformArguments(): Array<string>;
interface RoleReplyInterface<T extends string> {
    role: T;
}
declare type RoleMasterRawReply = ['master', number, Array<[string, string, string]>];
interface RoleMasterReply extends RoleReplyInterface<'master'> {
    replicationOffest: number;
    replicas: Array<{
        ip: string;
        port: number;
        replicationOffest: number;
    }>;
}
declare type RoleReplicaState = 'connect' | 'connecting' | 'sync' | 'connected';
declare type RoleReplicaRawReply = ['slave', string, number, RoleReplicaState, number];
interface RoleReplicaReply extends RoleReplyInterface<'slave'> {
    master: {
        ip: string;
        port: number;
    };
    state: RoleReplicaState;
    dataReceived: number;
}
declare type RoleSentinelRawReply = ['sentinel', Array<string>];
interface RoleSentinelReply extends RoleReplyInterface<'sentinel'> {
    masterNames: Array<string>;
}
declare type RoleRawReply = RoleMasterRawReply | RoleReplicaRawReply | RoleSentinelRawReply;
declare type RoleReply = RoleMasterReply | RoleReplicaReply | RoleSentinelReply;
export declare function transformReply(reply: RoleRawReply): RoleReply;
export {};
