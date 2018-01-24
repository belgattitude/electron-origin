import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';
import { RootAction } from '@src/redux';

import { mediaActions, IMediaInfo } from './';

export type State = {
    readonly mediaInfo: IMediaInfo;
};

const emptyMediaInfo = <IMediaInfo>{
    filename: '',
    size: 0,
    duration: 0,
    frames: 0,
};

export const reducer = combineReducers<State, RootAction>({
    mediaInfo: (state = emptyMediaInfo, action) => {
        switch (action.type) {
            case getType(mediaActions.setMediaInfo):
                return action.payload;
            default:
                return state;
        }
    },
});
