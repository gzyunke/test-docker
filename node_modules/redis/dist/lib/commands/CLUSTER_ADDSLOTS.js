"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = void 0;
function transformArguments(slots) {
    const args = ['CLUSTER', 'ADDSLOTS'];
    if (typeof slots === 'number') {
        args.push(slots.toString());
    }
    else {
        args.push(...slots.map(String));
    }
    return args;
}
exports.transformArguments = transformArguments;
