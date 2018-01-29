import { Component, OnInit, ViewChild} from '@angular/core';
import { APP_CONFIG } from "../../../Models/app_config";
import {CurrentWeatherComponent} from "./CurrentWeather/CurrentWeather.component";
import {ForecastComponent} from "./Forecast/Forecast.component";
import { Weather } from '../../../Models/weather';
import { MapsAPILoader } from "@agm/core";

@Component({
    selector: 'weather-cont',
    templateUrl: './WeatherContainer.component.html',
    styleUrls: ['./WeatherContainer.component.less']
})

export class WeatherContainerComponent implements OnInit  {
    public city: string;
    public weather: Weather;

    @ViewChild(CurrentWeatherComponent) currentWeatherComponent:CurrentWeatherComponent;
    @ViewChild(ForecastComponent) forecastComponent:ForecastComponent;

    constructor (
        private mapsAPILoader: MapsAPILoader,
    ){ }

    onCityChange(change: string) {
        this.update();
    }

    onWeatherChange(weather: Weather) {
        this.weather = weather;
    }

    update(){
        this.currentWeatherComponent.getWeather();
        this.forecastComponent.getForecast();
        this._saveDataLocaly();
    }


    _saveDataLocaly(){
        window.localStorage.APP_CONFIG_lat = APP_CONFIG.position.lat;
        window.localStorage.APP_CONFIG_lng = APP_CONFIG.position.lng;
        window.localStorage.APP_CONFIG_city = APP_CONFIG.city;
    }

    ngOnInit(){

        this.mapsAPILoader.load().then(() => {
            let Google = google;
            let geocoder = new Google.maps.Geocoder();

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position)=> {
                        APP_CONFIG.position = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };

                        geocoder.geocode({'location': APP_CONFIG.position}, (results, status) => {
                            if (status === Google.maps.GeocoderStatus.OK) {
                                if (results[2]) {
                                    console.log(results);
                                    let address = results[2].formatted_address;
                                    APP_CONFIG.city = address;

                                    this.update();
                                } else {
                                    console.log('No results found');
                                }
                            } else {
                                console.log('Geocoder failed due to: ' + status);
                            }
                        });

                    }, ()=> {
                        this.update();
                        console.log('Geoposition not found');
                    });
            } else {
                this.update();
                console.log("Browser doesn't support Geolocation");
            }



        });





    }
}