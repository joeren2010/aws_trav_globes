import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IpaddyService } from './ipaddy.service';

@Injectable({
  providedIn: 'root',
})
export class CabcategoryService {
  constructor(
    public httpClient: HttpClient, public ipaddyService: IpaddyService
  ) { }

  ec2Ip: string = this.ipaddyService.getIpAddy();           //ip-addy from ec2
  private urlPostCat: string = 'http://' + this.ec2Ip + ':7171/category/storeCategory';
  private urlGetAllCat: string = 'http://' + this.ec2Ip + ':7171/category/findCategory';
  private urlGetOneCat: string = 'http://' + this.ec2Ip + ':7171/category/findCategoryById';
  private urlDelAllCat: string = 'http://' + this.ec2Ip + ':7171/category/deleteAll';
  private urlDelOneCat: string = 'http://' + this.ec2Ip + ':7171/category/deleteCategoryById/';
  private urlPutCat: string = 'http://' + this.ec2Ip + ':3000/meetings/';
  private urlPatchCat: string = 'http://' + this.ec2Ip + ':3000/meetings/';
  private urlCalCat: string = 'http://' + this.ec2Ip + ':3000/calen.php/';
  private urlMtgCat: string = 'http://' + this.ec2Ip + ':3000/calen.php/';
  private urlApiCat: string = 'https://fakestoreapi.com/projects';
  private urlLocCat: string = 'http://' + this.ec2Ip + ':3000/meetings';
  private urlComCat: string = './../../assets/data/meetingsCom.json';

  getCategory() {
    return this.httpClient.get<any[]>(this.urlGetAllCat);
    //return this.httpClient.get<any[]>('../../assets/data/cabcategory.json');
  }

  getAllCategory() {
    //return this.httpClient.get<any[]>(this.urlGetAllCat);
    return this.httpClient.get<any[]>('../../assets/data/cabcategory.json');
  }

  getOneCategory(categoryId: number) {
    return this.httpClient.get(this.urlGetOneCat + categoryId, { responseType: 'text' });
    //return this.httpClient.get<any[]>('../../assets/data/cabcategory.json');
  }

  storeCategory(category: any): Observable<string> {
    return this.httpClient.post(this.urlPostCat, category, { responseType: 'text' });
  }

  deleteCategory(categoryId: any): Observable<string> {
    return this.httpClient.delete(this.urlDelOneCat + categoryId, { responseType: 'text' });
  }
}
