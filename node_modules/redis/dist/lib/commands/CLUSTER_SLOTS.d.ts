import { RedisCommandArguments } from '.';
export declare function transformArguments(): RedisCommandArguments;
declare type ClusterSlotsRawNode = [ip: string, port: number, id: string];
declare type ClusterSlotsRawReply = Array<[from: number, to: number, master: ClusterSlotsRawNode, ...replicas: Array<ClusterSlotsRawNode>]>;
declare type ClusterSlotsNode = {
    ip: string;
    port: number;
    id: string;
};
export declare type ClusterSlotsReply = Array<{
    from: number;
    to: number;
    master: ClusterSlotsNode;
    replicas: Array<ClusterSlotsNode>;
}>;
export declare function transformReply(reply: ClusterSlotsRawReply): ClusterSlotsReply;
export {};
