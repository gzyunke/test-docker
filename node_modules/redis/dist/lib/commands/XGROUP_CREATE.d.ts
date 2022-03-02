export declare const FIRST_KEY_INDEX = 2;
interface XGroupCreateOptions {
    MKSTREAM?: true;
}
export declare function transformArguments(key: string, group: string, id: string, options?: XGroupCreateOptions): Array<string>;
export declare function transformReply(): string;
export {};
