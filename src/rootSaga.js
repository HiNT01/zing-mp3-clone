import { all, takeEvery } from 'redux-saga/effects';
import { getListSongSaga } from './containers/Home/saga';
import { GET_LIST_SONG, LOGIN, SIGNUP } from '~/constants';
import { loginSaga, signupSaga } from './components/GlobalStyle/saga';
export default function* rootSaga() {
    yield all([
        takeEvery(GET_LIST_SONG, getListSongSaga),
        takeEvery(LOGIN, loginSaga),
        takeEvery(SIGNUP, signupSaga),
        // takeEvery(DELETE_SONG, handleDeleteSong),
        // takeEvery(POST_SONG, handlePostSong),
        // takeEvery(UPDATE_SONG, handleUpdateSong),
    ]);
}
