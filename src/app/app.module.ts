import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';

import { MyServices } from './services/myservices';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MyServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
