import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarOperationComponent } from './components/car-operation/car-operation.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarOperationComponent },
  { path: 'cars', component: CarOperationComponent },
  { path: 'colors', component: ColorComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'brands', component: BrandComponent },
  { path: 'cardetails', component: CarDetailComponent },
  { path: 'rentaldetails', component: RentalDetailComponent },
  { path: 'carimages', component: CarImageComponent },
  { path: 'login', component : LoginComponent },
  { path: 'register', component : RegisterComponent},
  { path: 'user/update', component : UserUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
