import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IpaddyService } from './ipaddy.service';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  constructor(
    public httpClient: HttpClient, public ipaddyService: IpaddyService
  ) { }

  ec2Ip: string = this.ipaddyService.getIpAddy();           //ip-addy from ec2
  private urlPostCab: string = 'http://' + this.ec2Ip + ':7171/cab/storeCab';
  private urlGetAllCab: string = 'http://' + this.ec2Ip + ':7171/cab/findAllCab';
  private urlGetOneCab: string = 'http://' + this.ec2Ip + ':7171/cab/findCabById/';
  private urlDelAllCab: string = 'http://' + this.ec2Ip + ':7171/cab/deleteAll';
  private urlDelOneCab: string = 'http://' + this.ec2Ip + ':7171/cab/deleteCabById/';
  private urlPutCab: string = 'http://' + this.ec2Ip + ':3000/meetings/';
  private urlPatchCab: string = 'http://' + this.ec2Ip + ':3000/meetings/';
  private urlCalCab: string = 'http://' + this.ec2Ip + ':3000/calen.php/';
  private urlMtgCab: string = 'http://' + this.ec2Ip + ':3000/calen.php/';
  private urlApiCab: string = 'https://fakestoreapi.com/projects';
  private urlLocCab: string = 'http://' + this.ec2Ip + ':3000/meetings';
  private urlComCab: string = './../../assets/data/meetingsCom.json';

  getCab() {
    return this.httpClient.get<any[]>(this.urlGetAllCab);
    //return this.httpClient.get<any[]>('../../assets/data/cab.json');
  }

  getOneCab(cabId: any): Observable<string> {
    return this.httpClient.get(this.urlGetOneCab + cabId, { responseType: 'text' });
    //return this.httpClient.get<any[]>('../../assets/data/cab.json');
  }

  storeCab(cab: any): Observable<string> {
    return this.httpClient.post(this.urlPostCab, cab, { responseType: 'text' });
  }

  deleteCab(cabId: any): Observable<string> {
    return this.httpClient.delete(this.urlDelOneCab + cabId, { responseType: 'text' });
  }
}
