declare interface IEnvironmentVariables {
    BOT_TOKEN: string;
    BOT_ID: string;
}

declare namespace NodeJS {
    export interface ProcessEnv extends IEnvironmentVariables {
        TZ?: string | undefined;
    }
}
