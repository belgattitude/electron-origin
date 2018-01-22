import { LOAD_FILE, GET_MEDIA_INFO } from '../constants/actionTypes';

type AppState = { media: string };

const initialState: AppState = {
  media: '/home/sebastien/Videos/Dance/Smoke/Smoke_1_3.mp4',
};

const rootReducer = (state = initialState, action: any): AppState => {
    switch (action.type) {
      case LOAD_FILE:
          return { ...state, media: action.payload };
      case GET_MEDIA_INFO:
          return { ...state, media: action.payload };
      default:
          return state;
  }
};

export default rootReducer;
