import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpaddyService {
  constructor(private httpClient: HttpClient) { }

  public getIpAddy() {
    return 'localhost'; //public ipv4 addy from aws' ec2 instance    
    // return '172.30.144.1'; //public ipv4 addy from aws' ec2 instance
  }

}
