import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Dispatch } from '@src/redux';

//import { filesActions } from '@src/redux/files';
import { FilesState } from '@src/redux/files';
import { SFCVideoPreview } from '@src/components';

const mapStateToProps = (state: FilesState) => ({
    filename: state.files[0].filename,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    //onIncrement: countersActions.increment,
}, dispatch);

export const SFCVideoPreviewConnected =
    connect(mapStateToProps, mapDispatchToProps)(SFCVideoPreview);