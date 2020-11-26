import { countReducer, CountActions } from "./countReducer"
import { loadingReducer, LoadingActions } from "./loadingReducer"
import { initiatedReducer, InitiatedActions } from "./initiatedReducer"
import { logReducer } from "./logReducer"

export interface GlobalState {
    initiated: boolean;
    loading: boolean;
    count: number;
    log: Log[];
}

interface Log {
    date: Date;
    action: string;
}

export const initialState: GlobalState = {
    initiated: false,
    loading: false,
    count: 0,
    log: []
}

export const mainReducer = (state: GlobalState, action: Actions): GlobalState => ({
    initiated: initiatedReducer(state, action),
    loading: loadingReducer(state, action),
    count: countReducer(state, action),
    log: logReducer(state, action),
})

export interface SimpleAction<ActionType> {
    type: ActionType;
}

export interface PayloadedAction<ActionType, PayloadType> extends SimpleAction<ActionType> {
    payload: PayloadType;
}

export type Actions = CountActions | LoadingActions | InitiatedActions;