import {
    SIGNUP,
    SIGNUP_FAILED,
    SIGNUP_SUCCESS,
    LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    PLAY,
    GET_LIST_SONG,
    GET_LIST_SONG_FAILED,
    GET_LIST_SONG_SUCCESS,
    SONG_PLAY,
} from '~/constants';

const login = (payload) => {
    return {
        type: LOGIN,
        payload,
    };
};
const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload,
    };
};
const loginFailed = (payload) => {
    return {
        type: LOGIN_FAILED,
        payload,
    };
};
const signup = (payload) => {
    return {
        type: SIGNUP,
        payload,
    };
};
const signupSuccess = (payload) => {
    return {
        type: SIGNUP_SUCCESS,
        payload,
    };
};
const signupFailed = (payload) => {
    return {
        type: SIGNUP_FAILED,
        payload,
    };
};
// const getListUser = (payload) => {
//     return {
//         type: GET_LIST_USER,
//         payload,
//     };
// };
const isPlay = () => {
    return {
        type: PLAY,
    };
};
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
export {
    login,
    loginSuccess,
    loginFailed,
    signup,
    signupFailed,
    signupSuccess,
    isPlay,
    getListSong,
    getListSongSuccess,
    getListSongFailed,
    songPlay,
};
