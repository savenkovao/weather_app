import { APP_CONFIG } from "./Models/app_config";
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent }   from './app.component';
import { HttpClientModule }   from '@angular/common/http';
import { CurrentWeatherComponent } from "./Components/WeatherContainer/Components/CurrentWeather/CurrentWeather.component";
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { ForecastComponent } from "./Components/WeatherContainer/Components/Forecast/Forecast.component";
import {WeatherContainerComponent} from "./Components/WeatherContainer/Components/WeatherContainer.component";
import {CitySearchComponent} from "./Components/WeatherContainer/Components/CitySearch/CitySearch.component";

@NgModule({
    imports:      [
        AgmCoreModule.forRoot({
            apiKey: APP_CONFIG.gaApiKey,
            libraries: ['places']
        }),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    declarations: [
        AppComponent,
        CitySearchComponent,
        WeatherContainerComponent,
        CurrentWeatherComponent,
        ForecastComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }