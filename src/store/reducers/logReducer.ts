import { Actions, GlobalState } from "./mainReducer";

export const logReducer = (state: GlobalState, action: Actions): GlobalState["log"] => {
    return [
        ...state.log,
        { date: new Date(), action: JSON.stringify(action) },
    ];
}