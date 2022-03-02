import { TuplesObject } from './generic-transformers';
export declare const FIRST_KEY_INDEX = 1;
interface XAddOptions {
    NOMKSTREAM?: true;
    TRIM?: {
        strategy?: 'MAXLEN' | 'MINID';
        strategyModifier?: '=' | '~';
        threshold: number;
        limit?: number;
    };
}
export declare function transformArguments(key: string, id: string, message: TuplesObject, options?: XAddOptions): Array<string>;
export declare function transformReply(): string;
export {};
