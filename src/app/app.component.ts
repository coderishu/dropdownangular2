import { Component } from '@angular/core';
import {DataComponent} from './data.component';
import { ActivatedRoute } from '@angular/router';
import { slideInDownAnimation } from './animation';
import {MyservicesService} from './myservices.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnInit } from '@angular/core';
import {Login} from './login.component';
import {MyResponse} from './myResponse.component';

@Component({
  moduleId:'id',
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  providers:[MyservicesService],
})
export class AppComponent{
  // private dataUrl = 'assets/JsondataApi/getdataReport.json';  // URL to web api
  testResponse: any;
  constructor(private myHttp: MyservicesService) { }
}
