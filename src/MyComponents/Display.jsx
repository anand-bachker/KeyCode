import "./style/style.css";

import React from "react";

export const Display = () => {
  const [day, setDay] = React.useState(false);

  const toggleDay = () => {
    setDay(!day);
  };
  const [data, setData] = React.useState([]);
  document.addEventListener("keydown", (e) => {
    setData([e.key, e.keyCode, e.code]);
  });

  return (
    <>
      <div className="navbar flex flex-row justify-end items-center h-[80px] w-full">
        <button className="modeButtonDay" onClick={toggleDay}>
          {day ? "Night Mode" : "Day Mode"}
        </button>
      </div>
      <div className="Keyblock">
        <div className="keyitem">
          {data[0] ? data[0] : "Press a button"}
        </div>

        <div className="flex flex-row justify-evenly  w-full items-center">
          <div className="w-[200px] h-[240px] bg-slate-400 flex justify-start items-center flex-col">
            <div className=" heading w-[80%] h-[50px] mt-4 flex justify-center items-center">
              <div>Key</div>
            </div>
            <div className="value flex justify-center items-center">
              <div className="text-[60px]">{data[0]}</div>
            </div>
          </div>
          <div className="w-[200px] h-[240px] bg-slate-400 flex justify-start items-center flex-col">
            <div className=" heading w-[80%] h-[50px] mt-4 flex justify-center items-center">
              <div>KeyCode</div>
            </div>
            <div className="value flex justify-center items-center">
              <div className="text-[60px]">{data[1]}</div>
            </div>
          </div>
          <div className="w-[200px] h-[240px] bg-slate-400 flex justify-start items-center flex-col">
            <div className=" heading w-[80%] h-[50px] mt-4 flex justify-center items-center">
              <div>Code</div>
            </div>
            <div className="value flex justify-center items-center">
              <div className="text-[60px]">{data[2]}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
