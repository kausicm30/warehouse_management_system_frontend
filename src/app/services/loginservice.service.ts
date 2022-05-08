import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Loginmodel} from '../models/loginmodel.model';

const baseUrl = 'https://iot-warehouse.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  verifyemplogin(data : any) :Observable<Loginmodel>{
    console.log("verify email");
    return this.http.post<Loginmodel>(baseUrl+`/employee/loginverification`, data);
  }
  verifyadminlogin(data : any) :Observable<Loginmodel>{
    console.log("verify email");
    return this.http.post<Loginmodel>(baseUrl+`/admin/loginverification`, data);
  }
  sampleget(data : any):Observable<Loginmodel>{
    return this.http.get<Loginmodel>(baseUrl+`/verifylogin?adminid=${data.id}&password=${data.password}`);
  }
}
