import React from 'react';
import {hot} from 'react-hot-loader';
import {Button, Reboot} from 'material-ui';
import Typography from 'material-ui/Typography';
import {connect} from 'react-redux';

import {addFile, setMediaInfo} from '@src/actions';
import Ffprobe from '@src/lib/FFProbe/FFProbe';
import {MediaInfoInterface} from '@src/lib/FFProbe/MediaInfoInterface';
import MediaPreviewConnected from '@src/components/MediaPreviewConnected';
import MediaInfoConnected from '@src/components/MediaInfoConnected';

const mapDispatchToProps = (dispatch: any) => ({
    addFile: (file: string) => dispatch(addFile(file)),
    setMediaInfo: (mediaInfo: MediaInfoInterface) => dispatch(setMediaInfo(mediaInfo)),
});

const mapStateToProps = (state: any) => {
    return { file: state.file };
};

interface Props {
    file: string;
    addFile: (file: string) => {};
    setMediaInfo: (mediaInfo: MediaInfoInterface) => {};
}

interface FFBinariesConfigInterface {
    path: string;
    ffmpeg: string;
    ffprobe: string;
}

class App extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    static getFFBinariesConfig(): FFBinariesConfigInterface {
        return (require('electron').remote.getGlobal('ffbinariesConfig'));
    }

    async loadVideoInfos() {
        console.log('Converting video', this.props.file);
        const filename = this.props.file;
        const ffprobe = new Ffprobe(App.getFFBinariesConfig().ffprobe);
        const fileInfo = await ffprobe.getFileInfo(filename).then(
            (info: MediaInfoInterface) => {
                console.log('info', info);
                this.props.setMediaInfo(info);
                return info;

            }
        ).catch((reason: any) => {
            console.log('failed', reason);
        });
        console.log('infos', fileInfo);
        console.log('ITS DONE');
    }

    addFile(file: string) {
        this.props.addFile(file);
    }

    render() {
        const text = 'Hello world';
        const otherFile = '/home/sebastien/Videos/Dance/Smoke/smoke_3_3.mp4';
        return (
            <div>
                <Reboot />
                <h3>Welcomes {text}</h3>
                <Button raised={true} color="primary" onClick={() => { this.addFile(otherFile); }}>
                    Change video
                </Button>
                <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                <Button raised={true} onClick={() => { this.loadVideoInfos(); }}>
                    Get video info
                </Button>

                <MediaPreviewConnected />
                <MediaInfoConnected/>
            </div>
        );
    }

}
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default hot(module)(ConnectedApp);
