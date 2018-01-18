import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../../Services/Http.service';
import { Weather } from '../../Models/weather';
import { GoogleAutocompleteService } from "../../Services/GoogleAutocomplete.service";
import { APP_CONFIG } from "../../Models/app_config";

@Component({
    selector: 'current-weather',
    templateUrl: './CurrentWeather.component.html',
    providers: [HttpService , GoogleAutocompleteService]
})

export class CurrentWeatherComponent implements OnInit  {
    public weather: Weather;
    public city: string;

    @ViewChild("search")
    public searchElement: ElementRef;

    constructor (
        private httpService: HttpService,
        private googleAutocompleteService: GoogleAutocompleteService
    ){ }

    getWeather() {
        this.httpService.getData().subscribe((data:Weather) => this.weather = data );
    }

    ngOnInit(){
        if (navigator.geolocation && !location.search) {
            navigator.geolocation.getCurrentPosition(
                (position)=> {
                    APP_CONFIG.position = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    setTimeout(()=>{
                        this.getWeather();
                    },10);

                }, ()=> {
                    setTimeout(()=>{
                        this.getWeather();
                    },10);
                    console.log('Geoposition not found');
                });
        } else {
            setTimeout(()=>{
                this.getWeather();
            },10);
            console.log("Browser doesn't support Geolocation");
        }

        this.googleAutocompleteService.init(this.searchElement);
    }
}