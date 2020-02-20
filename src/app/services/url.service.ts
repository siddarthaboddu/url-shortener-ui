import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private httpClient: HttpClient) { }

 

  public fetchAllLinks(): Promise<[]>{
    return new Promise<[]>((resolve, reject)=>{
      this.httpClient.get<any>("http://localhost:8080/api/links").subscribe((response)=>{
        if(response.status == '200'){
          resolve(response.body);
        }
        else{
          resolve([]);
        }
      }
      );
    });
    
  }
}
