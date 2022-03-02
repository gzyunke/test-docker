"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, toAdd, options) {
    var _a, _b;
    const args = ['GEOADD', key];
    if ((_a = options) === null || _a === void 0 ? void 0 : _a.NX) {
        args.push('NX');
    }
    else if ((_b = options) === null || _b === void 0 ? void 0 : _b.XX) {
        args.push('XX');
    }
    if (options === null || options === void 0 ? void 0 : options.CH) {
        args.push('CH');
    }
    for (const { longitude, latitude, member } of (Array.isArray(toAdd) ? toAdd : [toAdd])) {
        args.push(longitude.toString(), latitude.toString(), member);
    }
    return args;
}
exports.transformArguments = transformArguments;
