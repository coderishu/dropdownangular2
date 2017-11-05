import { Injectable } from '@angular/core';
import {Http,HttpModule,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'; 
@Injectable()
export class MyservicesService 
{
    apiEndPoint="C:\Users\ishu.mishra97\Downloads";
  constructor(private _http:Http) {}

      getDataObservable(url:string) 
      {
          return this._http.get(url)
              .map(data => {
                  data.json();
                  return data.json();
          });
      }

      getAsset(url:string) 
      {
        return this._http.get(url)
        .map(data => {
            data.json();
            return data.json();
    });
  }
  fileUpload(url:string) 
  {
    let formData:FormData = new FormData();
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this._http.post(`${this.apiEndPoint}`, formData, options)
    .map(data => {
        data.json();
        return data.json();
});
}
}
