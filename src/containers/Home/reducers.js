import {
    GET_LIST_SONG,
    GET_LIST_SONG_FAILED,
    GET_LIST_SONG_SUCCESS,
} from '~/constants';
const initState = {
    listSong: [],
    isLoading: false,
};
const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_LIST_SONG: {
            return { ...state, isLoading: true };
        }
        case GET_LIST_SONG_SUCCESS: {
            return { ...state, listSong: action.payload, isLoading: false };
        }
        case GET_LIST_SONG_FAILED: {
            return { ...state, isLoading: false };
        }
        default:
            return state;
    }
};
export default homeReducer;
