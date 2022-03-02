"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = void 0;
function transformArguments(options) {
    const args = ['BGSAVE'];
    if (options === null || options === void 0 ? void 0 : options.SCHEDULE) {
        args.push('SCHEDULE');
    }
    return args;
}
exports.transformArguments = transformArguments;
