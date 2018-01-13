import { ADD_MEDIA } from "../constants/actionTypes";

const initialState = {
  medias: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEDIA:
      //return { ...state, articles: state.articles.concat(action.payload) };
      return { ...state, medias: [...state.medias, action.payload] };
    default:
      return state;
  }
};
export default rootReducer;