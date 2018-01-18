import { MEDIA_LOADED } from "../constants/actionTypes";

//export const addMedia = (media: any) => ({ type: MEDIA_LOADED, payload: media });

export const addMedia = (media: any) => {
    console.log('ADDMEDIACALLED');
    return {type: MEDIA_LOADED, payload: media}
};