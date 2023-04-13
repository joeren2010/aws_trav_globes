import { Component, OnInit } from '@angular/core';
import { ResvcabService } from 'src/app/servces/resvcab.service';
import { AfterViewInit, TemplateRef, ElementRef } from '@angular/core';
import { elementAt, Observable } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as moment from 'moment';
import * as $ from 'jquery';
import { CabService } from 'src/app/servces/cab.service';


@Component({
  selector: 'app-resvcab',
  templateUrl: './resvcab.component.html',
  styleUrls: ['./resvcab.component.css']
})
export class ResvcabComponent implements OnInit {
  fetching: boolean = false;
  cabs:any[]= [];
  cartCabs: any[] = [];
  wishlistCabs: any[] = [];

  rescForm = new FormGroup({
    pickupLoc: new FormControl(),
    pickupDate: new FormControl(), 
    pickupTime: new FormControl(),
    dropoffLoc: new FormControl(), 
    dropoffDate: new FormControl(),
    dropoffTime: new FormControl(), 
    tripDistance: new FormControl(), 
    //active: new FormControl()
  });

  constructor(
    private cabService:CabService,
    private resvcabService:ResvcabService,
    public router:Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getCabs(); 
    this.getDate();    
  }

    //disable pass-date
  minDate: any = "2022-09-15";     //must use the yyyy-mm-dd format
  getDate(){
    let date = new Date();
    let day: any = date.getDate();    //displays only day = dd
    if(day < 10) {
      day = "0" + day;
    }
    let month: any = date.getMonth() + 1; //displays only month = mm
    if(month < 10) {
      month = "0" + month;
    }
    let year: any = date.getFullYear();    //displays only year
    this.minDate = year + "-" + month + "-" + day
    console.log(this.minDate)
  }   

  getCabs() {
    this.resvcabService.getCabs();
    this.resvcabService.cabsSub.subscribe(res=>{
      console.log(res);
      if(res.length !==0 ) {
        this.cabs = Object.assign([], res);
        this.fetching = false;
        console.log(this.cabs);
      }
    })
  }

  addCabToWishlist(cab:any) {
    this.resvcabService.addCabToWishlist(cab);
  }

  addCabToCart(cab:any) {
    this.resvcabService.addCabToCart(cab);
  }

  initializeForm(rescObj: Resc | null) {  
    if (rescObj == null) {
      this.rescForm = this.formBuilder.group({   
        pickupLoc: [null],     
        pickupDate: [],
        pickupTime: [],
        dropoffLoc: [null],     
        dropoffDate: [],
        dropoffTime: [],
        tripDistance: [],
      });
    } else {
      this.rescForm = this.formBuilder.group({
        pickupLoc: [rescObj.pickupLoc],
        pickupDate: [rescObj.pickupDate],
        pickupTime: [rescObj.pickupTime],
        dropoffLoc: [rescObj.dropoffLoc],
        dropoffDate: [rescObj.dropoffDate],
        dropoffTime: [rescObj.dropoffTime],
        tripDistance: [rescObj.tripDistance],
      });
    }
  }

  onlyNum(event:any):boolean {
    const charCode = (event.which)? event.which: event.keyCode
    if(charCode > 31 && (charCode < 48 || charCode > 57)) {
      console.log("charCode restricted is: "+ charCode);
      return false
    }
    // if(charCode == 9 || charCode == 13){
    //   event.preventDefault(); 
    //   this.saveResc();
    // }
    return true;
  }

  // save rescData into local storage
  saveResc(){
    if (sessionStorage.getItem('rescData') !== null){
      let rescData = this.rescForm.value; 
      //console.log(rescData);                                          
      sessionStorage.setItem('rescData', JSON.stringify(rescData)); 
    }
    else{
      let rescData = this.rescForm.value; 
      rescData = sessionStorage.setItem('rescData', JSON.stringify(rescData));    
      return rescData
    }                             
  }
  
  localCart(){
    this.resvcabService.saveLocalCart();
  }

}

interface Resc {
  pickupLoc?: string;
  pickupDate?: Date;
  pickupTime?: string;
  dropoffLoc?: string;
  dropoffDate?: Date;
  dropoffTime?: string;
  tripDistance?: number;
  //active?: boolean;
}