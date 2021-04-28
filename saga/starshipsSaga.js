import { call, put } from 'redux-saga/effects';
import StarshipsService from '../service/service';

export default function* starshipsSaga() {
    try {
        const starshipsStarWars = yield call(StarshipsService.starships);
        yield put({type: 'UPDATE_STARSHIPS', payload: starshipsStarWars});
    } catch (error) {
        yield put({type: 'FAIL', payload: error});
    }
}