import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alocation',
  templateUrl: './alocation.component.html',
  styleUrls: ['./alocation.component.css']
})
export class AlocationComponent implements OnInit {

  lat = 11.39294
  lng = 77.48394
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.lat = parseFloat(params['latitude'])
        this.lng = parseFloat(params['longitude'])
      });
  }

}
