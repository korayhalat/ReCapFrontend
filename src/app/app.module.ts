import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { HttpClientModule } from '@angular/common/http';
import { CardetailComponent } from './components/cardetail/cardetail.component'
import { CarimageComponent } from './components/carimage/carimage.component';
import { BrandFilterPipe} from './pipes/brandfilterpipe'
import { FormsModule } from '@angular/forms';
import { CarDetailFilterPipe } from './pipes/cardetailfilterpipe';
import { ColorFilterPipe } from './pipes/colorfilterpipe';
import { RentaldetailComponent } from './components/rentaldetail/rentaldetail.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    NaviComponent,    
    BrandComponent,
    CardetailComponent,
    CarimageComponent,
    BrandFilterPipe,
    CarDetailFilterPipe,
    ColorFilterPipe,
    RentaldetailComponent,
    
  

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
