import React from 'react';

interface Props {
    media: string;
}

class MediaInfo extends React.Component<Props, {}> {

    public render() {
        return (
            <div>
                <p>{this.props.media}</p>
            </div>
        );
    }
}

export default MediaInfo;
