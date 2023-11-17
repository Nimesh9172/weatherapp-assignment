import classes from "./Card.module.css";
import {
  SunnyWeather,
  SnowyWeather,
  RainyWeather,
  WindyWeather,
} from "../SvgIcons";

const weatherCast = [
  { icon: <SunnyWeather />, type: "Sunny" },
  { icon: <SnowyWeather />, type: "Snowy" },
  { icon: <RainyWeather />, type: "Rainy" },
  { icon: <WindyWeather />, type: "Windy" },
];

const Card = ({ weatherType }) => {
  return (
    <section className={classes.section}>
      <div className={classes.date}>20 Jan 2023</div>
      <article className={classes.article}>
        <div className={classes.weather}>
          <div>
            {weatherCast.map(
              (weather, index) =>
                weather.type.toLowerCase() === weatherType?.toLowerCase() && (
                  <span key={index}>{weather.icon}</span>
                )
            )}
          </div>
          <h4>Sunny</h4>
        </div>
        <hr />
        <p>23°C / 63°F</p>
        <p>17°C / 43°F</p>
        <p>76%</p>
        <p>06:21 AM</p>
        <p>05:93 PM</p>
      </article>
    </section>
  );
};

export default Card;
