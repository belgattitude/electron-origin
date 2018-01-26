// RootActions
import { RouterAction, LocationChangeAction } from 'react-router-redux';
import { $call } from 'utility-types';

import { filesActions } from '@src/redux/files';
import { mediaActions } from '@src/redux/media';

const returnsOfActions = [
    ...Object.values(filesActions),
    ...Object.values(mediaActions),
].map($call);

type AppAction = typeof returnsOfActions[number];
type ReactRouterAction = RouterAction | LocationChangeAction;

export type RootAction =
    | AppAction
    | ReactRouterAction;

