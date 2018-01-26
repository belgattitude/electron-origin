import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';

import { filesReducer, FilesState } from '@src/redux/files';
import { mediaReducer, MediaState } from '@src/redux/media';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
    router: RouterState;
    files: FilesState;
    media: MediaState;
}

import { RootAction } from '@src/redux';
export const rootReducer = combineReducers<RootState, RootAction>({
    router: routerReducer,
    files: filesReducer,
    media: mediaReducer,
});

