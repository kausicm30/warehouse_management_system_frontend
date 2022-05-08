import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://iot-warehouse.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class ContainerserviceService {

  constructor(private http:HttpClient) { }
  
  addcontainer(data:any):Observable<any>{
    return this.http.post<any>(baseUrl+`/admin/addcontainerdetails`, data);
  }

  updatecontainer(data:any):Observable<any>{
    console.log(data)
    return this.http.post<any>(baseUrl+`/admin/updatecontainerdetails`, data);
  }

  getcontainerdetails():Observable<any>{
    return this.http.get<any>(baseUrl+`/admin/getcontainerdetails`);
  }
  deletecontainer(containerNumber : any):Observable<any>{
    console.log("snk")
    return this.http.get<any>(baseUrl+`/admin/deletecontainerdetails?containerNumber=${containerNumber}`);
  }

  updatecontainerstatus(data:any):Observable<any>{
    console.log(data)
    return this.http.post<any>(baseUrl+`/admin/updatecontainerstatus`, data);
  }

}
