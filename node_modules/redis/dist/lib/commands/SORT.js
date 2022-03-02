"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, options) {
    const args = ['SORT', key];
    if (options === null || options === void 0 ? void 0 : options.BY) {
        args.push('BY', options.BY);
    }
    if (options === null || options === void 0 ? void 0 : options.LIMIT) {
        args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.GET) {
        for (const pattern of (typeof options.GET === 'string' ? [options.GET] : options.GET)) {
            args.push('GET', pattern);
        }
    }
    if (options === null || options === void 0 ? void 0 : options.DIRECTION) {
        args.push(options.DIRECTION);
    }
    if (options === null || options === void 0 ? void 0 : options.ALPHA) {
        args.push('ALPHA');
    }
    if (options === null || options === void 0 ? void 0 : options.STORE) {
        args.push('STORE', options.STORE);
    }
    return args;
}
exports.transformArguments = transformArguments;
// integer when using `STORE`
function transformReply(reply) {
    return reply;
}
exports.transformReply = transformReply;
