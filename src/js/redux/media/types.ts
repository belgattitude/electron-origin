import {MediaInfoInterface} from '@src/lib/FFProbe/MediaInfoInterface';

export const SET_FILE = '@@media/SET_FILE';
export const SET_MEDIA_INFO = '@@media/SET_MEDIA_INFO';
export const CONVERT_MEDIA = '@@media/CONVERT_MEDIA';

export type IMediaInfo = {
    filename: string;
    size: number;
    duration: number;
    frames: number;
    ffprobe: MediaInfoInterface;
};
