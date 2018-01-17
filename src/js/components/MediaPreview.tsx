import React from 'react';

interface Props {
    filename: string
}

class MediaPreview extends React.Component<Props, {}> {

    render() {
        return (
            <div>
                {this.props.filename}
            </div>
        );
    }
}

export default MediaPreview;