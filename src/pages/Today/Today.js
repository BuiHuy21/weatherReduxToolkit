import React from "react";
import { useSelector } from "react-redux";
import Visi from "../../asset/Clouds.png";
import Humi from "../../asset/humidity.png";
import Sunrise from "../../asset/sunrise.png";
import Tem from "../../asset/thermometer.png";
import WindGust from "../../asset/sun.png";
import WindStatus from "../../asset/wind.png";
import "./today.scss";
import Item from "../../components/ultilis/Item/Item";
import { mstoTime } from "../../services/MsToTime";

const Today = () => {
  const weather = useSelector((state) => state?.weathers.weather?.[0]?.current);
  return (
    <div className="main-content">
      <div className="container">
        <Item title="UV Index" number={weather?.uvi} img={WindGust} />
        <Item
          title="Wind Status"
          number={`${Math.round(weather?.wind_speed * 360) / 100} Km/h`}
          img={WindStatus}
        />
        <Item
          title="Sunrise "
          number={mstoTime(weather?.sunrise)}
          img={Sunrise}
        />
        <Item title="Humidity" number={`${weather?.humidity} %`} img={Humi} />
        <Item
          title="Visibility"
          number={`${weather?.visibility / 1000} Km`}
          img={Visi}
        />
        <Item title="Pressure" number={weather?.pressure} img={Tem} />
      </div>
    </div>
  );
};

export default Today;
