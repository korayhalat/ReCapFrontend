import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  {path: '',pathMatch:'full',component: CarComponent},
  {path:'cars',component:CarComponent},
  {path:'colors',component:ColorComponent},
  {path:'brands',component:BrandComponent},
  {path:'customers',component:CustomerComponent},
  {path:'cardetails',component:CardetailComponent},
  {path:'carimages',component:CarimageComponent},
  {path: 'cars/brands/:brandId',component: CarComponent},
  {path: 'cars/colors/:colorId',component:ColorComponent},
  {path: 'cars/carimages/:carId',component:CarimageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
