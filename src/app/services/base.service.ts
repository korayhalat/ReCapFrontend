import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IListResponseModel } from '../models/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  serverUrl:string=environment.apiUrl;
  apiUrl:string="";
  constructor(protected http:HttpClient, protected serviceUrl:string) {
    this.apiUrl = this.serverUrl+serviceUrl+'/';
   }

   addItem(item:T):Observable<IListResponseModel<T>>{
    return this.http.post<IListResponseModel<T>>(this.apiUrl,item);
   }

   getAll():Observable<IListResponseModel<T>>{
     return this.http.get<IListResponseModel<T>>(this.apiUrl+'getall');
   }
   getById(id:any):Observable<IListResponseModel<T>>{
     return this.http.get<IListResponseModel<T>>(this.apiUrl+id);
   }
   delete(item:T): Observable<IListResponseModel<T>> {
    return this.http.post<IListResponseModel<T>>(this.apiUrl+'delete',item);
  }

  update(item: T): Observable<IListResponseModel<T>> {
    return this.http.post<IListResponseModel<T>>(this.apiUrl+'update',item);
  }
}
