"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 2;
function transformArguments(key, group, id, options) {
    const args = ['XGROUP', 'CREATE', key, group, id];
    if (options === null || options === void 0 ? void 0 : options.MKSTREAM) {
        args.push('MKSTREAM');
    }
    return args;
}
exports.transformArguments = transformArguments;
