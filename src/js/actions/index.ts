import { MEDIA_LOADED } from "../constants/actionTypes";

export const addMedia = (media: string) => ({ type: MEDIA_LOADED, payload: media });

