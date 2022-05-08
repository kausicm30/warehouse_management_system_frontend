import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Livetrackingmodel } from 'src/app/models/livetrackingmodel.model';
import { LivetrackingserviceService } from 'src/app/services/livetrackingservice.service';
import{AcontainerComponent} from 'src/app/component/admin/acontainer/acontainer.component';
import { query } from '@angular/animations';



@Component({
  selector: 'app-atracking',
  templateUrl: './atracking.component.html',
  styleUrls: ['./atracking.component.css']
})
export class AtrackingComponent implements OnInit {
  containerNumber : string | any
  trackingDetails : Livetrackingmodel | any

  // lat = 11.39294
  // lng = 77.48394

  // lat : string | any = "11.39294"
  // lng : string | any = "77.48394"

  constructor(
    private router: Router, 
    private trackingService : LivetrackingserviceService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.containerNumber = params['container']
      });
    this.getTrackingDetails()
  }


  getTrackingDetails(){
    this.trackingService.getlivetrackingdetails(this.containerNumber)
      .subscribe((response: any) => {
        if(response.status){
          this.trackingDetails = response.Tracking_Details
          console.log(this.trackingDetails)
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  details(location:any){
    console.log("---------->",location[0].longiitude)
    this.router.navigate(['/admin/location'],{queryParams: { 'latitude':location[0].latitude ,'longitude':location[0].longiitude }});
  }


}
