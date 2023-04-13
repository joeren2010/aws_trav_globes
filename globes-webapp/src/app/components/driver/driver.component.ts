import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/servces/driver.service';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  driverRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });

  constructor(
    public driverService : DriverService, 
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  signIn(){
    let driver = this.driverRef.value;          //initializes the variable: drivers   
    //console.log(drivers);           
    this.driverService.signIn(driver).subscribe({
      next:(data:any) => {
        if(data=="success"){
          this.driverService.logIn();
          //alert("login is successfull")
          this.router.navigate(["home"]);     //after login... reroutes to home page 
        }
        else{
          alert("login failure, try again")
        }
      },
      error:(error:any) => console.log(error),
      complete:() => console.log("completed")
    });  
    this.driverRef.reset();         //resets the form
    
    /* Useful Notes - signIn method
    * passes data btw driverComponent signIn and driversService signIn
    * console.log(drivers) is used to check input values from the "form"
    * "success" is used becos it is what you specified in driverController
    */
  }
}
