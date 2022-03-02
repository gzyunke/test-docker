"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = void 0;
const generic_transformers_1 = require("./generic-transformers");
function transformArguments(sha1, options) {
    return (0, generic_transformers_1.pushEvalArguments)(['EVALSHA', sha1], options);
}
exports.transformArguments = transformArguments;
