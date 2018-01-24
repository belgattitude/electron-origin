import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';

import { reducer as filesReducer, State as FilesState } from '@src/redux/files/index';
import { reducer as mediaReducer, State as MediaState } from '@src/redux/media/index';


interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
    router: RouterState;
    files: FilesState;
    mediaInfo: MediaState;
}

import { RootAction } from '@src/redux/index';
export const rootReducer = combineReducers<RootState, RootAction>({
    router,
    filesReducer,
    mediaReducer,
});
