import { select, put } from "redux-saga/effects";
import { getRadnomFromApi } from "../api";
import { Actions, GlobalState, SimpleAction } from "../reducers/mainReducer";

export type GetInitialCountAction = SimpleAction<"APP_START">;

export function* getInitialCountSaga() {
    const number: number = yield getRadnomFromApi(0, 100);
    yield put<Actions>({ type: "COUNT_SET", payload: number });
    yield put<Actions>({ type: "INITIATED" });
}

export type IncrementAsyncAction = SimpleAction<"INCREMENT_ASYNC">;

export function* incrementAsyncSaga() {
    yield put<Actions>({ type: "LOADING_START" });
    let currentState: GlobalState;
    let newCount: number;
    
    currentState = yield select();
    newCount = currentState.count;
    
    while (newCount < 100) {
        const currentState: GlobalState = yield select();
        const number = yield getRadnomFromApi(0, 100 - currentState.count);
        newCount = currentState.count + number 
        yield put<Actions>({ type: "COUNT_SET", payload: newCount });
    }
  
    yield put<Actions>({ type: "LOADING_FINISH" });
}

