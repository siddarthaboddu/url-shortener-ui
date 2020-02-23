import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  public freeShortenUrl(url: String) : Promise<any> {
    return new Promise<String>((resolve,reject)=>{this.httpClient.post<any>("http://localhost:8080/free/api/shorten",{
      url: url,
      passwordEnabled: false,
      password: ""
    },{observe: "response"}).subscribe((response)=>{
      if(response.status == 201){
        console.log("successful ,:",response.body);
        resolve(response.body);
      }
      else{
        if(response.status == 509)
          throw new Error("BANDWIDTH_LIMIT_EXCEEDED");
        else
          throw new Error("ERROR_EXPERIENCED");
      }
    });
  });
}
  
}
