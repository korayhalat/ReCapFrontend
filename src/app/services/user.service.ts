import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseModel } from '../models/response-model';
import { ISingleResponseModel } from '../models/single-response-model';
import { IUser } from '../models/user';
import { IUSerPasswordUpdate } from '../models/user-password-update';
import { IUserUpdate } from '../models/user-update';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<IUser>{


  constructor(protected http : HttpClient) { 
    super(http,'user')
  }
  getUserById(id:any): Observable<ISingleResponseModel<IUserUpdate>>{
    return this.http.get<ISingleResponseModel<IUserUpdate>>(this.apiUrl + 'getbyid=' + id);
  }
  changeUserPassword(userPassword:IUSerPasswordUpdate): Observable<IResponseModel>{
    let newPath = this.apiUrl + "changeuserpassword";
    return this.http.post<IResponseModel>(newPath,userPassword);
  }
}
