"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = void 0;
const generic_transformers_1 = require("./generic-transformers");
function transformArguments(key) {
    return (0, generic_transformers_1.pushVerdictArguments)(['WATCH'], key);
}
exports.transformArguments = transformArguments;
