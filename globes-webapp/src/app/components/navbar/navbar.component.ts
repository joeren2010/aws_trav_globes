import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/servces/admin.service';
//import { AuthService } from 'src/app/servces/auth.service';
import { ClientService } from 'src/app/servces/client.service';
import { DriverService } from 'src/app/servces/driver.service';
import { ResvcabService } from 'src/app/servces/resvcab.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loggedIn?:boolean = false;
  loggedInClient?:boolean = false;
  loggedInDriver?:boolean = false;
  loggedInAdmin?:boolean = false;

  constructor(
    //public authService:AuthService,
    public clientService:ClientService,
    public driverService:DriverService,
    public adminService:AdminService,
    public resvcabService:ResvcabService,
    public router:Router
  ) { }

  ngOnInit(): void {

    this.clientService.isLogged.subscribe({
      next:(result:any)=>this.loggedIn=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
    this.driverService.isLogged.subscribe({
      next:(result:any)=>this.loggedIn=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
    this.adminService.isLogged.subscribe({
      next:(result:any)=>this.loggedIn=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })


    this.clientService.isLoggedClient.subscribe({
      next:(result:any)=>this.loggedInClient=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
    this.driverService.isLoggedDriver.subscribe({
      next:(result:any)=>this.loggedInDriver=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
    this.adminService.isLoggedAdmin.subscribe({
      next:(result:any)=>this.loggedInAdmin=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }


  logoutClient(){
    this.clientService.logOut();
    this.router.navigate(["client"]);     //after logout... reroutes to login page
  }
  logoutDriver(){
    this.driverService.logOut();
    this.router.navigate(["driver"]);     //after logout... reroutes to login page
  }
  logoutAdmin(){
    this.adminService.logOut();
    this.router.navigate(["admin"]);     //after logout... reroutes to login page
  }

}
