import dargs from 'dargs';
import { execa } from 'execa';
const args = (url, flags = {}) => {
    const argsList = dargs(flags, { useEquals: false });
    return [url].concat(argsList).filter(Boolean);
};
const isJSON = (str = '') => str.startsWith('{');
class YtDlp {
    constructor(binaryPath) {
        this.binaryPath = binaryPath;
    }
    async exec(url, flags, options = {}) {
        const { stdout } = await execa(this.binaryPath, args(url, flags), options);
        return (isJSON(stdout) ? JSON.parse(stdout) : stdout);
    }
}
const hello = () => {
    return 'Hello World';
};
export { hello, args, isJSON, YtDlp, };
