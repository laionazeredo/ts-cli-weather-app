import axios from "axios";

export const forecast = async ( city: string ) =>
{

  const APICONFIG = require( "../config/api_settings.json" );
  const apiKey = APICONFIG.apiKey;
  const apiMode = 'json';
  try
  {

    let forecastData = await axios.get( `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&mode${apiMode}&units=metric` );

    return forecastData.data;
  }
  catch ( err )
  {
    console.log( "it comes an big error: ", err );
  }
};


