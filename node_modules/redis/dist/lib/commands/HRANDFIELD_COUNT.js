"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const HRANDFIELD_1 = require("./HRANDFIELD");
var HRANDFIELD_2 = require("./HRANDFIELD");
Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return HRANDFIELD_2.FIRST_KEY_INDEX; } });
function transformArguments(key, count) {
    return [
        ...(0, HRANDFIELD_1.transformArguments)(key),
        count.toString()
    ];
}
exports.transformArguments = transformArguments;
