import React from 'react';
import {hot} from 'react-hot-loader';
import {Button, Reboot} from 'material-ui';
import Typography from 'material-ui/Typography';
import {connect} from 'react-redux';

import {addMedia} from '@src/actions';
import Ffprobe from '@src/lib/FFProbe/FFProbe';
import {MediaInfoInterface} from '@src/lib/FFProbe/MediaInfoInterface';
import ConnectedMediaPreview from '@src/components/ConnectedMediaPreview';

const mapDispatchToProps = (dispatch: any) => {
    return {
        addMedia: (media: any) => dispatch(addMedia(media)),
    };
};

const mapStateToProps = (state: any) => {
    return { media: state.media };
};

interface Props {
    addMedia: (media: any) => {};
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

    loadVideoInfos() {
        console.log('Converting video', this.props.media);
        const filename = this.props.media;
        const ffprobe = new Ffprobe(App.getFFBinariesConfig().ffprobe);
        ffprobe.getFileInfo(filename).then(
            (info: MediaInfoInterface) => {
                console.log('info', info);
            }
        ).catch((reason: any) => {
            console.log('failed', reason);
        });
        console.log('ITS DONE');
    }

    onClick() {
        this.props.addMedia('/home/sebastien/Videos/Dance/Smoke/smoke_3_3.mp4');
    }

    render() {
        const text = 'Hello world';
        return (
            <div>
                <Reboot />
                <h3>Welcomes {text}</h3>
                <Button raised={true} color="primary" onClick={() => { this.onClick(); }}>
                    Change video
                </Button>
                <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                <Button raised={true} onClick={() => { this.loadVideoInfos(); }}>
                    Get video info
                </Button>

                <ConnectedMediaPreview/>
            </div>
        );
    }

}
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default hot(module)(ConnectedApp);
