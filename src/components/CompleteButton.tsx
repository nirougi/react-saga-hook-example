import React from "react";
import { Button } from "antd";
import { useGlobalStore } from "../store";

export const CompleteButton: React.FunctionComponent = () => {
    const { state, dispatch } = useGlobalStore();

    return <Button onClick={() => dispatch({ type: "INCREMENT_ASYNC" })} loading={state.loading} disabled={state.count === 100}>
        Complete async
    </Button>;
};