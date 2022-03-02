"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformReply = exports.transformArguments = void 0;
function transformArguments() {
    return ['CLIENT', 'INFO'];
}
exports.transformArguments = transformArguments;
const REGEX = /=([^\s]*)/g;
function transformReply(reply) {
    const [[, id], [, addr], [, laddr], [, fd], [, name], [, age], [, idle], [, flags], [, db], [, sub], [, psub], [, multi], [, qbuf], [, qbufFree], [, argvMem], [, obl], [, oll], [, omem], [, totMem], [, events], [, cmd], [, user], [, redir]] = [...reply.matchAll(REGEX)];
    return {
        id: Number(id),
        addr,
        laddr,
        fd: Number(fd),
        name,
        age: Number(age),
        idle: Number(idle),
        flags,
        db: Number(db),
        sub: Number(sub),
        psub: Number(psub),
        multi: Number(multi),
        qbuf: Number(qbuf),
        qbufFree: Number(qbufFree),
        argvMem: Number(argvMem),
        obl: Number(obl),
        oll: Number(oll),
        omem: Number(omem),
        totMem: Number(totMem),
        events,
        cmd,
        user,
        redir: Number(redir)
    };
}
exports.transformReply = transformReply;
