import React from "react";
import { useReactSaga } from "use-react-saga";

import { mainSaga } from "./actions/mainSaga";
import { mainReducer, initialState, Actions as ReducerActions, GlobalState } from "./reducers/mainReducer"
import { Actions as SagaActions } from "./actions/mainSaga";

type Actions = ReducerActions | SagaActions;

interface Store {
  state: GlobalState,
  dispatch: (actions: Actions) => void
}

export const store = React.createContext({
    state: initialState,
    dispatch: (actions: Actions) => {}
});

export const StateProvider: React.FunctionComponent = ({ children }) => {
    const { Provider } = store;
    const [state, reducerDispatch] = React.useReducer(mainReducer, initialState);
    const dispatch: (action: Actions) => void = useReactSaga({ state, dispatch: reducerDispatch, saga: mainSaga });
    
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useGlobalStore = () => React.useContext(store) as Store;
