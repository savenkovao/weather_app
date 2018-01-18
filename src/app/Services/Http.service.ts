import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { APP_CONFIG } from '../Models/app_config';

@Injectable()
export class HttpService {
    constructor (private http: HttpClient) { }

    getData() {
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${APP_CONFIG.position.lat}&lon=${APP_CONFIG.position.lng}&appid=${APP_CONFIG.weatherApiId}`);
    }
}