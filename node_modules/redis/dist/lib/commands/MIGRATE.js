"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = void 0;
function transformArguments(host, port, key, destinationDb, timeout, options) {
    const args = ['MIGRATE', host, port.toString()], isKeyString = typeof key === 'string';
    if (isKeyString) {
        args.push(key);
    }
    else {
        args.push('""');
    }
    args.push(destinationDb.toString(), timeout.toString());
    if (options === null || options === void 0 ? void 0 : options.COPY) {
        args.push('COPY');
    }
    if (options === null || options === void 0 ? void 0 : options.REPLACE) {
        args.push('REPLACE');
    }
    if (options === null || options === void 0 ? void 0 : options.AUTH) {
        if (options.AUTH.username) {
            args.push('AUTH2', options.AUTH.username, options.AUTH.password);
        }
        else {
            args.push('AUTH', options.AUTH.password);
        }
    }
    if (!isKeyString) {
        args.push('KEYS', ...key);
    }
    return args;
}
exports.transformArguments = transformArguments;
