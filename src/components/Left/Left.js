import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Img from "../../asset/banner.webp";
import useDebounce from "../../hooks/useDebounce";
import { handleFetchWeather } from "../../redux/weatherSlice";
import { formatAMPM } from "../../services/formatAMPM";

const Left = () => {
  const ref = useRef();
  const [search, setSearch] = useState("");
  const query = useDebounce(search ? search : "Hà Nội", 1000);

  const dispatch = useDispatch();
  const weather = useSelector((state) => state);
  useEffect(() => {
    dispatch(handleFetchWeather(query));
  }, [dispatch, query]);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleChang = (e) => {
    setSearch(e.target.value);
  };
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date().getDay()];


  return (
    <div className="left">
      <div className="content">
        <div className="search">
          <input
            ref={ref}
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => handleChang(e)}
          />
        </div>
        <div className="image">
          <img
            style={{ width: "110px", margin: "0 auto" }}
            src={`http://openweathermap.org/img/w/${weather?.weathers?.weather?.[0]?.current?.weather?.[0]?.icon}.png`}
            alt=""
          />
        </div>
        <div className="daily">
          <div className="adrr">{weather?.weathers?.weather?.[1]?.name}</div>
          <div className="tmp">
            {weather?.weathers?.weather?.[0]?.current?.temp} °C
          </div>
          <div className="time">
            {weekday[0].toUpperCase() + weekday.substring(1)},{" "}
            {formatAMPM(new Date())}
          </div>
          <div className="cloud">
            {weather?.weathers?.weather?.[0]?.current?.weather?.[0].description}
          </div>
          <div className="humidirity">
            Clouds {weather?.weathers?.weather?.[0]?.current?.clouds} %
          </div>
        </div>
        <div className="dailyImg">
          <img src={Img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Left;
