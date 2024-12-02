import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private  url = 'http://localhost:4000/updatedata/data'
  constructor(private http:HttpClient) {
   }
   updateData(database:string,data:any[]):Observable<any>{
    return this.http.post<string>(this.url,{database,data})
   }
}
