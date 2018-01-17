import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CONFIG } from './config';

@Injectable()
export class HttpService {
    constructor (private http: HttpClient) { }

    getData(city: string) {
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${CONFIG.weatherApiId}`);
    }
}