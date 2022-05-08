import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Containermodel } from 'src/app/models/containermodel.model';
import { ContainerserviceService } from 'src/app/services/containerservice.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  place: any;
  
  containerDetails :  Containermodel[] | any;

  constructor(private router: Router,private containerService : ContainerserviceService) { }
  changecolor:any

  ngOnInit(): void {
    this.containerService.getcontainerdetails()
    .subscribe(
      (response:any)=>{
        if(response.status){
          this.containerDetails = response.containerDetails
        }
        else{

        }
      },
      (error:any)=>{
        console.log(error)
      })
  }
  
  containerNumber : string='';
  orderIds : any;
  rfidTags : any;
  warehousename : string = '';
  mobilenumber : string = '';
  startingPoint : string = '';
  BoardingPoints : any;
  status : string = '';


  details3(container : any){
    console.log(container);
    this.containerNumber= container[0].containerNumber;
    this.orderIds = container[0].orderIds;
    this.rfidTags = container[0].rfidTags;
    this.warehousename = container[0].warehousename;
    this.mobilenumber = container[0].mobilenumber;
    this.startingPoint = container[0].startingPoint;
    this.BoardingPoints = container[0].BoardingPoints;
    this.status = container[0].status;
  }
  boardingpoint(place:any){
    this.place = place[0].place
  }


  
  updatecontainerstatustoDeliver(){
    let container = {
      containerNumber:this.containerNumber,
      place: this.place,
      status : "Delivered"
    }
    console.log("dsmdslfd", container)
    this.containerService.updatecontainerstatus(container)
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
  updatecontainerstatustoReturn(){
    let container = {
      containerNumber:this.containerNumber,
      place: this.place,
      status : "Returned"
    }
    console.log("dsmdslfd", container)
    this.containerService.updatecontainerstatus(container)
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
