import { GeoCoordinates } from './generic-transformers';
interface GeoMember extends GeoCoordinates {
    member: string;
}
interface NX {
    NX?: true;
}
interface XX {
    XX?: true;
}
declare type SetGuards = NX | XX;
interface GeoAddCommonOptions {
    CH?: true;
}
declare type GeoAddOptions = SetGuards & GeoAddCommonOptions;
export declare const FIRST_KEY_INDEX = 1;
export declare function transformArguments(key: string, toAdd: GeoMember | Array<GeoMember>, options?: GeoAddOptions): Array<string>;
export declare function transformReply(): number;
export {};
