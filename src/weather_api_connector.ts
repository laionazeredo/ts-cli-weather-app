
const axios = require( "axios" );

let forecastCod: number;

const forecast = async ( city: string ) =>
{

  const APICONFIG = require( "../config/api_settings.json" );
  const apiKey = APICONFIG.apiKey;
  const apiMode = 'json';
  try
  {

    let forecast = await axios.get( `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&mode${apiMode}&units=metric` );

    forecastCod = forecast.data.cod;
  }
  catch ( err )
  {
    console.log( "it comes an big error: ", err );
  }


};

const getForecast = ( city: string ) =>
{
  forecast( city );
  return forecastCod;
};
module.exports.getForecast = getForecast;