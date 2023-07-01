import useData from "../hooks/useData";
import { Query } from "../App";

interface Props {
  query: Query;
}

const WeatherCard = ({ query }: Props) => {
  const { data, error } = useData(query);
 
  if (!data) return null;
 
  console.log(query.city);
  const url = data.weather
    ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    : "";

  if(query.city === undefined){
    return;
  } 
 
  if(error){
    return (
        <div className="container">
            <div className="error-container">
                <h2>Enter a valid city , {query.city} is not a valid city name</h2>
            </div>
        </div>
    )
  }

  return (
    <>
      <div className="container">
        <div className="top">
          <div className="location">{data && <p>{data.name}</p>}</div>
          <div className="box">
            <div className="temp">
              {data.main && <h1>{data.main.temp}°C</h1>}
            </div>
          </div>
          <div className="description">
            {data.weather && <p>{data.weather[0].description}</p>}
          </div>
          <div className="description-image">
            {data.weather && <img src={url}></img>}
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            {data.main && <p className="bold">{data.main.temp}°C</p>}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main && <p className="bold">{data.main.humidity}</p>}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind && <p className="bold">{data.wind.speed} MPS</p>}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
