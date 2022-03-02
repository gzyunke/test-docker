"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
class RedisMultiCommand {
    constructor() {
        Object.defineProperty(this, "queue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "scriptsInUse", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set()
        });
    }
    static generateChainId() {
        return Symbol('RedisMultiCommand Chain Id');
    }
    addCommand(args, transformReply) {
        this.queue.push({
            args,
            transformReply
        });
    }
    addScript(script, args) {
        const transformedArguments = [];
        if (this.scriptsInUse.has(script.SHA1)) {
            transformedArguments.push('EVALSHA', script.SHA1);
        }
        else {
            this.scriptsInUse.add(script.SHA1);
            transformedArguments.push('EVAL', script.SCRIPT);
        }
        transformedArguments.push(script.NUMBER_OF_KEYS.toString());
        const scriptArguments = script.transformArguments(...args);
        transformedArguments.push(...scriptArguments);
        if (scriptArguments.preserve) {
            transformedArguments.preserve = scriptArguments.preserve;
        }
        this.addCommand(transformedArguments, script.transformReply);
        return transformedArguments;
    }
    exec() {
        if (!this.queue.length) {
            return;
        }
        return [
            { args: ['MULTI'] },
            ...this.queue,
            { args: ['EXEC'] }
        ];
    }
    handleExecReplies(rawReplies) {
        const execReply = rawReplies[rawReplies.length - 1];
        if (execReply === null) {
            throw new errors_1.WatchError();
        }
        return this.transformReplies(execReply);
    }
    transformReplies(rawReplies) {
        return rawReplies.map((reply, i) => {
            const { transformReply, args } = this.queue[i];
            return transformReply ? transformReply(reply, args.preserve) : reply;
        });
    }
}
exports.default = RedisMultiCommand;
