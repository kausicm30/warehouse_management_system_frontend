import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://iot-warehouse.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class LivetrackingserviceService {

  constructor(private http:HttpClient) { }

  getlivetrackingdetails(containerNumber:any):Observable<any>{
    return this.http.get<any>(baseUrl+`/admin/getcontainerlivetrackingdetails?containerNumber=${containerNumber}`);
  }
}
