"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = void 0;
const generic_transformers_1 = require("./generic-transformers");
function transformArguments(keys) {
    return (0, generic_transformers_1.pushVerdictArguments)(['DEL'], keys);
}
exports.transformArguments = transformArguments;
