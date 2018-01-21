import React from 'react';
import { hot } from 'react-hot-loader';
import {Button, Reboot} from 'material-ui';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import ConnectedMediaPreview from '../components/ConnectedMediaPreview';

import { addMedia } from '../actions/index';
import Ffprobe from '../lib/FFProbe/FFProbe';
import {MediaInfoInterface} from '../lib/FFProbe/MediaInfoInterface';
const mapDispatchToProps = (dispatch: any) => {
    return {
        addMedia: (media: any) => dispatch(addMedia(media)),
    };
};

const mapStateToProps = (state: any) => {
    return { media: state.media };
};

interface Props {
    addMedia: (media: any) => {},
    media: any
}


interface FFBinariesConfigInterface {
    path: string,
    ffmpeg: string,
    ffprobe: string
};

class App extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    convert() {
        console.log('Converting video', this.props.media);
        const filename = this.props.media;
        const ffprobe = new Ffprobe(this.getFFBinariesConfig().ffprobe);
        ffprobe.getFileInfo(filename).then(
            (info: MediaInfoInterface) => {
                console.log('info', info);
            }
        ).catch((reason: any) => {
            console.log('failed', reason);
        });
        console.log('ITS DONE');




    }

    getFFBinariesConfig(): FFBinariesConfigInterface {
        const ffbinariesConfig: FFBinariesConfigInterface = require('electron').remote.getGlobal('ffbinariesConfig');
        return ffbinariesConfig;
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
                <Button raised color="primary" onClick={ () => { this.onClick() } }>
                    Change video
                </Button>
                <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                <Button raised onClick={ () => { this.convert() }}>
                    Convert video
                </Button>

                <ConnectedMediaPreview/>
            </div>
        );
    }
}
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default hot(module)(ConnectedApp);
