import * as React from 'react';
import {IMediaInfo} from '@src/redux/media';

export interface SFCVideoInfoProps {
    mediaInfo: IMediaInfo;
}

export const SFCVideoInfo: React.SFC<SFCVideoInfoProps> = (props) => {
    const { mediaInfo } = props;
    const info: string = JSON.stringify(mediaInfo, null, 2);
    return (
        <div>
            <pre style={{color: 'white', backgroundColor: 'black'}}>
                Info: {info}
            </pre>
        </div>
    );
};
