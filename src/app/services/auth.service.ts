import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user';
import { LocalstorageService } from './localstorage.service';
import { ILogin } from '../models/login';
import { Observable } from 'rxjs';
import { ISingleResponseModel } from '../models/single-response-model';
import { ITokenModel } from '../models/token-models';
import { IRegister } from '../models/register';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  decodedTokenKey: any
  user : IUser;
  apiUrl = environment.apiUrl+'Auth/'

  constructor(
    private http : HttpClient,
    private localStorageService : LocalstorageService,
    private jwtHelper : JwtHelperService
  ) { }
  
  login(login:ILogin):Observable<ISingleResponseModel<ITokenModel>>{
    let newPath = this.apiUrl + 'login';
    return this.http.post<ISingleResponseModel<ITokenModel>>(newPath,login);
  }
  register(register:IRegister):Observable<ISingleResponseModel<ITokenModel>>{
    let newPath = this.apiUrl + 'register';
    return this.http.post<ISingleResponseModel<ITokenModel>>(newPath,register);
  }
  decodedToken(token:any){
    return this.jwtHelper.decodeToken(token);
  }
  isAdmin(){
    let isAdmin = false;
    if(this.loggedIn()){
      this.user.roles.map(role =>{
        if(role.toLocaleLowerCase().indexOf("admin") !== -1){
          isAdmin = true;
        }
      })
    }
    return isAdmin;
  }
  isAuthenticated(){
    if (this.localStorageService.getToken()) {
      return true;
    }
    else{
      return false;
    }
  }
  loggedIn(){
    if(this.localStorageService.getToken()){
      return this.jwtHelper.isTokenExpired();
    }else{
      return false;
    }
  }
  getUser(){
    let decodedToken = this.decodedToken(this.localStorageService.getToken())
    if(decodedToken){
      if(this.loggedIn()){
        let tokenInFonName = Object.keys(decodedToken).filter(x=> x.endsWith('/name'))[0]
        let userName = String(decodedToken[tokenInFonName]);
        
        let tokenInFold = Object.keys(decodedToken).filter(x=> x.endsWith('/nameidentifier'))[0]
        let userId = Number(decodedToken[tokenInFold]);

        let claimInfo = Object.keys(decodedToken).filter(x=> x.endsWith('/role'))[0]
        let roles = decodedToken[claimInfo];

        let emailInfo = decodedToken.email;

        this.user = {
          userId : userId,
          userName:userName,
          email:emailInfo,
          roles:roles
        }
      }
    }
    return this.user;
  }
}
