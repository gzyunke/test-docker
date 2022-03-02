"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = require("./generic-transformers");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'ZPOPMAX',
        key
    ];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    if (!reply.length)
        return null;
    return {
        value: reply[0],
        score: (0, generic_transformers_1.transformReplyNumberInfinity)(reply[1])
    };
}
exports.transformReply = transformReply;
