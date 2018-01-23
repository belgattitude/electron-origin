import React from 'react';
import {hot} from 'react-hot-loader';
import {Button, Reboot} from 'material-ui';
import Typography from 'material-ui/Typography';
import {connect} from 'react-redux';

import {addFile, convertMedia, setMediaInfo} from '@src/actions';
import Ffprobe from '@src/lib/FFProbe/FFProbe';
import {MediaInfoInterface} from '@src/lib/FFProbe/MediaInfoInterface';
import MediaPreviewConnected from '@src/components/MediaPreviewConnected';
import MediaInfoConnected from '@src/components/MediaInfoConnected';
import ConverterConnected from '@src/components/ConverterConnected';
import ElectronConfig from '@src/Config';
import {ConvertOptionsInterface} from '@src/lib/FFMpeg/ConvertPropsInterface';

const mapDispatchToProps = (dispatch: any) => ({
    addFile: (file: string) => dispatch(addFile(file)),
    setMediaInfo: (mediaInfo: MediaInfoInterface) => dispatch(setMediaInfo(mediaInfo)),
    convertMedia: (srcFile: string, destFile: string, options: ConvertOptionsInterface) => dispatch(
        convertMedia(srcFile, destFile, options)
    ),
});

const mapStateToProps = (state: any) => {
    return { file: state.file };
};

interface Props {
    file: string;
    addFile: (file: string) => {};
    setMediaInfo: (mediaInfo: MediaInfoInterface) => {};
    convertMedia: (srcFile: string, destFile: string, options: ConvertOptionsInterface) => {};
}

class App extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    async loadVideoInfos() {
        console.log('Converting video', this.props.file);
        const filename = this.props.file;
        const ffprobe = new Ffprobe(ElectronConfig.getFFBinariesConfig().ffprobe);
        const fileInfo = await ffprobe.getFileInfo(filename).then(
            (info: MediaInfoInterface) => {
                this.props.setMediaInfo(info);
                // For debug
                //ffmpeg -i input.flv -vcodec mpeg4 -acodec aac output.mp4
                const options: ConvertOptionsInterface = {
                        videoCodec: 'vp9',
                        audioCodec: 'aac',
                };
                const destFile = '/tmp/a_video.mkv';
                this.props.convertMedia(filename, destFile, options);
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
                <ConverterConnected />
                <MediaInfoConnected/>
            </div>
        );
    }

}
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default hot(module)(ConnectedApp);
