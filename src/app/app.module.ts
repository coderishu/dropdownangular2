import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {DataComponent}from './data.component';
import { RouterModule, Routes } from '@angular/router';
import { MyHttpService } from './data.service';
import {HttpModule} from '@angular/http';
import {MyResponse} from './myResponse.component';
import {Login} from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'first/:id', component:MyResponse },
];

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    MyResponse,  
    Login,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ MyHttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
