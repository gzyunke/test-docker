"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformReply = exports.transformArguments = void 0;
function transformArguments(pattern) {
    return ['KEYS', pattern];
}
exports.transformArguments = transformArguments;
function transformReply(keys) {
    return keys;
}
exports.transformReply = transformReply;
