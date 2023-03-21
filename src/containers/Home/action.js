import {
    GET_LIST_SONG,
    GET_LIST_SONG_FAILED,
    GET_LIST_SONG_SUCCESS,
    SONG_PLAY,
} from '~/constants';

const getListSong = (payload) => {
    return {
        type: GET_LIST_SONG,
        payload,
    };
};
const getListSongSuccess = (payload) => {
    return {
        type: GET_LIST_SONG_SUCCESS,
        payload,
    };
};
const getListSongFailed = (payload) => {
    return {
        type: GET_LIST_SONG_FAILED,
        payload,
    };
};
const songPlay = (payload) => {
    return { type: SONG_PLAY, payload };
};

export { getListSong, getListSongSuccess, getListSongFailed, songPlay };
