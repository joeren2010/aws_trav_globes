import { Component, OnInit } from '@angular/core';
import { ResvcabService } from 'src/app/servces/resvcab.service';

@Component({
  selector: 'app-payclient',
  templateUrl: './payclient.component.html',
  styleUrls: ['./payclient.component.css']
})
export class PayclientComponent implements OnInit {

  constructor(
    public resvcabService: ResvcabService,
  ) { }

  ngOnInit(): void {

  }

}
