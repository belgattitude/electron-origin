import {ADD_FILE, CONVERT_MEDIA, SET_MEDIA_INFO} from '../constants/actionTypes';
import {MediaInfoInterface} from '@src/lib/FFProbe/MediaInfoInterface';
import {ConvertOptionsInterface} from '@src/lib/FFMpeg/ConvertPropsInterface';

export const addFile = (file: string) => ({ type: ADD_FILE, payload: file });

export const setMediaInfo = (info: MediaInfoInterface) => ({type: SET_MEDIA_INFO, payload: info});

export const convertMedia = (srcFile: string, destFile: string, options: ConvertOptionsInterface) => (
        {
            type: CONVERT_MEDIA,
            payload: {
                srcFile: srcFile,
                destFile: destFile,
                options: options,
            },
        }
    );
/*
const fetchMediaInfo = (file: string) => (dispatch: any) => {
    //dispatch(requestPosts(subreddit))
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(getMediaInfo(file, json)))
}
*/
