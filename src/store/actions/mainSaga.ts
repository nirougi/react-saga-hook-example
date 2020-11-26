import { takeLatest } from "redux-saga/effects";
import { incrementAsyncSaga, getInitialCountSaga, IncrementAsyncAction, GetInitialCountAction } from "./countSaga"

export type Actions = IncrementAsyncAction | GetInitialCountAction;

export function* mainSaga() {
    yield takeLatest("APP_START", getInitialCountSaga);
    yield takeLatest("INCREMENT_ASYNC", incrementAsyncSaga);
}