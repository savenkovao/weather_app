import { Component, OnInit} from '@angular/core';
import { APP_CONFIG } from "../../../Models/app_config";

@Component({
    selector: 'weather-cont',
    templateUrl: './WeatherContainer.component.html',
})

export class WeatherContainerComponent implements OnInit  {
    public city: string;

    constructor (){ }

    onCityChange(city: string) {
        console.log(city)
    }

    ngOnInit(){
    }
}