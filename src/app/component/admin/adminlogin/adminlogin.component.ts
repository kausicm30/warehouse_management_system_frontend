import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Loginmodel } from 'src/app/models/loginmodel.model';
import { LoginService } from 'src/app/services/loginservice.service'
 
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  public submitted: boolean = false;
  public error: String = '';

  constructor(private router: Router,private LoginService: LoginService) { }

  ngOnInit(): void {}

  validate(){
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      console.log("Please fill all the fields !!!");
    }
    else{
      this.submitted=true;
    }
    form.classList.add('was-validated');
  }
  onClickSubmit(data:any) {
    this.validate();
    if(this.submitted){
      console.log("Admin Id : " + data.adminId);
      console.log("Password : "+data.password);
      // if(this.submitted === true)
      //   this.router.navigateByUrl('/employee/product');
      let logindetails = {
        adminId:data.adminId,
        password:data.password
      }

      this.LoginService.verifyadminlogin(logindetails)
      .subscribe(
        (response: any) => {
          console.log(response);
          if(response.status){
            console.log(response);
            this.router.navigateByUrl('/admin/product');
            this.error='';
          }
          else{
              this.error = 'Invalid ID or Password'; 
          }
        },
        (error: any) => {
          console.log(error);
        });
      }
    
  }
  reload(){
    window.location.reload();
  }
}
