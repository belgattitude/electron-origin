import { MEDIA_LOADED } from "../constants/actionTypes";

const initialState = {
  media: '/home/sebastien/Videos/MVI_0291.m4v'
};

const rootReducer = (state = initialState, action:any) => {
    console.log('ROOTREDUCER CALLED', action.type);

    switch (action.type) {
      case MEDIA_LOADED:
          console.log('REDUCER - MEDIA_LOADED', action.payload);
          let newState = { ...state, media: action.payload };
          console.log('newState', newState);
          return { ...state, media: action.payload };
      default:
          console.log('NOTMEDIALOADED');
          return state;
  }
};

export default rootReducer;