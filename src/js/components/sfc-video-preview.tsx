import * as React from 'react';

export interface SFCVideoPreviewProps {
    filename: string;
}

export const SFCVideoPreview: React.SFC<SFCVideoPreviewProps> = (props) => {
    const { filename } = props;
    const localFile: string = 'file://' + filename;
    return (
        <div>
            <p>{localFile}</p>
            <video controls={true} width="500" src={localFile} />
            <video controls={true} width="500" src={localFile} />
        </div>
    );
};
