export interface AuthOptions {
    username?: string;
    password: string;
}
export declare function transformArguments({ username, password }: AuthOptions): Array<string>;
export declare function transformReply(): string;
