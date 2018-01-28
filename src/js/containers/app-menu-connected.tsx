import { connect } from 'react-redux';

import { RootState } from '@src/redux';
import StyledAppMenu  from './app-menu';
import {withRouter} from 'react-router';

const mapStateToProps = (state: RootState) => ({
    // mediaInfo: state.media.mediaInfo,
});

const mapDispatchToProps = (dispatch: any) => ({
    // dispatch
});
export const StyledAppMenuConnected =
    withRouter(connect(mapStateToProps, mapDispatchToProps)(StyledAppMenu));
