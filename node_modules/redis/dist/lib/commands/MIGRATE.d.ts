import { AuthOptions } from './AUTH';
interface MigrateOptions {
    COPY?: true;
    REPLACE?: true;
    AUTH?: AuthOptions;
}
export declare function transformArguments(host: string, port: number, key: string | Array<string>, destinationDb: number, timeout: number, options?: MigrateOptions): Array<string>;
export declare function transformReply(): string;
export {};
