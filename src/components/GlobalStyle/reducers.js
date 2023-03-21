import {
    LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    SIGNUP,
    SIGNUP_FAILED,
    SIGNUP_SUCCESS,
    SONG_PLAY,
} from '~/constants';
const initState = {
    isLoading: false,
    isLogin: true,
    user: {},
    toast: {
        title: '',
        message: '',
        type: '',
        isShow: false,
    },
    song: {},
    isPlay: false,
};
const globalReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SONG_PLAY: {
            return { ...state, song: payload ,isPlay: true};
        }
        case LOGIN: {
            return { ...state, isLoading: true };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: payload[0],
                isLogin: true,
                toast: {
                    title: 'Thanh cong',
                    message: 'ban da dang nhap thanh cong',
                    type: 'success',
                    isShow: true,
                },
            };
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                isLoading: false,
                isLogin: false,
                toast: {
                    title: 'That bai',
                    message: payload,
                    type: 'error',
                    isShow: true,
                },
            };
        }
        case SIGNUP: {
            return { ...state, isLoading: true };
        }
        case SIGNUP_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: payload[0],
                isLogin: true,
                toast: {
                    title: 'Thanh cong',
                    message: 'ban da dang ki thanh cong',
                    type: 'success',
                    isShow: true,
                },
            };
        }
        case SIGNUP_FAILED: {
            return {
                ...state,
                isLoading: false,
                isLogin: false,
                toast: {
                    title: 'That bai',
                    message: payload,
                    type: 'error',
                    isShow: true,
                },
            };
        }
        default:
            return { ...state };
    }
};
export default globalReducer;
