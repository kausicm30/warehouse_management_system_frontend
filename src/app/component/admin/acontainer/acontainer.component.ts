import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Containermodel } from 'src/app/models/containermodel.model';
import { ContainerserviceService } from 'src/app/services/containerservice.service';

@Component({
  selector: 'app-acontainer',
  templateUrl: './acontainer.component.html',
  styleUrls: ['./acontainer.component.css']
})
export class AcontainerComponent implements OnInit {

  
  containerDetails :  Containermodel[] | any;

  constructor(private router: Router,private containerService : ContainerserviceService) { }

  ngOnInit(): void {
    this.containerService.getcontainerdetails()
    .subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status){
          console.log(response);
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
  BoardingPoints :any;
  place :string = '';
  status : string = '';


  clearOrders : any = 1
  clearBoardingPoints : any = 1
  clearrfidTags: any = 1

  details(container : any){
    console.log(container);
    this.containerNumber= container[0].containerNumber;
    this.warehousename = container[0].warehousename;
    this.mobilenumber = container[0].mobilenumber;
    this.startingPoint = container[0].startingPoint;
    this.status = container[0].status;
  }

  addcontainer(){
    let container = {
      containerNumber:this.containerNumber,
      orderIds:this.orderIds,
      rfidTags:this.rfidTags,
      warehousename:this.warehousename,
      mobilenumber:this.mobilenumber,
      startingPoint:this.startingPoint,
      BoardingPoints:this.BoardingPoints,
      status:this.status
    }
    console.log(container)
    this.containerService.addcontainer(container)
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
  updateorderids(){
    let container = {
      containerNumber:this.containerNumber,
      orderId:this.orderIds
    }
    this.containerService.updatecontainer(container)
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
  updaterfids(){
    let container = {
      containerNumber:this.containerNumber,
      rfidTag:this.rfidTags
    }
    this.containerService.updatecontainer(container)
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
  updateboardingpoints(){
    let container = {
      containerNumber:this.containerNumber,
      BoardingPoint : {
        place : this.place
      }
    }
    this.containerService.updatecontainer(container)
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
  clearupdateorderids(){
    let container = {
      containerNumber:this.containerNumber,
      clearOrders:this.clearOrders
    }
    this.containerService.updatecontainer(container)
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
  clearupdaterfids(){
    let container = {
      containerNumber:this.containerNumber,
      clearrfidTags:this.clearrfidTags
    }
    this.containerService.updatecontainer(container)
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
  clearpdateboardingpoints(){
    let container = {
      containerNumber:this.containerNumber,
      clearBoardingPoints : this.clearBoardingPoints
    }
    this.containerService.updatecontainer(container)
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
  deleteContainer(){
    this.containerService.deletecontainer(this.containerNumber)
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
  getContainerNumber(){
    return this.containerNumber
  }
  go(){
		//this.router.navigate(['/admin/tracking']); // navigate to other page
    console.log(this.containerNumber)
    this.router.navigate(['/admin/tracking'],{queryParams: { 'container': this.containerNumber }});
    //this.router.navigateByUrl('/admin/tracking', { state: { container: this.containerNumber } });
	}
  
}
