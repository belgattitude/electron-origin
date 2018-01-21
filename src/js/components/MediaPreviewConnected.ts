import { connect } from 'react-redux';
import MediaPreview from './MediaPreview';

const mapStateToProps = (state: any) => {
    return { media: state.media };
};

const ConnectedMediaPreview = connect(mapStateToProps)(MediaPreview as any);
export default ConnectedMediaPreview;
