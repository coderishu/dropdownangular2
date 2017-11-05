import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'; 

    @Injectable()
    export class MyHttpService {
    constructor(private _http:Http) {}

    getDataObservable(url:string) 
    {
        return this._http.get(url)
            .map(data => {
                data.json();
                console.log("I CAN SEE DATA HERE: ", data.json());
                return data.json();
        });
    }
}