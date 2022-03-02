"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, field) {
    return ['HGET', key, field];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return reply;
}
exports.transformReply = transformReply;
