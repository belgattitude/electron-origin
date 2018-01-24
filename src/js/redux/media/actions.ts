import { createAction } from 'typesafe-actions';
import {IMediaInfo} from '@src/redux/media/types';

export const mediaActions = {
    setFile: createAction('SET_FILE', (filename: string) => ({
        type: 'SET_FILE',
        payload: filename
    })),
    setMediaInfo: createAction('SET_MEDIA_INFO', (mediaInfo: IMediaInfo) => ({
        type: 'SET_MEDIA_INFO',
        payload: mediaInfo,
    })),
};
