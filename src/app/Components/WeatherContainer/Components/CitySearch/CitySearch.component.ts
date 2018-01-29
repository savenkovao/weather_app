import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { GoogleAutocompleteService } from "../../../../Services/GoogleAutocomplete.service";
import { APP_CONFIG } from "../../../../Models/app_config";
import {Weather} from "../../../../Models/weather";

@Component({
    selector: 'city-search',
    templateUrl: './CitySearch.component.html',
    styleUrls: ['./CitySearch.component.less'],
    providers: [GoogleAutocompleteService]
})

export class CitySearchComponent implements OnInit {
    public city: string;
    public inputFocus: boolean = false;

    @ViewChild("search")
    public searchElement: ElementRef;

    @Output() onCityChanged = new EventEmitter<boolean>();
    cityChange(change: boolean){
        this.onCityChanged.emit(change);
    }

    @Input() weather: Weather;

    constructor (
        private googleAutocompleteService: GoogleAutocompleteService
    ){
        this.city = APP_CONFIG.city;
    }

    inputToggle() {
        this.inputFocus = !this.inputFocus;
    }

    searchConfirm(change: boolean) {
        this.cityChange(true);
        this.inputToggle();
    }

    searchEnable() {
        this.inputToggle();
    }

    ngOnInit() {
        this.googleAutocompleteService.init(this.searchElement);
    }
}