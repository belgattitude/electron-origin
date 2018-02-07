import React from 'react';
import {Button} from 'material-ui';
import {connect} from 'react-redux';

import FFProbe from '@src/lib/FFProbe/FFProbe';
import {MediaInfoInterface} from '@src/lib/FFProbe/MediaInfoInterface';
import FFMpeg from '@src/lib/FFMpeg/FFMpeg';
import {ConvertOptionsInterface} from '@src/lib/FFMpeg/ConvertPropsInterface';

import ElectronConfig from '@src/electron-config';

import { IMediaInfo, mediaActions } from '@src/redux/media/index';
import { VideoPreviewConnected, VideoInfoConnected } from '@src/connected/index';
import { push } from 'react-router-redux';

const mapDispatchToProps = (dispatch: any) => ({
    setFile: (file: string) => dispatch(mediaActions.setFile(file)),
    setMediaInfo: (mediaInfo: IMediaInfo) => dispatch(mediaActions.setMediaInfo(mediaInfo)),
    backToHomePage: () => dispatch(push('/')),
});

const mapStateToProps = (state: any) => {
    return { filename: state.media.filename };
};

interface Props {
    filename: string;
    setFile: (file: string) => {};
    setMediaInfo: (mediaInfo: IMediaInfo) => {};
    backToHomePage: () => {};
}

class VideoEditor extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    async loadVideoInfo() {
        const filename = this.props.filename;
        const ffprobe = new FFProbe(ElectronConfig.getFFBinariesConfig().ffprobe);
        const fileInfo = await ffprobe.getFileInfo(filename).then(
            (info: MediaInfoInterface) => {
                // Convert MediaInfoInterface into mediaInfo
                const mediaInfo: IMediaInfo = {
                    filename: info.format.filename,
                    duration: info.format.duration,
                    size: info.format.size,
                    frames: info.streams[0].nb_frames,
                    ffprobe: info,
                };

                this.props.setMediaInfo(mediaInfo);
            }
        ).catch((reason: any) => {
            console.log('failed', reason);
        });
        console.log('infos', fileInfo);
        console.log('ITS DONE');
    }

    async convertVideo() {
        const filename = this.props.filename;
        // For debug
        // ffmpeg -i input.flv -vcodec mpeg4 -acodec aac output.mp4
        const options: ConvertOptionsInterface = {
            videoCodec: 'vp9',
            audioCodec: 'aac',
        };
        const destFile = '/tmp/a_video.mkv';
        const srcFile = filename;
        const ffmpeg = new FFMpeg(ElectronConfig.getFFBinariesConfig().ffmpeg);
        const convert = ffmpeg.convert(srcFile, destFile, options).then(
            () => {
                console.log('CONVERTED !!!!');
            }
        ).catch((reason: any) => {
            console.log('failed', reason);
        });
        console.log('convert', convert);
    }

    backToHomePage() {
        this.props.backToHomePage();
    }

    setFile(file: string) {
        console.log('SETTING FILE', file);
        this.props.setFile(file);
    }

    render() {
        const otherFile = '/home/sebastien/Videos/Dance/Smoke/smoke_3_3.mp4';
        return (
            <div>
                <Button variant="raised" color="primary" onClick={() => { this.setFile(otherFile); }}>
                    1. Load video
                </Button>
                <Button variant="raised" onClick={() => { this.loadVideoInfo(); }}>
                    2. Get video info
                </Button>
                <Button variant="raised" onClick={() => { this.convertVideo(); }}>
                    3. Convert
                </Button>
                <Button variant="raised" onClick={() => { this.backToHomePage(); }}>
                    4. Back home
                </Button>
                <VideoPreviewConnected />
                <VideoInfoConnected/>
            </div>
        );
    }

}

export const VideoEditorConnected = connect(mapStateToProps, mapDispatchToProps)(VideoEditor);
