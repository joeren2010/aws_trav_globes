import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  public errorMessage1: string = "OOPS... Something Went Wrong!!";
  public errorMessage2: string = "The page you are looking for has been removed or is not yet available";

  constructor() { }

  ngOnInit(): void {
  }

}
