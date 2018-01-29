import { Component, OnInit } from '@angular/core';
import {Forecast} from "../../../../Models/forecast";
import { HttpService } from "../../../../Services/Http.service";
import {APP_CONFIG} from "../../../../Models/app_config";

@Component({
    selector: 'forecast',
    templateUrl: './Forecast.component.html',
    providers: [HttpService]
})

export class ForecastComponent implements OnInit {
    public forecast: Forecast;

    constructor(
        private httpService: HttpService
    ) { }

    getForecast(){
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${APP_CONFIG.position.lat}&lon=${APP_CONFIG.position.lng}&appid=${APP_CONFIG.weatherApiId}&units=metric`;
        this.httpService.getData(url).subscribe((data:Forecast) => {
            /*this.forecast = data*/
            console.log(data);

            for (let num of data.list) {
                console.log(num);
            }
        } );
    }

    ngOnInit() {

    }
}

