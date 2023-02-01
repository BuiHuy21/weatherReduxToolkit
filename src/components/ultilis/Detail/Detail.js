import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./Detail.scss";
const Detail = () => {
  const data = useSelector((state) => state?.weathers?.weather?.[0]?.daily);
  const [detail, setDetai] = useState(data?.[0]);
  let crrParam = useParams();

  let pr = crrParam.id ? crrParam.id : 0;

  useEffect(() => {
    setDetai(data?.[pr]);
  }, [pr, data]);

  function mstoTime(duration) {
    let hours = dayjs.unix(duration).hour();
    let minutes = dayjs.unix(duration).minute();
    const ampm = hours >= 12 ? "pm" : "am";
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    const strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
  }
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

  return (
    <div className="detail">
      <h2>{weekday[dayjs.unix(detail?.dt).day()]}</h2>
      <div className="detail-main">
        <div className="detail-left">
          <p>Temp current : {detail?.temp?.day} °C</p>
          <p>
            Temp : {detail?.temp?.min} °C - {detail?.temp?.max} °C
          </p>
          <p>Humidity : {detail?.humidity} %</p>
          <p>
            Wind speed : {Math.round((detail?.wind_speed * 360) / 100)} km/h
          </p>
        </div>
        <div className="detail-right">
          <p>Sunrise : {mstoTime(detail?.sunrise)}</p>
          <p>Sunset : {mstoTime(detail?.sunset)}</p>
          <p>Description : {detail?.weather?.[0].description}</p>
          <p>Atmospheric pressure : {detail?.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
