import { RedisCommandArguments } from '.';
export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
export declare function transformArguments(key: string, member: string | Array<string>): RedisCommandArguments;
interface GeoCoordinates {
    longitude: string;
    latitude: string;
}
export declare function transformReply(reply: Array<[string, string] | null>): Array<GeoCoordinates | null>;
export {};
