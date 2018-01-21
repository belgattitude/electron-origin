import { connect } from 'react-redux';
import MediaInfo from './MediaInfo';

const mapStateToProps = (state: any) => {
    return { media: state.media };
};

const MediaInfoConnected = connect(mapStateToProps)(MediaInfo as any);
export default MediaInfoConnected;
