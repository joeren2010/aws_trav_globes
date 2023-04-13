import { ViewChild } from '@angular/core';
//import { EventClickArg } from '@fullcalendar/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/servces/admin.service';
import { ClientService } from 'src/app/servces/client.service';
import { DriverService } from 'src/app/servces/driver.service';


@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css']
})
export class NewRegisterComponent implements OnInit {
  signupForm = new FormGroup({
    membertype:new FormControl(),
    fullname:new FormControl(),
    address:new FormControl(),
    phone:new FormControl(),
    email:new FormControl(),
    username:new FormControl(),
    password:new FormControl(),
    cfmpassword:new FormControl()
  });  

  constructor(
    public clientService : ClientService, 
    public driverService : DriverService, 
    public adminService : AdminService, 
    public router:Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    //this.loaddata()
  }

  loaddata(){
    //this.sortMembership;
  }
  
  initializeForm(signupObj: Signup | null) {  
    if (signupObj == null) {
      this.signupForm = this.formBuilder.group({   
        membertype: [null],     
        fullname: [],
        address: [],
        phone: [null],     
        email: [],
        username: [],
        password: [],
        cfmpassword: [],
      });
    } else {
      this.signupForm = this.formBuilder.group({
        membertype: [signupObj.membertype],
        fullname: [signupObj.fullname],
        address: [signupObj.address],
        phone: [signupObj.phone],
        email: [signupObj.email],
        username: [signupObj.username],
        password: [signupObj.password],
        cfmpassword: [signupObj.cfmpassword],
      });
    }
  }

  sortMembership(event: any){
    let value: any = event.value;
    return value;
  }

  signUp(){
    if($("#selected").val() == "3"){
      console.log("calling admin-signup...");      
      this.signupAdmin();
    }
    else if ($("#selected").val() == "2") {
      console.log("calling driver-signup...");      
      this.signupDriver();
    } else {
      console.log("calling client-signup...");      
      this.signupClient();
    } 
  }

  // save client signup into database
  signupClient(){
    console.log("saving client-signup...");
    //alert("event generated...")                     //to test if saveCab function is working
    let signupRef = this.signupForm.value;        //initializes the variable: cabRef
    // this.tempImageFilesPath.forEach((v, index) => {
    //   signupRef.images[index]=v;    
    // })
    console.log(signupRef);                        //checks input values in web's inspect-element
    //console.log(signupRef.thumbnailImage)
    this.clientService.signUp(signupRef).subscribe({
      next:(result:any) => {
        if(result=="Client Details stored successfully"){
          alert("client details stored successfully")
          console.log(result);
        }else {
          alert("client details didn't store")
        }
      },
      error:(error:any) => console.log(error),
      complete:() => {
        console.log("completed");
        this.loaddata();
      }
    }) 
    //this.tempImageFilesPath.splice(0,this.tempImageFiles.length); //reset the array        
    //this.tempImageFiles.splice(0,this.tempImageFiles.length);   //reset the array 
    //signupRef.images.splice(0,signupRef.image.length);        // reset the array 
    this.signupForm.reset();                       //resets the form
  }

  signupDriver(){
    console.log("saving driver-signup...");
    //alert("event generated...")                     //to test if saveCab function is working
    let signupRef = this.signupForm.value;        //initializes the variable: cabRef
    // this.tempImageFilesPath.forEach((v, index) => {
    //   signupRef.images[index]=v;    
    // })
    console.log(signupRef);                        //checks input values in web's inspect-element
    //console.log(signupRef.thumbnailImage)
    this.driverService.signUp(signupRef).subscribe({
      next:(result:any) => {
        if(result=="Driver Details stored successfully"){
          alert("driver details stored successfully")
          console.log(result);
        }else {
          alert("driver details didn't store")
        }
      },
      error:(error:any) => console.log(error),
      complete:() => {
        console.log("completed");
        this.loaddata();
      }
    }) 
    //this.tempImageFilesPath.splice(0,this.tempImageFiles.length); //reset the array        
    //this.tempImageFiles.splice(0,this.tempImageFiles.length);   //reset the array 
    //signupRef.images.splice(0,signupRef.image.length);        // reset the array 
    this.signupForm.reset();                       //resets the form
  }

  signupAdmin(){
    console.log("saving admin-signup...");
    //alert("event generated...")                     //to test if saveCab function is working
    let signupRef = this.signupForm.value;        //initializes the variable: cabRef
    // this.tempImageFilesPath.forEach((v, index) => {
    //   signupRef.images[index]=v;    
    // })
    console.log(signupRef);                        //checks input values in web's inspect-element
    //console.log(signupRef.thumbnailImage)
    this.adminService.signUp(signupRef).subscribe({
      next:(result:any) => {
        if(result=="Admin Details stored successfully"){
          alert("admin details stored successfully")
          console.log(result);
        }else {
          alert("admin details didn't store")
        }
      },
      error:(error:any) => console.log(error),
      complete:() => {
        console.log("completed");
        this.loaddata();
      }
    }) 
    //this.tempImageFilesPath.splice(0,this.tempImageFiles.length); //reset the array        
    //this.tempImageFiles.splice(0,this.tempImageFiles.length);   //reset the array 
    //signupRef.images.splice(0,signupRef.image.length);        // reset the array 
    this.signupForm.reset();                       //resets the form    
  }

}

export interface Signup {
  membertype?: number;
  fullname?: string;
  address?: string;
  phone?: string;
  email?: string;
  username?: string;
  password?: string;
  cfmpassword?: string;
}