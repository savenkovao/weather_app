import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Weather } from './weather';

@Component({
    selector: 'weather-app',
    templateUrl: './app.component.html',
    providers: [HttpService]
})

export class AppComponent implements OnInit  {

    weather: Weather;
    city: string;
    constructor (private httpService: HttpService){
        this.city = 'London'
    }

    getWeather() {
        if(this.city) {
            this.httpService.getData(this.city).subscribe((data:Weather) => this.weather=data);
        }
    }

    ngOnInit(){
        this.getWeather();
    }
}