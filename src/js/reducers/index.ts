import { MEDIA_LOADED } from '../constants/actionTypes';

type AppState = { media: string };

const initialState: AppState = {
  media: '/home/sebastien/Videos/Dance/Smoke/Smoke_1_3.mp4',
};

const rootReducer = (state = initialState, action: any): AppState => {
    console.log('ROOTREDUCER CALLED', action.type);

    switch (action.type) {
      case MEDIA_LOADED:
          console.log('REDUCER - MEDIA_LOADED', action.payload);
          const newState = { ...state, media: action.payload };
          console.log('newState', newState);
          return { ...state, media: action.payload };
      default:
          console.log('NOTMEDIALOADED');
          return state;
  }
};

export default rootReducer;
