"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const axios = require("axios");
let forecastCod;
const forecast = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const APICONFIG = require("../config/api_settings.json");
    const apiKey = APICONFIG.apiKey;
    const apiMode = 'json';
    try {
        let forecast = yield axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&mode${apiMode}&units=metric`);
        forecastCod = forecast.data.cod;
    }
    catch (err) {
        console.log("it comes an big error: ", err);
    }
});
const getForecast = (city) => {
    forecast(city);
    return forecastCod;
};
module.exports.getForecast = getForecast;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlcl9hcGlfY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dlYXRoZXJfYXBpX2Nvbm5lY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFFLE9BQU8sQ0FBRSxDQUFDO0FBRWpDLElBQUksV0FBbUIsQ0FBQztBQUV4QixNQUFNLFFBQVEsR0FBRyxDQUFRLElBQVksRUFBRyxFQUFFO0lBR3hDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBRSw2QkFBNkIsQ0FBRSxDQUFDO0lBQzNELE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDaEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLElBQ0E7UUFFRSxJQUFJLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUUscURBQXFELElBQUksVUFBVSxNQUFNLFFBQVEsT0FBTyxlQUFlLENBQUUsQ0FBQztRQUUxSSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7S0FDakM7SUFDRCxPQUFRLEdBQUcsRUFDWDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUUseUJBQXlCLEVBQUUsR0FBRyxDQUFFLENBQUM7S0FDL0M7QUFHSCxDQUFDLENBQUEsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHLENBQUUsSUFBWSxFQUFHLEVBQUU7SUFFckMsUUFBUSxDQUFFLElBQUksQ0FBRSxDQUFDO0lBQ2pCLE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyJ9