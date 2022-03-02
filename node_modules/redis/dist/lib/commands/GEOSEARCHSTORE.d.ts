import { GeoSearchFrom, GeoSearchBy, GeoSearchOptions } from './generic-transformers';
export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
interface GeoSearchStoreOptions extends GeoSearchOptions {
    STOREDIST?: true;
}
export declare function transformArguments(destination: string, source: string, from: GeoSearchFrom, by: GeoSearchBy, options?: GeoSearchStoreOptions): Array<string>;
export declare function transformReply(reply: number): number;
export {};
