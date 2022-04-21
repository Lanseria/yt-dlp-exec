import type { Options } from 'execa';
declare type DargsFlags = {
    '--'?: string[];
    _?: string[];
} & Record<string, string | boolean | number | readonly string[]>;
declare const args: (url: string, flags?: DargsFlags) => string[];
declare const isJSON: (str?: string) => boolean;
declare class YtDlp {
    binaryPath: string;
    constructor(binaryPath: string);
    exec(url: string, flags: DargsFlags, options?: Options): Promise<any>;
}
declare const hello: () => string;
export { hello, args, isJSON, YtDlp, };
