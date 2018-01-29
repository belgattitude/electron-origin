import * as React from 'react';

export interface SFCVideoPreviewProps {
    filename: string;
}

export const VideoPreview: React.SFC<SFCVideoPreviewProps> = (props) => {
    const { filename } = props;
    const localFile: string = 'file://' + filename;
    const itemStyle = {
        minWidth: '50%',
    };
    const videoStyle = {
        width: '100%',
    };
    return (
        <div>
            <p>{localFile}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', border: '1px solid black'}}>
                <div style={itemStyle}>
                    <video controls={true} style={videoStyle} src={localFile} />
                </div>
                <div style={itemStyle}>
                    <video controls={true} style={videoStyle} src={localFile} />
                </div>
                <div style={itemStyle}>
                    <video controls={true} style={videoStyle} src={localFile} />
                </div>
            </div>
        </div>
    );
};
