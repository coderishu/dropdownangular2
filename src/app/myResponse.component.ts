import { Component,OnInit,Input, Inject,HostBinding  } from '@angular/core';
import { MyservicesService } from './myservices.service';
import { slideInDownAnimation } from './animation';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import { FormGroup,FormControl,FormBuilder,} from "@angular/forms";
import {Subscription} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'response',
  providers:[MyservicesService],
  templateUrl:'./myResponse.component.html',
  animations: [ slideInDownAnimation ],
})
export class MyResponse implements OnInit 
{
  private id: number;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  paramValueStr:string;
  public subscription:Subscription;

  constructor(private myHttp:MyservicesService,public route:ActivatedRoute){}

//first service call

    private dataUrl = 'http://125.20.39.39:8081/bharti-infratel-mas-vp/dashboard/getTaskList/502080';
    private Url = 'assets/JsondataApi/getAssetObservable.json';
    testResponse: any;
    assetResponse:any;

    tableData = {};
    arrayObject = [];
    arrayObject1=[];
    arrayObject2=[];
    arrayObject3=[];
    arrayObject4=[];
    arrayObject5=[];
   arrayObject6=[];
   arrayObject7=[];

    ngOnInit(): any
     {
      this.subscription = this.route.params.subscribe(
        (params: any) => 
        {
          this.id = params['id']; //Getting the UID from the URL
          console.log(this.id);
        }
      );
      this.myHttp.getDataObservable(this.dataUrl).subscribe
      ( data =>
      {
      console.log();
        this.arrayObject = data.wrappedList[0].pavTaskList[0].pavOpenTaskList; 
        this.arrayObject1 = data.wrappedList[0].siteAuditTaskList;
        this.arrayObject2=this.arrayObject.concat(this.arrayObject1);
        this.arrayObject3=data.wrappedList[0].pavTaskList[0].pavOpenTaskList[0].assetCategoryList;
        this.arrayObject4=data.wrappedList[0].siteAuditTaskList[0].assetCategoryList;
       this.arrayObject5=String(this.arrayObject3.concat(this.arrayObject4)).split(",");
       this.arrayObject7=data.wrappedList[0].pavTaskList[0].pavOpenTaskList[5].infratelSiteId;

   if(data.wrappedList[0].pavTaskList[0].pavOpenTaskList[0].assetCategoryList.includes('TSHL')
    &&
   data.wrappedList[0].pavTaskList[0].pavOpenTaskList[5].infratelSiteId.includes('ORGT10227'))
         {
           this.myHttp.getAsset(this.Url).subscribe
           ( data =>
           {
             
             this.arrayObject6 = data.wrappedList[0].bilSiteAssetDTO;
             if(data.responseCode==="100000"){}
             else
             {
               console.log("outside of if");
             }
             this.assetResponse = data;
           });
         }
         else{
           console.log("error!!");
         }

        if(data.responseCode==="100000"){}
        else
        {
          console.log("outside of if");
        }
        this.testResponse = data;
        // this.myCar = data.cars;
         console.log("I CAN SEE DATA HERE: ", this.testResponse);
        //  console.log(this.myCar);
     });
     console.log();
    }
selectedCity = this.arrayObject5;
onChange(asset,arrayObject2) 
{
  this.arrayObject2;
  console.log(this.arrayObject2);
  // if(this.arrayObject2[5].assetCategoryList.includes('TSHL') && this.arrayObject2[5].infratelSiteId.includes('ORGT10227'))
  // {
   
  //   alert("finally you go this");
  // }
  // else{
  // alert("lost match");
  // }
 
}
  }