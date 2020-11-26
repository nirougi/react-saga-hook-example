import { Actions, SimpleAction, GlobalState } from "./mainReducer";

type LoadingStartAction = SimpleAction<"LOADING_START">;
type LoadingFinishAction = SimpleAction<"LOADING_FINISH">;

export type LoadingActions = LoadingStartAction | LoadingFinishAction;

export const loadingReducer = (state: GlobalState, action: Actions): GlobalState["loading"] => {
    const loading = state.loading;
    switch (action.type) {
        case "LOADING_START":
            return true;

        case "LOADING_FINISH":
            return false;

        default:
            return loading;
    }
}