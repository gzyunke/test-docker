export declare function transformArguments(): Array<string>;
interface ClientInfoReply {
    id: number;
    addr: string;
    laddr: string;
    fd: number;
    name: string;
    age: number;
    idle: number;
    flags: string;
    db: number;
    sub: number;
    psub: number;
    multi: number;
    qbuf: number;
    qbufFree: number;
    argvMem: number;
    obl: number;
    oll: number;
    omem: number;
    totMem: number;
    events: string;
    cmd: string;
    user: string;
    redir: number;
}
export declare function transformReply(reply: string): ClientInfoReply;
export {};
