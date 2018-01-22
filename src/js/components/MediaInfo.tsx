import React from 'react';
import {MediaInfoInterface} from '@src/lib/FFProbe/MediaInfoInterface';

interface Props {
    file: string;
    mediaInfo: MediaInfoInterface;
}

class MediaInfo extends React.Component<Props, {}> {

    public render() {

        const mediaInfo = this.props.mediaInfo;

        const info = JSON.stringify(mediaInfo);

        return (
            <div>
                <p>{info}</p>
            </div>
        );
    }
}

export default MediaInfo;
