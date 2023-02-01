import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Detail from "../../components/ultilis/Detail/Detail";
import Itemweek from "../../components/ultilis/Itemweek/Itemweek";
import "./week.scss";
const Week = () => {
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const weather = useSelector((state) => state?.weathers.weather?.[0]?.daily);
  const getDay = (agm) => {
    return weekday[dayjs.unix(weather?.[agm]?.dt).day()];
  };
  const getDate = (agm) => {
    return [dayjs.unix(weather?.[agm]?.dt).date()];
  };
  const getMonth = (agm) => {
    return [dayjs.unix(weather?.[agm]?.dt).month() + 1];
  };
  return (
    <>
      <div className="week-content">
        <div className="week-container">
          <NavLink to="/week/0">
            <Itemweek
              day={getDate(0)}
              month={getMonth(0)}
              title={getDay(0)}
              min={weather?.[0]?.temp?.min}
              max={weather?.[0]?.temp?.max}
              img={weather?.[0]?.weather?.[0].icon}
            />
          </NavLink>
          <NavLink to="/week/1">
            <Itemweek
              day={getDate(1)}
              month={getMonth(1)}
              title={getDay(1)}
              min={weather?.[1]?.temp?.min}
              max={weather?.[1]?.temp?.max}
              img={weather?.[1]?.weather?.[0].icon}
            />
          </NavLink>
          <NavLink to="/week/2">
            <Itemweek
              day={getDate(2)}
              month={getMonth(2)}
              title={getDay(2)}
              min={weather?.[2]?.temp?.min}
              max={weather?.[2]?.temp?.max}
              img={weather?.[2]?.weather?.[0].icon}
            />
          </NavLink>
          <NavLink to="/week/3">
            <Itemweek
              day={getDate(3)}
              month={getMonth(3)}
              title={getDay(3)}
              min={weather?.[3]?.temp?.min}
              max={weather?.[3]?.temp?.max}
              img={weather?.[3]?.weather?.[0].icon}
            />
          </NavLink>
          <NavLink to="/week/4">
            <Itemweek
              day={getDate(4)}
              month={getMonth(4)}
              title={getDay(4)}
              min={weather?.[4]?.temp?.min}
              max={weather?.[4]?.temp?.max}
              img={weather?.[4]?.weather?.[0].icon}
            />
          </NavLink>
          <NavLink to="/week/5">
            <Itemweek
              day={getDate(5)}
              month={getMonth(5)}
              title={getDay(5)}
              min={weather?.[5]?.temp?.min}
              max={weather?.[5]?.temp?.max}
              img={weather?.[5]?.weather?.[0].icon}
            />
          </NavLink>
          <NavLink to="/week/6">
            <Itemweek
              day={getDate(6)}
              month={getMonth(6)}
              title={getDay(6)}
              min={weather?.[6]?.temp?.min}
              max={weather?.[6]?.temp?.max}
              img={weather?.[6]?.weather?.[0].icon}
            />
          </NavLink>
          <NavLink to="/week/7">
            <Itemweek
              day={getDate(7)}
              month={getMonth(7)}
              title={getDay(7)}
              min={weather?.[7]?.temp?.min}
              max={weather?.[7]?.temp?.max}
              img={weather?.[7]?.weather?.[0].icon}
            />
          </NavLink>
        </div>
      </div>
      <Detail />
    </>
  );
};

export default Week;
