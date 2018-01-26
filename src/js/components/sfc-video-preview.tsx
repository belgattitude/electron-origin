import * as React from 'react';

export interface SFCVideoPreviewProps {
    filename: string;
}

export const SFCVideoPreview: React.SFC<SFCVideoPreviewProps> = (props) => {
    const { filename } = props;
    const localfile: string = 'file://' + filename;
    return (
        <div>
            <p>{localfile}</p>
            <video controls={true} width="500" src={localfile} />
        </div>
    );
};
