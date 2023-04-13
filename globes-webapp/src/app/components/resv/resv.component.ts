import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResvService } from 'src/app/servces/resv.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { Resv } from './resv';

@Component({
  selector: 'app-resv',
  templateUrl: './resv.component.html',
  styleUrls: ['./resv.component.css'],
})
export class ResvComponent implements OnInit {
  resvObservable: Observable<any[]> = new Observable();
  //resv: Array<Resv> = [];

  constructor(private resvService: ResvService) { }

  resvStatusIdx: number = 0;
  resvStatus: { name: string; value: number }[] = [
    { name: 'Pending', value: 0 },
    { name: 'Approved', value: 1 },
    { name: 'Rejected', value: 2 },
    { name: 'Pickedup', value: 3 },
    { name: 'Droppedoff', value: 4 },
    { name: 'Cancelled', value: 5 },
  ];

  myVar = [];
  selectForm: FormGroup = new FormGroup({});
  resvForm: FormGroup = new FormGroup({});
  selectModel: any;
  viewResvBool: boolean = false;
  viewResvIdx: number | undefined;
  resvModel: any;

  ngOnInit(): void {
    this.loaddata();
  }

  loaddata() {
    this.resvObservable = this.resvService.getAllResv();
  }

  changeResvStatus(resvStatusIdx: number) {
    this.resvStatusIdx = resvStatusIdx;
  }

  openViewModal(resvModel: any, viewResvIdx: number) {
    console.log(resvModel);
    this.viewResvBool = true;
    this.viewResvIdx = viewResvIdx;
    this.resvModel = resvModel;
  }

  closeViewModal() {
    delete this.viewResvIdx;
    delete this.resvModel;
    this.viewResvBool = false;
  }

  changeStatus(event: any) {
    let value: any = event.value;
    console.log(value);
    return value;
  }

  updateStatus() {
    //window.location.reload();
    setTimeout(() => {
      this.saveResv();
    }, 1000);
    let resvStatus: any = this.resvStatus;
    $('#selected').val() == '0';
    switch ($('#selected').val()) {
      case '5':
        resvStatus[5] = 'Cancelled';
        console.log(this.resvStatus);
        break;
      case '4':
        resvStatus[4] = 'Dropped';
        console.log(this.resvStatus);
        break;
      case '3':
        resvStatus[3] = 'Pickedup';
        console.log(this.resvStatus);
        break;
      case '2':
        resvStatus[2] = 'Rejected';
        console.log(this.resvStatus);
        break;
      case '1':
        resvStatus[1] = 'Pending';
        console.log(this.resvStatus);
        break;
      default:
        resvStatus[0] = 'Approved';
        console.log(this.resvStatus);
    }
    //this.loaddata();
    //window.location.reload
    //this.selectForm.reset();
  }

  // save resv into database
  saveResv() {
    let resvRef = this.resvForm.value;
    console.log(resvRef);
    this.resvService.storeResv(resvRef).subscribe({
      next: (result: any) => {
        if (result == 'resv details Stored successfully') {
          alert('resv details stored successfully');
          console.log(result);
        } else {
          alert("resv details didn't store");
        }
      },
      error: (error: any) => console.log(error),
      complete: () => {
        console.log('completed');
        this.loaddata();
      },
    });
    // this.tempImageFilesPath.splice(0,this.tempImageFiles.length); //reset the array
    // this.tempImageFiles.splice(0,this.tempImageFiles.length);   //reset the array
    //resvRef.images.splice(0,resvRef.image.length);        // reset the array
    //this.resvForm.reset();
  }

  // update resv into database
  updateResv() {
    let resvRef = this.resvForm.value;
    console.log(resvRef);
    this.resvService.updateResv(resvRef).subscribe({
      next: (result: any) => {
        if (result == 'resv details Updated successfully') {
          alert('resv details updated successfully');
          console.log(result);
        } else {
          alert("resv details didn't update");
        }
      },
      error: (error: any) => console.log(error),
      complete: () => {
        console.log('completed');
        this.loaddata();
      },
    });
    // this.tempImageFilesPath.splice(0,this.tempImageFiles.length); //reset the array
    // this.tempImageFiles.splice(0,this.tempImageFiles.length);   //reset the array
    //resvRef.images.splice(0,resvRef.image.length);        // reset the array
    //this.resvForm.reset();
  }

  // patch resv into database
  patchResv() {
    let resvRef = this.resvForm.value;
    console.log(resvRef);
    this.resvService.patchResv(resvRef).subscribe({
      next: (result: any) => {
        if (result == 'resv details Updated successfully') {
          alert('resv details updated successfully');
          console.log(result);
        } else {
          alert("resv details didn't update");
        }
      },
      error: (error: any) => console.log(error),
      complete: () => {
        console.log('completed');
        this.loaddata();
      },
    });
    // this.tempImageFilesPath.splice(0,this.tempImageFiles.length); //reset the array
    // this.tempImageFiles.splice(0,this.tempImageFiles.length);   //reset the array
    //resvRef.images.splice(0,resvRef.image.length);        // reset the array
    //this.resvForm.reset();
  }

  deleteResv(resvId: any) {
    //alert(resvId)
    this.resvService.deleteResv(resvId).subscribe({
      next: (result: any) => {
        if (result == 'resv details Deleted successfully') {
          alert('resv details deleted successfully');
        } else {
          alert("resv details didn't delete");
        }
      },
      error: (error: any) => console.log(error),
      complete: () => {
        console.log('completed');
        this.loaddata();
      },
    });
  }

  locStorage() {
    sessionStorage.clear();
    //sessionStorage['remove']('rescData');
  }
}

export interface Resv {
  resvDate?: Date;
  clientName?: string;
  clientId?: string;
  clientEmail?: string;
  clientPhone?: string;
  cartId?: string;
  pickupLoc?: string;
  pickupDate?: Date;
  pickupTime?: string;
  dropoffLoc?: string;
  dropoffDate?: Date;
  dropoffTime?: string;
  tripDistance?: number;
  unitPrice?: number;
  itemsSubTotal?: number;
  // totalAmount?: number;
  driverName?: string;
  driverId?: string;
  cabId?: string;
  resvStatus?: string;
  cabTitle?: string;
  price?: number;
  quantity?: number;
  totalPrice?: number;
}

export interface Category {
  categoryId?: string;
  categoryName?: string;
  categoryDescription?: string;
  categoryImageUrl?: string;
  active?: boolean;
  createdOn?: Date;
}

// updateStatus(){
//   let resvStatus: any = this.resvStatus;
//   if($("#selected").val() == "5"){
//     resvStatus[5] = "Cancelled";
//     console.log(this.resvStatus);
//   }
//   else if($("#selected").val() == "4"){
//     resvStatus[4] = "Dropped";
//     console.log(this.resvStatus);
//   }
//   else if($("#selected").val() == "3"){
//     resvStatus[3] = "Pickedup";
//     console.log(this.resvStatus);
//   }
//   else if($("#selected").val() == "2"){
//     resvStatus[2] = "Rejected";
//     console.log(this.resvStatus);
//   }
//   else if ($("#selected").val() == "1") {
//     resvStatus[1] = "Approved";
//     console.log(this.resvStatus);
//   } else {
//     resvStatus[0] = "Pending";
//     console.log(this.resvStatus);
//   }
//   //this.loaddata();
//   window.location.reload
//   //this.selectForm.reset();
// }
