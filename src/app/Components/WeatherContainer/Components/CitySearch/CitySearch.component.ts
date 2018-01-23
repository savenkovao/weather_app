import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { GoogleAutocompleteService } from "../../../../Services/GoogleAutocomplete.service";
import { APP_CONFIG } from "../../../../Models/app_config";

@Component({
    selector: 'city-search',
    templateUrl: './CitySearch.component.html',
    styleUrls: ['./CitySearch.component.less'],
    providers: [GoogleAutocompleteService]
})

export class CitySearchComponent implements OnInit {
    public city: string;

    @ViewChild("search")
    public searchElement: ElementRef;

    @Output() onCityChanged = new EventEmitter<boolean>();
    cityChange(change: boolean){
        this.onCityChanged.emit(change);
    }

    constructor (
        private googleAutocompleteService: GoogleAutocompleteService
    ){ }

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position)=> {
                    APP_CONFIG.position = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    setTimeout(()=>{
                        this.cityChange(true);
                    },10);

                }, ()=> {
                    setTimeout(()=>{
                        this.cityChange(true);
                    },10);
                    console.log('Geoposition not found');
                });
        } else {
            setTimeout(()=>{
                this.cityChange(true);
            },10);
            console.log("Browser doesn't support Geolocation");
        }

        this.googleAutocompleteService.init(this.searchElement);
    }
}