import { Injectable, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';
import { APP_CONFIG } from "../Models/app_config";


@Injectable()
export class GoogleAutocompleteService {

    constructor (
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone
    ) { }

    init(searchElement:ElementRef) {
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(searchElement.nativeElement, {
                types: ["(cities)"]
            });

            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                    console.log(place);

                    if(place.geometry !== undefined || place.geometry !== null) {
                        console.log(searchElement.nativeElement);
                        searchElement.nativeElement.value = place.formatted_address;
                        APP_CONFIG.position = {
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng()
                        };
                    } else {
                        return
                    }
                });
            });
        });
    }
}