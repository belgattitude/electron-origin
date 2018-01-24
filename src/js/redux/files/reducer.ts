import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';

import { RootAction } from '@src/redux';

import { filesActions, IFile } from './';

export type State = {
    readonly files: IFile[];
};

export const initialState = [];

export const reducer = combineReducers<State, RootAction>({
    files: (state = initialState, action) => {
        switch (action.type) {
            case getType(filesActions.addFile):
                return [...state, {
                    filename: action.payload,
                }];
            default:
                return state;
        }
    },
});
