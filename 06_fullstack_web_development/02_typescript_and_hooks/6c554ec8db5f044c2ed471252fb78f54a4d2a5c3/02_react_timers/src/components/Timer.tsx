import React from "react";

type TimerProps = {
  timerId: string;
  removeTimer: (createdAt: string) => void;
};

export const Timer: React.FC<TimerProps> = ({ timerId, removeTimer }) => {
  const [time, setTime] = React.useState(0);

  const timerid = setTimeout(() => {
    setTime(time + 1);
  });
  console.log(timerid);

  return (
    <li className="list-group-item d-flex align-items-center  justify-content-between">
      <p className="text-center">{time} seconds</p>
      <div className="btn btn-danger">Delete</div>
    </li>
  );
};
