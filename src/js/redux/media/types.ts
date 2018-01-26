export const SET_FILE = '@@media/SET_FILE';
export const SET_MEDIA_INFO = '@@media/SET_MEDIA_INFO';

export type IMediaInfo = {
    filename: string;
    size: number;
    duration: number;
    frames: number;
};
