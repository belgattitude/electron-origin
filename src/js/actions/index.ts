import { MEDIA_LOADED } from '../constants/actionTypes';

export const addMedia = (media: string) => ({ type: MEDIA_LOADED, payload: media });

/*
export class AddMedia {
    readonly type = MEDIA_LOADED;
    constructor(public payload: string) {};
}

export class GetMediaInfo {
    readonly type = GET_MEDIA_INFO;
    constructor(public payload: string) {};
}

export type Actions = AddMedia | GetMediaInfo;

*/
