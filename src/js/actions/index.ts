import { LOAD_FILE, GET_MEDIA_INFO } from '../constants/actionTypes';

export const loadFile = (media: string) => ({ type: LOAD_FILE, payload: media });
export const getMediaInfo = (media: string) => ({ type: GET_MEDIA_INFO, payload: media });

/*
export class AddMedia {
    readonly type = LOAD_FILE;
    constructor(public payload: string) {};
}

export class GetMediaInfo {
    readonly type = GET_MEDIA_INFO;
    constructor(public payload: string) {};
}

export type Actions = AddMedia | GetMediaInfo;

*/
