import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private flage$ = new Subject<any>()
  // private setFlag$ = new Subject<any>();

  constructor(private httpclient: HttpClient) { }
  baseURL = "https://fakestoreapi.com";
  getAllRiskData() {
    return this.httpclient.get(`${this.baseURL}/products/categories`);
  }

  getAllScoreData(){
    return this.httpclient.get(`${this.baseURL}/products`);
  }

  setFunctionCall(data:any){
    this.flage$.next(data);
  }

  getFlageData(){
    return this.flage$;
  }

}
