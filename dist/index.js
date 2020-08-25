"use strict";
// TODO Criar forma de coletar argumentos da linha de comando
// TODO Integrar com API do OpenWeather
// TODO Criar resposta de frontend (CLI)
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const weather_api_connector_1 = require("./weather_api_connector");
let forecastData;
(function getforecast(forecastFunction) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield forecastFunction('Porto Alegre');
            forecastData = response.city;
            console.log("city name:", forecastData);
        }
        catch (err) {
            console.log("error: ", err);
        }
    });
})(weather_api_connector_1.forecast);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZEQUE2RDtBQUM3RCx1Q0FBdUM7QUFDdkMsd0NBQXdDOzs7Ozs7Ozs7OztBQUV4Qzs7Ozs7Ozs7Ozs7Ozs7O0VBZUU7QUFDRixpQ0FBK0I7QUFDL0IsbUVBQW1EO0FBSW5ELElBQUksWUFBK0IsQ0FBQztBQUdwQyxDQUFFLFNBQWUsV0FBVyxDQUFHLGdCQUFxQjs7UUFFbEQsSUFDQTtZQUNFLElBQUksUUFBUSxHQUFHLE1BQU0sZ0JBQWdCLENBQUUsY0FBYyxDQUFFLENBQUM7WUFDeEQsWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBRSxZQUFZLEVBQUUsWUFBWSxDQUFFLENBQUM7U0FDM0M7UUFBQyxPQUFRLEdBQUcsRUFDYjtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztDQUFBLENBQUUsQ0FBRSxnQ0FBUSxDQUFFLENBQUMifQ==