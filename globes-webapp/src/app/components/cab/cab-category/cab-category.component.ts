import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CabcategoryService } from 'src/app/servces/cabcategory.service';

@Component({
  selector: 'app-cab-category',
  templateUrl: './cab-category.component.html',
  styleUrls: ['./cab-category.component.css']
})
export class CabCategoryComponent implements OnInit {
  // catergory observable
  public cabcategoryObservable: Observable<any[]> = new Observable();
  
  cabCategoryBool: boolean = true;
  cabCategoryForm:FormGroup = new FormGroup({});
  loader : boolean = false;
  tempFile: any;

  constructor(
    private cabcategoryService:CabcategoryService,  
    private modalService: NgbModal,  
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.loaddata();   
  }

  loaddata(){
    this.cabcategoryObservable = this.cabcategoryService.getCategory();
  }  

  
  openCabCategoryDialog(modelRef:any, cabCategoryObj = null) {
    // console.log(cabCategoryObj);    
    this.initialForm(cabCategoryObj);
    this.modalService.open(modelRef);
  }

  initialForm(cabCategoryObj: any = null) {
    if (cabCategoryObj === null) {
      this.cabCategoryForm = this.formBuilder.group({
        categoryId: [null],
        categoryName: ["", Validators.required],
        categoryDescription: ["", Validators.required],
        categoryImageUrl: ["", Validators.required],
        active: [true],
        addedOn: [],
      });
    } else {
      this.cabCategoryForm = this.formBuilder.group({
        categoryId: [cabCategoryObj.categoryId],
        categoryName: [cabCategoryObj.categoryName, Validators.required],
        categoryDescription: [cabCategoryObj.categoryDescription, Validators.required],
        categoryImageUrl: [cabCategoryObj.categoryImageUrl, Validators.required],
        active: [cabCategoryObj.active],
        addedOn: [cabCategoryObj.addedOn],
      });
    }
  }

  checkFileType(event: any) {
    this.tempFile = event.target.files[0];
    if (
      this.tempFile.type == "image/png" ||
      this.tempFile.type == "image/jpeg" ||
      this.tempFile.type == "image/jpg"
    ) {
      //console.log("File Ok");
      let reader = new FileReader();                     //instantiate file-reader variable: reader
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event) => {
        let path = (<FileReader>event.target).result;    //create variable "path" and assign the results from file-reader to it
        this.tempFile=path;
      }
    } else {
      //console.log("File not Ok");
      this.tempFile = null;
      //this.toast.show("Only .png/.jpeg/.jpg file format accepted!!");
    }
  }

  // view category image details
  openImageModal(modal: any, imageUrls: string) {
    //alert("view category image is running...")
    this.tempFile = imageUrls;
    this.modalService.open(modal, { 
      size: "l",
      scrollable: true 
    });
  }

  // open image
  openImage(url: string) {
    window.open(url, "_blank")
  }  

  addCategory(){
    //alert("event fired...")                                //tests if addCategory function is working
    let categoryRef = this.cabCategoryForm.value;        //initializes the variable: categoryRef
    categoryRef.categoryImageUrl=this.tempFile;              //stores category image data
    //console.log(categoryRef);                                //checks input values from the form 
    this.cabcategoryService.storeCategory(categoryRef).subscribe({
      next:(result:any) => console.log(result),
      error:(error:any) => console.log(error),
      complete:() => {
        console.log("completed");
        this.loaddata();
      }
    });
    this.tempFile.splice(0,this.tempFile.length); //reset the array 
    categoryRef.categoryImageUrl.splice(0,categoryRef.categoryImageUrl.length);        // reset the array
    categoryRef.categoryImageUrl="";
    this.cabCategoryForm.reset();
  }

  deleteCategory(categoryId:any){
    //alert(cabId)
    this.cabcategoryService.deleteCategory(categoryId).subscribe({
      next:(data:any) => {
        alert(data);
      },
      error:(error:any) => console.log(error),
      complete:() => {
        console.log("completed");
        this.loaddata();
      }
    })
  }    

}
