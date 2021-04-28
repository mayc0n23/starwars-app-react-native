import { call, put } from 'redux-saga/effects';
import PlanetsService from '../service/service';

export default function* planetsSaga() {
    try {
        const planetsStarWars = yield call(PlanetsService.planets);
        yield put({type: 'UPDATE_PLANETS', payload: planetsStarWars});
    } catch (error) {
        yield put({type: 'FAIL', payload: error});
    }
}