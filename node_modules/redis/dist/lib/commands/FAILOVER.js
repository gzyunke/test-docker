"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = void 0;
function transformArguments(options) {
    const args = ['FAILOVER'];
    if (options === null || options === void 0 ? void 0 : options.TO) {
        args.push('TO', options.TO.host, options.TO.port.toString());
        if (options.TO.FORCE) {
            args.push('FORCE');
        }
    }
    if (options === null || options === void 0 ? void 0 : options.ABORT) {
        args.push('ABORT');
    }
    if (options === null || options === void 0 ? void 0 : options.TIMEOUT) {
        args.push('TIMEOUT', options.TIMEOUT.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
