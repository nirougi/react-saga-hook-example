import { Actions, SimpleAction, GlobalState } from "./mainReducer";

type InitiateAction = SimpleAction<"INITIATED">;

export type InitiatedActions = InitiateAction;

export const initiatedReducer = (state: GlobalState, action: Actions): GlobalState["initiated"] => {
    switch (action.type) {
        case "INITIATED":
            return true;

        default:
            return state.initiated;
    }
}