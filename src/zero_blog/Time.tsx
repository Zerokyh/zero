import { useState } from "react";
import Moment from "react-moment";
import { useInterval } from "react-use";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useInterval(() => {
    setCurrentTime(Date.now());
  }, 1000);

  return <Moment format="a hh:mm">{currentTime}</Moment>;
};

export default Time;
