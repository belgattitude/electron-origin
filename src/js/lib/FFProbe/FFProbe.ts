import execa, {ExecaReturns, Options} from 'execa';
import { MediaInfoInterface } from './MediaInfoInterface';

class Ffprobe {

    ffprobePath: string;

    constructor(ffprobePath: string) {
        this.ffprobePath = ffprobePath;
    }

    async getFileInfo(file: string): Promise<MediaInfoInterface> {
        return this.executeAsync(
            file,
            ['-v', 'quiet', '-print_format', 'json' , '-show_format', '-show_streams'],
            {stripEof: false}
        ).then((ret: ExecaReturns) => {
            const info = JSON.parse(ret.stdout);
            return info;
        });
    }

    async getVersion(): Promise<string> {
        const stdout =   await execa(this.getFFProbePath(), ['-version'], {stripEof: true});
        return stdout.stdout;
    }

    async executeAsync(filename: string, args: string[], options?: Options): Promise<ExecaReturns> {
        const exec = execa(
            this.getFFProbePath(),
            [ ... args, filename ],
            options
        ).then((ret: ExecaReturns) => {
            console.log('received execaReturn', ret);
            return ret;
        });
        return exec;
    }

    /*
    executeSync(filename: string, args: string[], options?: Options): Promise<ExecaReturns> {
        return async () => {
            return await this.executeAsync(filename, args, options);
        }
    }*/

    getFFProbePath(): string {
        return this.ffprobePath;
    }

}

export default Ffprobe;
