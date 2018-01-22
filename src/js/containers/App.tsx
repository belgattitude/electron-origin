import React from 'react';
import {hot} from 'react-hot-loader';
import {Button, Reboot} from 'material-ui';
import Typography from 'material-ui/Typography';
import {connect} from 'react-redux';

import {loadFile} from '@src/actions';
import Ffprobe from '@src/lib/FFProbe/FFProbe';
import {MediaInfoInterface} from '@src/lib/FFProbe/MediaInfoInterface';
import MediaPreviewConnected from '@src/components/MediaPreviewConnected';
import MediaInfoConnected from '@src/components/MediaInfoConnected';

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadFile: (media: any) => dispatch(loadFile(media)),
    };
};

const mapStateToProps = (state: any) => {
    return { media: state.media };
};

interface Props {
    loadFile: (media: any) => {};
    media: any;
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
        console.log('Converting video', this.props.media);
        const filename = this.props.media;
        const ffprobe = new Ffprobe(App.getFFBinariesConfig().ffprobe);
        const fileInfo = await ffprobe.getFileInfo(filename).then(
            (info: MediaInfoInterface) => {
                console.log('info', info);
                return info;
            }
        ).catch((reason: any) => {
            console.log('failed', reason);
        });
        console.log('infos', fileInfo);
        console.log('ITS DONE');
    }

    addFile(file: string) {
        this.props.loadFile(file);
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
