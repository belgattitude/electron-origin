import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';

import { reducer as files, State as FilesState } from '@src/redux/files/index';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
    router: RouterState;
    files: FilesState;
}

import { RootAction } from '@src/redux/index';
export const rootReducer = combineReducers<RootState, RootAction>({
    router,
    files,
});
