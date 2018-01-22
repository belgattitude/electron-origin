import { connect } from 'react-redux';
import MediaPreview from './MediaPreview';
import { AppState } from '@src/reducers';

const mapStateToProps = (state: AppState) => {
    return { file: state.file };
};

const ConnectedMediaPreview = connect(mapStateToProps)(MediaPreview as any);
export default ConnectedMediaPreview;
