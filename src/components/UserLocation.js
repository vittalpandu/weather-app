import React from 'react'

export default function UserLocation(props) {

    const { temperature, description, location, region, country, wind_speed, pressure, precip, humidity, img } = props.weather;

    return (
        <div className="user-weather">
            <div>
          <div className="location-box">
            <div className="location">{location},{region}, {country}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
            {temperature}<sup>o</sup>C 
            </div>
            <div className="weather">{description}</div>
          </div>
        </div>

            <div className="row">
                <div className="col-md-3 weather-info">
                    <p><b>Wind Speed</b>(km/hr)</p>
                    <h2>{wind_speed}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Preassure</b>(millibar)</p>
                    <h2>{pressure}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Precipitation</b>(mm)</p>
                    <h2>{precip}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Humidity</b>(%)</p>
                    <h2>{humidity}</h2>
                </div>

            </div>
        </div>
    )
}