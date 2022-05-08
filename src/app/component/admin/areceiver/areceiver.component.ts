import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordermodel } from 'src/app/models/ordermodel.model';
import { OrderserviceService } from 'src/app/services/orderservice.service';

@Component({
  selector: 'app-areceiver',
  templateUrl: './areceiver.component.html',
  styleUrls: ['./areceiver.component.css']
})
export class AreceiverComponent implements OnInit {

  receiverDetails : Ordermodel[] | undefined;

  constructor(private router: Router,private orderService : OrderserviceService) { }

  ngOnInit(): void {
    this.orderService.getorders()
      .subscribe(
        (response: any) => {
          console.log(response);
          if(response.status){
            console.log(response);
            this.receiverDetails  = response.orderDetails;
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
  rfid : string = ''
  orderamount : number = 0
  paymentmethod : string = ''
  productid : string = ''
  purchasedate : string = ''
  quantity : number = 0
  status : string = ''

  emailid : string=''
  name : string=''
  mobilenumber : string = ''
  address : string = ''
  city : string=''
  state : string=''

  createdAt : string = ''
  updatedAt : string = ''

  details(order:any){
    this.orderId= order[0].orderId;
    this.rfid= order[0].rfid;
    this.orderamount= order[0].orderamount;
    this.paymentmethod= order[0].paymentmethod;
    this.productid= order[0].productid;
    this.purchasedate= order[0].purchasedate;
    this.quantity= order[0].quantity;
    this.status= order[0].status;

    this.emailid=order[0].receiverdetails.emailid
    this.name = order[0].receiverdetails.name
    this.mobilenumber = order[0].receiverdetails.mobilenumber
    this.address = order[0].receiverdetails.address
    this.city = order[0].receiverdetails.city
    this.state = order[0].receiverdetails.state

    this.createdAt= order[0].createdAt;
    this.updatedAt= order[0].updatedAt;
    
  }

  addReceiverDetails(packagedetails:any) {
    alert("Successful")
  }
  addorder(){
    let order = {
      orderId: this.orderId,
      rfid: this.rfid,
      orderamount: this.orderamount,
      paymentmethod: this.paymentmethod,
      productid: this.productid,
      purchasedate: this.purchasedate,
      quantity: this.quantity,
      status: this.status,
      emailid:this.emailid,
      name : this.name,
      mobilenumber : this.mobilenumber,
      address : this.address,
      city : this.city,
      state : this.state
    }

    this.orderService.addorder(order)
      .subscribe((response: any) => {
          console.log(response);
          if(response.status){
            console.log(response);
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
      window.location.reload()
  }

  deleteorder(){
    this.orderService.cancelorder(this.orderId)
      .subscribe((response: any) => {
          console.log(response);
          if(response.status){
            console.log(response);
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
      window.location.reload()
  }
}
