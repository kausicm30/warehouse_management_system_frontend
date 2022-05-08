import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employeemodel } from 'src/app/models/employeemodel.model';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-aemployee',
  templateUrl: './aemployee.component.html',
  styleUrls: ['./aemployee.component.css']
})
export class AemployeeComponent implements OnInit {

  employeeDetails : Employeemodel[] | undefined;

  constructor(private router: Router,private employeeService : EmployeeserviceService)  { }

  ngOnInit(): void {
    this.employeeService.getemployees()
      .subscribe(
        (response: any) => {
          console.log(response);
          if(response.status){
            console.log(response);
            this.employeeDetails  = response.employeeDetails;
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

  employeeId:string ='';
  name:string = '';
  warehousename:string='';
  mobilenumber:string='';
  password:string='';
  emailId:string='';
  dob:string='';



  details(employee:any){
    console.log(employee);
    this.employeeId= employee[0].employeeId;
    this.name= employee[0].name;
    this.warehousename= employee[0].warehousename;
    this.mobilenumber= employee[0].mobilenumber;
    this.dob= employee[0].dob;
    this.emailId = employee[0].emailId
    this.password= employee[0].password;
  }

  addemployeeDetails(employeedetails:any) {
    alert("Successful")
  }

  addemployee(){
    let employee = {
      employeeId :this.employeeId,
      name : this.name,
      warehousename : this.warehousename,
      mobilenumber : this.mobilenumber,
      dob:this.dob,
      emailId : this.emailId,
      password : this.password,
    }
    this.employeeService.addemployee(employee)
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

  deleteEmployee(){
    this.employeeService.deleteemployee(this.employeeId)
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
