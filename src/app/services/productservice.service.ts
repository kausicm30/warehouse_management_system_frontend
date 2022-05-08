import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://iot-warehouse.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  addproduct(data : any) :Observable<any>{
    return this.http.post<any>(baseUrl+`/admin/addproduct`, data);
  }
  getproducts():Observable<any>{
    return this.http.get<any>(baseUrl+`/admin/getproducts`);
  }
  
  deleteproduct(productId : any):Observable<any>{
    return this.http.get<any>(baseUrl+`/admin/deleteproduct?productId=${productId}`);
  }
  
}
