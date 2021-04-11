import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastrModule} from "ngx-toastr";
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext'
import {TabViewModule} from 'primeng/tabview';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import {GalleriaModule} from 'primeng/galleria';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';

import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { CarDetailFilterPipe } from './pipes/car-detail-filter.pipe';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMenuTopComponent } from './app.menutop.component';
import { CarOperationComponent } from './components/car-operation/car-operation.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

export function tokenGetter(){
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    CarDetailFilterPipe,
    BrandComponent,
    CarDetailComponent,
    CarImageComponent,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    RentalDetailComponent,
    AppMenuTopComponent,
    CarOperationComponent,
    LoginComponent,
    RegisterComponent,
    UserUpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MenubarModule,
    TableModule,
    MultiSelectModule,
    InputTextModule,
    TabViewModule,
    DividerModule,
    CardModule,
    GalleriaModule,
    DialogModule,
    CalendarModule,
    StepsModule,
    ToastModule,
    PanelModule,
    MenuModule,  
    ToastrModule.forRoot({
      positionClass :"toast-bottom-right"
    }),    
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["http://localhost:4200"]
      },
    }),
    
    // CdkVirtualScrollViewport
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
