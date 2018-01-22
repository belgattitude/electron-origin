import { ADD_FILE, SET_MEDIA_INFO } from '../constants/actionTypes';
import {MediaInfoInterface} from '@src/lib/FFProbe/MediaInfoInterface';

export type AppState = {
    file: string;
    loading: boolean;
    mediaInfo?: MediaInfoInterface;
};

const initialState: AppState = {
    file: '/home/sebastien/Videos/Dance/Smoke/Smoke_1_3.mp4',
    loading: false,
};

const rootReducer = (state = initialState, action: any): AppState => {
    switch (action.type) {
        case ADD_FILE:
            return { ...state, file: action.payload };
        case SET_MEDIA_INFO:
            return { ... state, mediaInfo: action.payload };
      default:
          return state;
  }
};

export default rootReducer;
