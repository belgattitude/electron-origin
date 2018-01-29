import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState, Dispatch } from '@src/redux';
import { VideoInfo } from '@src/components';

const mapStateToProps = (state: RootState) => ({
    mediaInfo: state.media.mediaInfo,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch);

export const VideoInfoConnected =
    connect(mapStateToProps, mapDispatchToProps)(VideoInfo);
