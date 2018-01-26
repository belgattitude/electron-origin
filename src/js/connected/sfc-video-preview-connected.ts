import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//import { MediaState } from '@src/redux/media';
import { RootState, Dispatch } from '@src/redux';
import { SFCVideoPreview } from '@src/components';

const mapStateToProps = (state: RootState) => ({
    filename: state.media.filename,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    //onIncrement: countersActions.increment,
}, dispatch);

export const SFCVideoPreviewConnected =
    connect(mapStateToProps, mapDispatchToProps)(SFCVideoPreview);