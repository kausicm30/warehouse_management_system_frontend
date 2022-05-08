import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordermodel } from 'src/app/models/ordermodel.model';
import { OrderserviceService } from 'src/app/services/orderservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderDetails :Ordermodel[] | undefined;
  constructor(private router: Router, private orderService : OrderserviceService) { }

  ngOnInit(): void {
    this.orderService.getorders()
      .subscribe(
        (response: any) => {
          console.log(response);
          if(response.status){
            console.log(response);
            this.orderDetails  = response.orderDetails;
            //this.router.navigateByUrl('/employee/product');
            //this.error='';
          }
          else{
              //this.error = 'Invalid ID or Password'; 
          }
        },
        (error: any) => {
          console.log(error);
        });
  }

  orderId : string = ''
  productid : string = ''
  quantity : number = 0
  orderamount : number = 0
  purchasedate : string = ''
  paymentmethod : string = ''
  status : string = ''
  createdAt : string = ''
  updatedAt : string = ''
  rfid : string = ''

  details(order:any){
    this.orderId= order[0].orderId;
    this.productid= order[0].productid;
    this.quantity= order[0].quantity;
    this.orderamount= order[0].orderamount;
    this.purchasedate= order[0].purchasedate;
    this.paymentmethod= order[0].paymentmethod;
    this.status= order[0].status;
    this.createdAt= order[0].createdAt;
    this.updatedAt= order[0].updatedAt;
    this.rfid= order[0].rfid;
  }
  scanrfid(){
    this.orderService.assignrfid()
      .subscribe(
        (response: any) => {
          console.log(response);
          if(response.status){
            console.log(response);
            this.rfid  = response.rfid;
            //this.router.navigateByUrl('/employee/product');
            //this.error='';
          }
          else{
              //this.error = 'Invalid ID or Password'; 
          }
        },
        (error: any) => {
          console.log(error);
        });
  }
  addrfid(){
    let data={
      orderId : this.orderId,
      rfid : this.rfid,
      statusvalue : "PACKED"
    }
    this.orderService.addrfid(data)
      .subscribe(
        (response: any) => {
          console.log(response);
          if(response.status){
            console.log(response);
            if(this.rfid.length !=0)
            alert("RFID assigned successful");
            else
            alert("Need to assign rfid");
            window.location.reload();;
            //this.router.navigateByUrl('/employee/product');
            //this.error='';
          }
          else{
              //this.error = 'Invalid ID or Password'; 
          }
        },
        (error: any) => {
          console.log(error);
        });
  }
  
  addpackagedetails(packagedetails:any) {
    alert("Successful")
  }

}
