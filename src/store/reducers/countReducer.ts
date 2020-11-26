import { Actions, SimpleAction, PayloadedAction, GlobalState } from "./mainReducer";

type CountIncrementAction = SimpleAction<"COUNT_INCREMENT">;
type CountDecreaseAction = SimpleAction<"COUNT_DECREASE">;
type CountResetAction = SimpleAction<"COUNT_RESET">;
type CountSetAction = PayloadedAction<"COUNT_SET", number>;

export type CountActions = CountIncrementAction | CountDecreaseAction | CountSetAction | CountResetAction;

const minValue = 0;
const maxValue = 100;

export const countReducer = (state: GlobalState, action: Actions): GlobalState["count"] => {
    console.log(action);
    
    const count = state.count;
    switch (action.type) {
        case "COUNT_INCREMENT":
            return count < maxValue ? count + 1 : maxValue;

        case "COUNT_DECREASE":
            return count > minValue ? count - 1 : minValue;

        case "COUNT_RESET":
            return minValue;
        
        case "COUNT_SET":
            return action.payload;

        default:
            return count;
    }
}
