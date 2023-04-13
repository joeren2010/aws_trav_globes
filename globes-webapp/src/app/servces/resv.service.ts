import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IpaddyService } from './ipaddy.service';

@Injectable({
  providedIn: 'root',
})
export class ResvService {
  constructor(
    public httpClient: HttpClient, public ipaddyService: IpaddyService
  ) { }

  ec2Ip: string = this.ipaddyService.getIpAddy();           //ip-addy from ec2
  private urlPostResv: string = 'http://' + this.ec2Ip + ':4141/resv/storeResv';
  private urlGetAllResv: string = 'http://' + this.ec2Ip + ':4141/resv/findAllResv';
  private urlGetOneResv: string = 'http://' + this.ec2Ip + ':4141/resv/findResvById/';
  private urlDelAllResv: string = 'http://' + this.ec2Ip + ':4141/resv/deleteAll';
  private urlDelOneResv: string = 'http://' + this.ec2Ip + ':4141/resv/deleteResvById/';
  private urlPutResv: string = 'http://' + this.ec2Ip + ':4141/resv/updateResv';
  private urlPatchResv: string = 'http://' + this.ec2Ip + ':4141/resv/patchResv';
  private urlCalResv: string = 'http://' + this.ec2Ip + ':3000/calen.php/';
  private urlMtgResv: string = 'http://' + this.ec2Ip + ':3000/calen.php/';
  private urlApiResv: string = 'https://fakestoreapi.com/projects';
  private urlLocResv: string = 'http://' + this.ec2Ip + ':3000/meetings';
  private urlComResv: string = './../../assets/data/meetingsCom.json';

  getAllResv() {
    return this.httpClient.get<any[]>(this.urlGetAllResv);
    //return this.httpClient.get<any[]>('../../assets/data/resv.json');
  }

  storeResv(resv: any): Observable<string> {
    return this.httpClient.post(this.urlPostResv, resv, { responseType: 'text' });
  }

  updateResv(resvId: any): Observable<string> {
    return this.httpClient.put<string>(this.urlPutResv + '/resv/' + resvId, { responseType: 'text' });
  }

  patchResv(resvId: any): Observable<string> {
    return this.httpClient.patch<string>(this.urlPatchResv + '/resv/' + resvId, { responseType: 'text' });
  }

  getOneResv(resvId: any): Observable<string> {
    return this.httpClient.get(this.urlGetOneResv + resvId, { responseType: 'text' });
    //return this.httpClient.get<any[]>('../../assets/data/resv.json');
  }

  deleteResv(resvId: any): Observable<string> {
    return this.httpClient.delete(this.urlDelOneResv + resvId, { responseType: 'text' });
  }
}
