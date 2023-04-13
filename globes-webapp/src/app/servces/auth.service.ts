import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private urlPostAuth:   string = 'http://localhost:8181/admin/signIn';;
  // private urlGetAllAdm: string = 'http://localhost:9090/product/findAllProduct';
  // private urlGetOneAdm: string = 'http://localhost:9090/product/storeProduct';
  // private urlDelAllAdm: string = 'http://localhost:3000/meetings/';
  // private urlDelOneAdm: string = 'http://localhost:3000/meetings/';
  // private urlPutAdm:    string = 'http://localhost:3000/meetings/';
  // private urlPatchAdm:  string = 'http://localhost:3000/meetings/';
  // private urlCalAdm:    string = 'http://localhost:3000/calen.php/';
  // private urlMtgAdm:    string = 'http://localhost:3000/calen.php/';
  // private urlApiAdm:    string = 'https://fakestoreapi.com/projects';
  // private urlLocAdm:    string = 'http://localhost:3000/meetings';
  // private urlComAdm:    string = './../../assets/data/meetingsCom.json';

  // public obj = new BehaviorSubject<boolean>(false);   //instantiate behavior-subject: obj
  // public loggedIn = this.obj.asObservable();          //create custom-observale: loggedIn

  // constructor(public httpClient: HttpClient) { }

  // signIn(auth:any):Observable<string>{
  //   return this.httpClient.post(this.urlPostAuth, auth, {responseType:'text'});

  //   /* Usefull Notes:
  //   * urlAdm: string = 'http://localhost:9090/admin/signIn' is backend url for admin's signin
  //   * passes data btw adminsComponent signIn, adminsService signIn and adminController signIn
  //   * responseType = "text" because our backend (adminsController) codes is returning "string"
  //   * the default "return datatype" is json... for json... just remove "{responseType:'text'}"
  //   */
  // }
  
  // get isLogged(){
  //   return this.loggedIn;       //default value set to false (see behavior-subject line)
  // }

  // logIn(){
  //   this.obj.next(true);         //when called... returns "true"    
  // }
  // logOut(){
  //   this.obj.next(false);        //when called... returns "false" 
  // }
}
