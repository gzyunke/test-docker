import { LMoveSide } from './LMOVE';
export declare const FIRST_KEY_INDEX = 1;
export declare function transformArguments(source: string, destination: string, sourceDirection: LMoveSide, destinationDirection: LMoveSide, timeout: number): Array<string>;
export declare function transformReply(): string | null;
