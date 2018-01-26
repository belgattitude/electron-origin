import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';

import {IMediaInfo} from './types';
import { setFile, setMediaInfo } from './actions';

export type MediaState = {
    readonly filename: string;
    readonly mediaInfo: IMediaInfo;
};


export const mediaReducer = combineReducers<MediaState, MediaAction>({
    filename: (state= '', action) => {
        switch (action.type) {
            case getType(setFile):
                return action.payload;
            default:
                return state;
        }
    },
    mediaInfo: (state = <IMediaInfo>{}, action) => {
        switch (action.type) {
            case getType(setMediaInfo):
                return action.payload;
            default:
                return state;
        }
    },
});

// inferring union type of actions
import { $call } from 'utility-types';
import * as actions from './actions';
const returnsOfActions = Object.values(actions).map($call);
export type MediaAction = typeof returnsOfActions[number];