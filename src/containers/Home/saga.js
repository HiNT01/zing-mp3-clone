import { call, put } from 'redux-saga/effects';
import { getListSongApi } from '~/service';
import { getListSong, getListSongSuccess, getListSongFailed } from './action';
function* getListSongSaga(action) {
    try {
        const reponse = yield call(getListSongApi);
        yield put(getListSongSuccess(reponse.data));
    } catch (err) {
        yield put(getListSongFailed(err));
    }
}
export { getListSongSaga };
