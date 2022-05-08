import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordermodel } from 'src/app/models/ordermodel.model';
import { OrderserviceService } from 'src/app/services/orderservice.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

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

  emailid : string = ''
  name : string = ''
  address : string = ''
  city : string = ''
  state : string = ''
  mobilenumber : number = 0

  details(product:any){
    this.emailid= product[0].receiverdetails.emailid;
    this.name= product[0].receiverdetails.name;
    this.address= product[0].receiverdetails.address;
    this.city= product[0].receiverdetails.city;
    this.state= product[0].receiverdetails.state;
    this.mobilenumber= product[0].receiverdetails.mobilenumber;
  }

  addReceiverDetails(packagedetails:any) {
    alert("Successful")
  }

}