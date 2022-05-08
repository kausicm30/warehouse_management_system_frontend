import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { Loginmodel } from 'src/app/models/loginmodel.model';
import { LoginService } from 'src/app/services/loginservice.service'

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {

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
      console.log("EmployeeId : " + data.employeeId);
      console.log("Password : "+data.password);
      // if(this.submitted === true)
      //   this.router.navigateByUrl('/employee/product');
      let logindetails = {
        employeeId:data.employeeId,
        password:data.password
      }

      this.LoginService.verifyemplogin(logindetails)
      .subscribe(
        (response: any) => {
          console.log(response);
          if(response.status){
            console.log(response);
            this.router.navigateByUrl('/employee/product');
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
