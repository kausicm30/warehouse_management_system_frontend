import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://iot-warehouse.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http:HttpClient) { }

  addemployee(data : any) :Observable<any>{
    return this.http.post<any>(baseUrl+`/admin/addemployee`, data);
  }
  getemployees():Observable<any>{
    return this.http.get<any>(baseUrl+`/admin/getemployees`);
  }
  
  deleteemployee(employeeId : any):Observable<any>{
    console.log("snk")
    return this.http.get<any>(baseUrl+`/admin/removeemployee?employeeId=${employeeId}`);
  }
}
