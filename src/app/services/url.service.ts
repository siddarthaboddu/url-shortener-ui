import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// var validUrl = require('valid-url');
import * as validUrl from 'valid-url';
import { error } from 'protractor';
import { Url } from '../models/url';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private httpClient: HttpClient) { }

  // public fetchAllLinks(): Promise<[]>{
  //   return new Promise<[]>((resolve, reject)=>{
  //     this.httpClient.get<any>("http://localhost:8080/api/links").subscribe((response)=>{
  //       if(response.status == '200'){
  //         resolve(response.body);
  //       }
  //       else{
  //         resolve([]);
  //       }
  //     }
  //     );
  //   });
    
  // }

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
    },
    (error)=>{
      console.log("__________________________");
      console.log(error);
      console.log("__________________________");
      if(error.status == 509)
        reject(new Error("BANDWIDTH_LIMIT_EXCEEDED"));
      else
        reject(new Error("ERROR_EXPERIENCED"));
    });
  });
}
  public validUrl(url: String): boolean {
    return validUrl.isUri(url);
  }

  public fetchAllUrls() : Promise<Url[]> {
    return new Promise<Url[]>((resolve, reject)=>{
      this.httpClient.get<Url[]>("http://localhost:8080/api/links")
      .subscribe(response=>{
        console.log("response :",response);
        resolve(response);
      },
      error=>{
        throw Error("ERROR_EXPERIENCED");
      });
    });
  }

  public userShortenUrl(url: Url) : Promise<Url> {
    return new Promise<Url>((resolve, reject)=>{
      this.httpClient.post<Url>("http://localhost:8080/api/shorten", {
        url: url.longUrl,
        passwordEnabled: url.isPasswordProtected,
        password: url.password
      })
      .subscribe(response=>{
        response.longUrl = response.originalUrl;
        console.log("user url shorten response: ", response);
        resolve(response);
      },
      error=>{
        // throw Error("ERROR_EXPERIENCED");
        reject(error);
      });
    });
  }

  
}
