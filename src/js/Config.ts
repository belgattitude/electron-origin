
const electron = require('electron');

export interface FFBinariesConfigInterface {
    path: string;
    ffmpeg: string;
    ffprobe: string;
}

export default class ElectronConfig {

    static getFFBinariesConfig(): FFBinariesConfigInterface {
        return (electron.remote.getGlobal('ffbinariesConfig'));
    }

}
