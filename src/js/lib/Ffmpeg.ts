import execa from 'execa';

class Ffmpeg {

    ffmpegPath: string;

    constructor(ffmpegPath: string) {
        this.ffmpegPath = ffmpegPath;
    }

    async getVersion(): Promise<string> {
        //const getV = async () => {
        let stdout =   await execa(this.getFFMpegPath(), ['-version'], {stripEof: true});
        return stdout.stdout;
    }

    getFFMpegPath(): string {
        return this.ffmpegPath;
    }

}


export default Ffmpeg;
