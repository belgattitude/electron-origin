import execa from 'execa';

class Ffmpeg {

    ffmpegPath;

    constructor() {

        this.ffmpegPath = null;

    }

    async getVersion() {

        let stdout =   await execa(this.getFFMpegPath(), ['-version'], {stripEof: true});

        return stdout.stdout;
    }

    getFFMpegPath() {
        let ffbinariesConfig = require('electron').remote.getGlobal('ffbinariesConfig');
        return ffbinariesConfig.ffmpeg;
    }

}


/*
class Ffmpeg {

    ffmpegPath: string;

    constructor() {



    }

    async getVersion(): Promise<string> {

        //const getV = async () => {
        let stdout =   await execa(this.getFFMpegPath(), ['-version'], {stripEof: true});/*.then(result => {
                console.log("unicorns", result.stdout);
                return result.stdout;
            });
        //}
        return getV();
        *//*
        return stdout.stdout;
*/
/*
        const getV = async () => {
            const ret = await execa.sync('echo', ['foo'], { stripEof: false });
            console.log('ret', ret);
            return ret.stdout;
        };
        return getV();*//*
    }

    getFFMpegPath(): string {
        if (this.ffmpegPath !== null) {


            let appPath = require('electron').remote.getGlobal('ffbinariesPath');
            //let appPath = require('path').normalize(require('electron').remote.app.getAppPath());
            //let g = global as any;
            console.log('APPPATH', appPath);

            let os = require('os')
            let path = require('path')

            let platform = os.platform()
            if (platform !== 'linux' && platform !== 'darwin' && platform !== 'win32') {
                console.error('Unsupported platform.')
                process.exit(1)
            }

            let arch = os.arch()
            if (platform === 'darwin' && arch !== 'x64') {
                console.error('Unsupported architecture.')
                process.exit(1)
            }

            let ffmpegPath = path.join(
                appPath,
                platform,
                arch,
                platform === 'win32' ? 'ffmpeg.exe' : 'ffmpeg'
            ).replace('app.asar', 'app.asar.unpacked');

            this.ffmpegPath = ffmpegPath;

        }
        return this.ffmpegPath;
    }

}
*/
export default Ffmpeg;
