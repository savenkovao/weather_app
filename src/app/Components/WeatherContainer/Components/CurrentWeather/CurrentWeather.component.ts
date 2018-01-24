import {Component, OnInit, Output, ElementRef, ViewChild, EventEmitter} from '@angular/core';
import { HttpService } from '../../../../Services/Http.service';
import { Weather } from '../../../../Models/weather';
// import { GoogleAutocompleteService } from "../../../../Services/GoogleAutocomplete.service";
import { APP_CONFIG } from "../../../../Models/app_config";

@Component({
    selector: 'current-weather',
    templateUrl: './CurrentWeather.component.html',
    styleUrls: ['./CurrentWeather.component.less'],
    providers: [HttpService]
})

export class CurrentWeatherComponent implements OnInit  {
    public weather: Weather;
    public currentDate: Date;

    @Output() onWeatherChanged = new EventEmitter<Weather>();
    weatherChange(data:Weather){
        this.onWeatherChanged.emit(data);
    };

    constructor (
        private httpService: HttpService
    ){
        this.currentDate = new Date();
    }

    getWeather() {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${APP_CONFIG.position.lat}&lon=${APP_CONFIG.position.lng}&appid=${APP_CONFIG.weatherApiId}&units=metric`;
        this.httpService.getData(url).subscribe(
            (data:Weather) => {
                this.weather = data;
                this.weatherChange(data);
                console.log(data);
            });
    }

    ngOnInit(){}
}