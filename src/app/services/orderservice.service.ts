import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://iot-warehouse.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(private http:HttpClient) { }

  assignrfid():Observable<any>{
    return this.http.get<any>(baseUrl+`/employee/assign_rfid`);
  }
  addrfid(data : any) :Observable<any>{
    return this.http.post<any>(baseUrl+`/employee/addrfid`, data);
  }
  getorders():Observable<any>{
    return this.http.get<any>(baseUrl+`/employee/getorders`);
  }

  addorder(data : any) :Observable<any>{
    return this.http.post<any>(baseUrl+`/admin/addorder`, data);
  }

  cancelorder(orderId : any):Observable<any>{
    console.log("snk")
    return this.http.get<any>(baseUrl+`/admin/cancelorder?orderId=${orderId}`);
  }

}
