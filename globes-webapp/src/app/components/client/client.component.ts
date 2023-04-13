import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/servces/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });

  constructor(
    public clientService : ClientService, 
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  // loaddata(){
  //   this.signUp()
  // }

  signIn(){
    let client = this.clientRef.value;          //initializes the variable: admins   
    //console.log(admins);           
    this.clientService.signIn(client).subscribe({
      next:(data:any) => {
        if(data=="success"){
          this.clientService.logIn();
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
    this.clientRef.reset();         //resets the form
    
    /* Useful Notes - signIn method
    * passes data btw adminComponent signIn and adminsService signIn
    * console.log(admins) is used to check input values from the "form"
    * "success" is used becos it is what you specified in adminController
    */
  }

}
