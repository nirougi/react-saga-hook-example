import React from "react";
import { useReactSaga } from "use-react-saga";

import { mainSaga } from "./actions/mainSaga";
import { mainReducer, initialState, Actions as ReducerActions, GlobalState } from "./reducers/mainReducer"
import { Actions as SagaActions } from "./actions/mainSaga";

type Actions = ReducerActions | SagaActions;

interface Store {
  state: GlobalState,
  put: (actions: Actions) => void
}

export const store = React.createContext({
    state: initialState,
    put: (actions: Actions) => {}
});

export const StateProvider: React.FunctionComponent = ({ children }) => {
    const { Provider } = store;
    const [state, dispatch] = React.useReducer(mainReducer, initialState);
    const put: (action: Actions) => void = useReactSaga({ state, dispatch, saga: mainSaga });
    
    return <Provider value={{ state, put }}>{children}</Provider>;
};

export const useGlobalStore = () => React.useContext(store) as Store;
