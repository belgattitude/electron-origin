import { connect } from 'react-redux';
import MediaInfo from './MediaInfo';

const mapStateToProps = (state: any) => {
    return {
        file: state.file,
        mediaInfo: state.mediaInfo,
    };
};

const MediaInfoConnected = connect(mapStateToProps)(MediaInfo as any);
export default MediaInfoConnected;
