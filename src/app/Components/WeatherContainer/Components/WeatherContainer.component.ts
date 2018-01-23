import { Component, OnInit, ViewChild} from '@angular/core';
import { APP_CONFIG } from "../../../Models/app_config";
import {CurrentWeatherComponent} from "./CurrentWeather/CurrentWeather.component";
import {ForecastComponent} from "./Forecast/Forecast.component";

@Component({
    selector: 'weather-cont',
    templateUrl: './WeatherContainer.component.html',
    styleUrls: ['./WeatherContainer.component.less']
})

export class WeatherContainerComponent implements OnInit  {
    public city: string;

    @ViewChild(CurrentWeatherComponent) currentWeatherComponent:CurrentWeatherComponent;
    @ViewChild(ForecastComponent) forecastComponent:ForecastComponent;

    constructor (){ }

    onCityChange(change: string) {
        this.update();
    }

    update(){
        this.currentWeatherComponent.getWeather();
        this.forecastComponent.getForecast();
    }

    ngOnInit(){
    }
}