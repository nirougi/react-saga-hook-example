import React from "react";
import { Button } from "antd";
import { useGlobalStore } from "../store";

export const CompleteButton: React.FunctionComponent = () => {
    const { state, put } = useGlobalStore();

    return <Button onClick={() => put({ type: "INCREMENT_ASYNC" })} loading={state.loading} disabled={state.count === 100}>
        Complete async
    </Button>;
};