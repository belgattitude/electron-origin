import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState, Dispatch } from '@src/redux';
import { VideoPreview } from '@src/components';

const mapStateToProps = (state: RootState) => ({
    filename: state.media.filename,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    // i.e: onIncrement: countersActions.increment,
}, dispatch);

export const VideoPreviewConnected =
    connect(mapStateToProps, mapDispatchToProps)(VideoPreview);
