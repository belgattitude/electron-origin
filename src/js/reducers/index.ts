import { MEDIA_LOADED } from "../constants/actionTypes";

const initialState = {
  media: 'H'
};

const rootReducer = (state = initialState, action:any) => {
  switch (action.type) {
      case MEDIA_LOADED:
          console.log('MEDIA_LOADED', action.payload);
          return { media: action.payload };
      default:
          console.log('NOTMEDIALOADED');
          return state;
  }
};

export default rootReducer;