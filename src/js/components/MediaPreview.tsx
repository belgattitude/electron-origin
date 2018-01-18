import React from 'react';

interface Props {
    media: string
}

class MediaPreview extends React.Component<Props, {}> {


    public getGlobalUrl(): typeof URL {
        return window.URL || (window as any).webkitURL;
    }

    public render() {
        //const URL = this.getGlobalUrl();

        /*
        const media: object = {
            pathname: this.props.filename,
            type: 'video/mp4'
        }*/
        //const blob = new Blob(['hello'], { type: 'text/plain' });
        /*
        const filename: object = this.props.filename as any;
        console.log('filename', filename);
        const fileURL = window.URL.createObjectURL(filename);
        */
        const localfile = "file://" + this.props.media;
        /*
        image.onload = function() {
        URL.revokeObjectURL(imageUrl);
        };
         */

        console.log('localfile', localfile);
        return (
            <div>
                <p>{localfile}</p>
                <video controls width="500" src={localfile} />
            </div>
        );
    }
}

export default MediaPreview;