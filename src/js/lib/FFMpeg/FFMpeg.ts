import execa, {ExecaReturns, Options} from 'execa';
import {ConvertOptionsInterface} from '@src/lib/FFMpeg/ConvertPropsInterface';
import * as readline from 'readline';

class FFMpeg {

    ffmpegPath: string;

    constructor(ffmpegPath: string) {
        this.ffmpegPath = ffmpegPath;
    }

    async convert(srcFile: string, destFile: string, options: ConvertOptionsInterface): Promise<any> {

        const process = execa(
            this.getFFMpegPath(),
            [
                '-i', srcFile,
                '-vcodec', options.videoCodec,
                '-acodec', options.audioCodec,
                '-y', // to overwrite the file if it exists
                // For debug, take only 8 seconds.750(msec)
                '-ss',  '00:02:00.0',
                '-t',  '00:02:48.750',
                destFile,
            ],
            {stripEof: false});

        const rl = readline.createInterface(process.stderr);
        rl.on('line', (line) => {
            // frame=  219 fps= 14 q=0.0 Lsize=     398kB time=00:00:08.75 bitrate= 372.6kbits/s speed=0.55x
            if (line.match(/^frame=/)) {
                const properties = line.replace(/(=(\ )+)/g, '=').split(' ');
                const data = properties.reduce((accumulator: any, keyPair: string) => {
                    const [key, val] = keyPair.split('=');
                    accumulator[key.toLowerCase()] = val;
                    return accumulator;
                }, {frame: 0, fps: 0, q: 0, time: 0, bitrate: 0, speed: 0});
                console.log('line', data);
            }
        });

        return process;
    }

    async getVersion(): Promise<string> {
        const stdout =   await execa(this.getFFMpegPath(), ['-version'], {stripEof: true});
        return stdout.stdout;
    }

    async executeAsync(args: string[], options?: Options): Promise<ExecaReturns> {
        const exec = execa(
            this.getFFMpegPath(),
            args,
            options
        ).then((ret: ExecaReturns) => {
            console.log('received execaReturn', ret);
            return ret;
        });
        return exec;
    }

    getFFMpegPath(): string {
        return this.ffmpegPath;
    }

}

export default FFMpeg;
