//import { AuthService } from 'src/app/servces/auth.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IpaddyService } from './ipaddy.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(
    public httpClient: HttpClient, public ipaddyService: IpaddyService
  ) { }

  ec2Ip: string = this.ipaddyService.getIpAddy();           //ip-addy from ec2
  private urlPostAdms: string = 'http://' + this.ec2Ip + ':6161/admin/signUp';
  private urlPostAdm: string = 'http://' + this.ec2Ip + ':6161/admin/signIn';
  private urlGetAllAdm: string = 'http://' + this.ec2Ip + ':6161/admin/findAllAdmin';
  private urlGetOneAdm: string = 'http://' + this.ec2Ip + ':6161/admin/findAdminById/';
  private urlDelAllAdm: string = 'http://' + this.ec2Ip + ':3000/meetings/';
  private urlDelOneAdm: string = 'http://' + this.ec2Ip + ':3000/meetings/';
  private urlPutAdm: string = 'http://' + this.ec2Ip + ':3000/meetings/';
  private urlPatchAdm: string = 'http://' + this.ec2Ip + ':3000/meetings/';
  private urlCalAdm: string = 'http://' + this.ec2Ip + ':3000/calen.php/';
  private urlMtgAdm: string = 'http://' + this.ec2Ip + ':3000/calen.php/';
  private urlApiAdm: string = 'https://fakestoreapi.com/projects';
  private urlLocAdm: string = 'http://' + this.ec2Ip + ':3000/meetings';
  private urlComAdm: string = './../../assets/data/meetingsCom.json';

  private obj = new BehaviorSubject<boolean>(false);        //instantiate behavior-subject: obj
  private loggedIn = this.obj.asObservable();               //create custom-observale: loggedIn
  private loggedInAdmin = this.obj.asObservable();          //create custom-observale: loggedInAdmin

  signIn(admin: any): Observable<string> {
    return this.httpClient.post(this.urlPostAdm, admin, { responseType: 'text' });
  }

  get isLogged() {
    return this.loggedIn;       //default value set to false (see behavior-subject line)
  }

  get isLoggedAdmin() {
    return this.loggedInAdmin;       //default value set to false (see behavior-subject line)
  }

  logIn() {
    this.obj.next(true);         //when called... returns "true"
  }
  logOut() {
    this.obj.next(false);        //when called... returns "false" 
  }

  signUp(admin: any): Observable<string> {
    return this.httpClient.post(this.urlPostAdms, admin, { responseType: 'text' });
  }

}
