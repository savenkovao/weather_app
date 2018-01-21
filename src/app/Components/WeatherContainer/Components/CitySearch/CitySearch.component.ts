import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import {GoogleAutocompleteService} from "../../../../Services/GoogleAutocomplete.service";

@Component({
    selector: 'city-search',
    templateUrl: './CitySearch.component.html',
    providers: [GoogleAutocompleteService]
})

export class CitySearchComponent implements OnInit {
    public city: string;

    @ViewChild("search")
    public searchElement: ElementRef;

    @Output() onCityChanged = new EventEmitter<string>();
    cityChange(city: string){
        this.onCityChanged.emit(city);
    }

    constructor (
        private googleAutocompleteService: GoogleAutocompleteService
    ){ }

    ngOnInit() {
        this.googleAutocompleteService.init(this.searchElement);
    }
}