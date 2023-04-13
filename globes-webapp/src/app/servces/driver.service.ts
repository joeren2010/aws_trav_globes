//import { AuthService } from 'src/app/servces/auth.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IpaddyService } from './ipaddy.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  constructor(
    public httpClient: HttpClient, public ipaddyService: IpaddyService
  ) { }

  ec2Ip: string = this.ipaddyService.getIpAddy();           //ip-addy from ec2
  private urlPostDvrs: string = 'http://' + this.ec2Ip + ':9191/driver/signUp';
  private urlPostDvr: string = 'http://' + this.ec2Ip + ':9191/driver/signIn';
  private urlGetAllDvr: string = 'http://' + this.ec2Ip + ':9191/driver/findAllDriver';
  private urlGetOneDvr: string = 'http://' + this.ec2Ip + ':9191/driver/findDriverById';
  private urlDelAllDvr: string = 'http://' + this.ec2Ip + ':3000/meetings/';
  private urlDelOneDvr: string = 'http://' + this.ec2Ip + ':3000/meetings/';
  private urlPutDvr: string = 'http://' + this.ec2Ip + ':3000/meetings/';
  private urlPatchDvr: string = 'http://' + this.ec2Ip + ':3000/meetings/';
  private urlCalDvr: string = 'http://' + this.ec2Ip + ':3000/calen.php/';
  private urlMtgDvr: string = 'http://' + this.ec2Ip + ':3000/calen.php/';
  private urlApiDvr: string = 'https://fakestoreapi.com/projects';
  private urlLocDvr: string = 'http://' + this.ec2Ip + ':3000/meetings';
  private urlComDvr: string = './../../assets/data/meetingsCom.json';

  private obj = new BehaviorSubject<boolean>(false);        //instantiate behavior-subject: obj
  private loggedIn = this.obj.asObservable();               //create custom-observale: loggedIn
  private loggedInDriver = this.obj.asObservable();          //create custom-observale: loggedInAdmin

  signIn(driver: any): Observable<string> {
    return this.httpClient.post(this.urlPostDvr, driver, { responseType: 'text' });
  }

  get isLogged() {
    return this.loggedIn;       //default value set to false (see behavior-subject line)
  }

  get isLoggedDriver() {
    return this.loggedInDriver;       //default value set to false (see behavior-subject line)
  }

  logIn() {
    this.obj.next(true);         //when called... returns "true"    
  }
  logOut() {
    this.obj.next(false);        //when called... returns "false" 
  }

  signUp(driver: any): Observable<string> {
    return this.httpClient.post(this.urlPostDvrs, driver, { responseType: 'text' });
  }

}
