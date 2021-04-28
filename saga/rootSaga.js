import { takeLatest, all } from "redux-saga/effects";
import peoplesSaga from './peoplesSaga';
import planetsSaga from './planetsSaga';
import starshipsSaga from './starshipsSaga';

export default function* rootSaga() {
    yield takeLatest('LOAD_PEOPLES', peoplesSaga);
    yield takeLatest('LOAD_PLANETS', planetsSaga);
    yield takeLatest('LOAD_STARSHIPS', starshipsSaga);
}