import execa from 'execa';

class Ffprobe {

    ffprobePath: string;

    constructor(ffprobePath: string) {
        this.ffprobePath = ffprobePath;
    }

    async getInfo(file: string): Promise<string> {
        let stdout =  await execa(this.getFFProbePath(), [
            '-v quiet -print_format json -show_format -show_streams',
            file
        ], {stripEof: false});
        return stdout.stderr;
    }

    getInfo2(file: string): any {
        execa(
            this.getFFProbePath(),
            ['-v', 'quiet', '-print_format', 'json' ,'-show_format', '-show_streams',
            file]
        ).then((result) => {
            console.log('result', JSON.parse(result.stdout));
             return result;
        });
    }


    async getVersion(): Promise<string> {
        //const getV = async () => {
        let stdout =   await execa(this.getFFProbePath(), ['-version'], {stripEof: true});
        return stdout.stdout;
    }

    getFFProbePath(): string {
        return this.ffprobePath;
    }

}


export default Ffprobe;
