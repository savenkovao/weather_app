import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { APP_CONFIG } from '../Models/app_config';

@Injectable()
export class HttpService {
    constructor (private http: HttpClient) { }

    getData(url: string) {
        return this.http.get(url);
    }
}