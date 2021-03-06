import React from "react";
import { useGlobalStore } from "../store";
import { CompleteButton } from "./CompleteButton";
import { Button, Progress, Spin, Timeline } from "antd";
import { PlusOutlined, MinusOutlined, CaretRightOutlined } from "@ant-design/icons"
import "../styles/App.css";

const App: React.FunctionComponent = () => {
  const { state, dispatch } = useGlobalStore();

  React.useEffect(() => {
    dispatch({ type: "APP_START" });
  }, [dispatch]);
  
  return (
    <div className="container">
      {!state.initiated && <main><Spin size="large" /></main>}

      {state.initiated && <>
        <main>
          <Progress type="circle" percent={state.count} />

          <div className="buttons-container">
              <CompleteButton />
              <br />
              <Button onClick={() => dispatch({ type: "COUNT_DECREASE" })} icon={<MinusOutlined />}>Decrease</Button>
              <Button onClick={() => dispatch({ type: "COUNT_INCREMENT" })} icon={<PlusOutlined />}>Increment</Button>
              <br />
              <Button onClick={() => dispatch({ type: "APP_START" })}>Reset</Button>
              <Button onClick={() => dispatch({ type: "COUNT_RESET" })}>Set to 0</Button>
              <Button onClick={() => dispatch({ type: "COUNT_SET", payload: 50 })}>Set to 50</Button>
          </div>
        </main>

        <Timeline mode="left" reverse={true}>
          {state.log.map(log => <Timeline.Item>{formatDate(log.date)} <CaretRightOutlined /> {formatLog(log.action)}</Timeline.Item>)}
        </Timeline>
      </>}
    </div>
  );
};

export default App;

const formatNumber = (number: number): number | string => number < 10 ? `0${number}` : number;
const formatDate = (date: Date): string => `${formatNumber(date.getMinutes())}:${formatNumber(date.getSeconds())}`;
const formatLog = (log: string): string => log.replace(/{/g, "{ ").replace(/}/g, " }").replace(/:/g, " : ").replace(/,/g, " , ");