import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productmodel } from 'src/app/models/productmodel.model';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productDetails : Productmodel[] | undefined;

  constructor(private router: Router,private productService : ProductserviceService)  { }

  ngOnInit(): void {
    this.productService.getproducts()
      .subscribe(
        (response: any) => {
          console.log(response);
          if(response.status){
            console.log(response);
            this.productDetails  = response.productDetails;
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

  productId : string = ''
  title : string = ''
  description : string = ''
  category : string = ''
  color : string = ''
  unitprice:number =0
  quantity : number = 0

  details(product:any){
    console.log(product);
    this.productId= product[0].productId;
    this.title= product[0].title;
    this.description= product[0].description;
    this.category= product[0].category;
    this.color= product[0].color;
    this.unitprice = product[0].pricing.unitprice
    this.quantity= product[0].quantity;
  }

  addProductDetails(packagedetails:any) {
    alert("Successful")
  }

  

}
