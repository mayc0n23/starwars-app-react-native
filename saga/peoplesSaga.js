import { call, put } from 'redux-saga/effects';
import PeoplesService from '../service/service';

export default function* peoplesSaga() {
    try {
        const peoplesStarWars = yield call(PeoplesService.peoples);
        yield put({type: 'UPDATE_PEOPLES', payload: peoplesStarWars});
    } catch (error) {
        yield put({type: 'FAIL', payload: error});
    }
}
