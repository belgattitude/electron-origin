import { ADD_FILE, SET_MEDIA_INFO } from '../constants/actionTypes';
import {MediaInfoInterface} from '@src/lib/FFProbe/MediaInfoInterface';

export const addFile = (file: string) => ({ type: ADD_FILE, payload: file });

export const setMediaInfo = (info: MediaInfoInterface) => ({type: SET_MEDIA_INFO, payload: info});

/*
const fetchMediaInfo = (file: string) => (dispatch: any) => {
    //dispatch(requestPosts(subreddit))
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(getMediaInfo(file, json)))
}
*/
