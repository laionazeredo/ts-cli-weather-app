// TODO Criar forma de coletar argumentos da linha de comando
// TODO Integrar com API do OpenWeather
// TODO Criar resposta de frontend (CLI)

/*
Planejamento:

Entidades:
-- Previsão do Tempo - uma classe que concentra a previsão de uma cidade para os x dias seguintes

Casos de uso:
-- Gerar previsão - instancia o objeto previão e retorna para o controler

Adaptador de interface:
-- Controller Gerador de previsão - recebe a request do CLI e chama o método gerar previsão para gerar uma nova previsão

Frameworks e Drivers
-- Conexão com a API OpenWeather
-- Presenter CLI
*/
import 'module-alias/register';
import { forecast } from "./weather_api_connector";
import { ForecastInterface } from "./interfaces";


let forecastData: ForecastInterface;


( async function getforecast ( forecastFunction: any )
{
  try
  {
    let response = await forecastFunction( 'Porto Alegre' );
    forecastData = response.city;
    console.log( "city name:", forecastData );
  } catch ( err )
  {
    console.log( "error: ", err );
  }
} )( forecast );





