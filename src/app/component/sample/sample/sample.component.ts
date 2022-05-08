import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }

  orderId:String=''

  details(){
    this.orderId="13245";
    console.log(this.orderId);
  }

  ngOnInit(): void {
  }

}
