//import execa, {ExecaChildProcess, ExecaReturns} from 'execa';
import execa, {ExecaReturns, Options} from 'execa';
import { MediaInfoInterface } from './MediaInfoInterface';

class Ffprobe {

    ffprobePath: string;

    constructor(ffprobePath: string) {
        this.ffprobePath = ffprobePath;
    }

    async getInfo(file: string): Promise<string> {
        const stdout =  await execa(this.getFFProbePath(), [
            '-v', 'quiet', '-print_format', 'json' , '-show_format', '-show_streams',
            file
        ], {stripEof: false});
        return stdout.stderr;
    }

    getInfo2(file: string): any {
        execa(
            this.getFFProbePath(), [
                '-v', 'quiet', '-print_format', 'json' , '-show_format', '-show_streams',
                file
            ]
        ).then((result) => {
            console.log('result', JSON.parse(result.stdout));
            return result;
        });
    }

    async getFileInfo(file: string): Promise<MediaInfoInterface> //ExecaChildProcess
    {
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
        // const getV = async () => {
        const stdout =   await execa(this.getFFProbePath(), ['-version'], {stripEof: true});
        return stdout.stdout;
    }

    async executeAsync(filename: string, args: string[], options?: Options): Promise<any> {
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
    executeSync(options: string[], file: string): string {

    }
    */
    getFFProbePath(): string {
        return this.ffprobePath;
    }

}

export default Ffprobe;
