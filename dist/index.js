"use strict";
// TODO Criar forma de coletar argumentos da linha de comando
// TODO Integrar com API do OpenWeather
// TODO Criar resposta de frontend (CLI)
Object.defineProperty(exports, "__esModule", { value: true });
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
require("module-alias/register");
const forecastModule = require("./weather_api_connector");
const forecastData = forecastModule.getForecast("Porto Alegre");
console.log(forecastData);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZEQUE2RDtBQUM3RCx1Q0FBdUM7QUFDdkMsd0NBQXdDOztBQUV4Qzs7Ozs7Ozs7Ozs7Ozs7O0VBZUU7QUFDRixpQ0FBK0I7QUFDL0IsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFFLHlCQUF5QixDQUFFLENBQUM7QUFDNUQsTUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBRSxjQUFjLENBQUUsQ0FBQztBQUVsRSxPQUFPLENBQUMsR0FBRyxDQUFFLFlBQVksQ0FBRSxDQUFDIn0=