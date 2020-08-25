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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.forecast = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const APICONFIG = require("../config/api_settings.json");
    const apiKey = APICONFIG.apiKey;
    const apiMode = 'json';
    try {
        let forecastData = yield axios_1.default.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&mode${apiMode}&units=metric`);
        return forecastData.data;
    }
    catch (err) {
        console.log("it comes an big error: ", err);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlcl9hcGlfY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dlYXRoZXJfYXBpX2Nvbm5lY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUEwQjtBQUViLFFBQUEsUUFBUSxHQUFHLENBQVEsSUFBWSxFQUFHLEVBQUU7SUFHL0MsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFFLDZCQUE2QixDQUFFLENBQUM7SUFDM0QsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUNoQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDdkIsSUFDQTtRQUVFLElBQUksWUFBWSxHQUFHLE1BQU0sZUFBSyxDQUFDLEdBQUcsQ0FBRSxxREFBcUQsSUFBSSxVQUFVLE1BQU0sUUFBUSxPQUFPLGVBQWUsQ0FBRSxDQUFDO1FBRTlJLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztLQUMxQjtJQUNELE9BQVEsR0FBRyxFQUNYO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBRSx5QkFBeUIsRUFBRSxHQUFHLENBQUUsQ0FBQztLQUMvQztBQUNILENBQUMsQ0FBQSxDQUFDIn0=