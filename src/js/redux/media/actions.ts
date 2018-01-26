import { createAction } from 'typesafe-actions';
import {
    SET_FILE, SET_MEDIA_INFO, IMediaInfo
} from './types';

export const setFile = createAction(SET_FILE,
    (filename: string) => ({
        type: SET_FILE,
        payload: filename,
    })
);

export const setMediaInfo = createAction(SET_MEDIA_INFO,
    (mediaInfo: IMediaInfo) => ({
        type: SET_MEDIA_INFO,
        payload: mediaInfo,
    })
);
