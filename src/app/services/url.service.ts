import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// var validUrl = require('valid-url');
import * as validUrl from 'valid-url';
import { error } from 'protractor';
import { Url } from '../models/url';
import { resolve } from 'dns';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  
  validUrlPassword(urlForm: Url) :Promise<Status> {
    return new Promise<Status>((resolve, reject)=>{
      this.httpClient.post<Status>("http://localhost:8080/free/api/url/validPassword",urlForm)
      .subscribe(response => {
        resolve(response);
      },
      error=>{
        reject(error);
      })
    });   
  }

  constructor(private httpClient: HttpClient) { }

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
      this.httpClient.get<Url[]>("http://localhost:8080/api/urls")
      .subscribe(response=>{
        // console.log("response :",response);
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
        reject(error);
      });
    });
  }


  public fetchUrlDetails(id: number) : Promise<Url>{
    return new Promise<Url>((resolve, reject)=>{
      this.httpClient.get<Url>(`http://localhost:8080/api/url/${id}`)
      .subscribe(response=>{
        resolve(response);
      },
      error=>{
        reject(error);
      }
      )
    });
  }
d

  public getLongUrl(shortCode: string) : Promise<Url>{
    const headers = {
      responseType: 'text'
    }
    return new Promise<Url>((resolve, reject)=>{
      this.httpClient.get<Url>(`http://localhost:8080/free/api/longUrl/${shortCode}`,{headers})
      .subscribe(response =>{
        console.log("respone service: ",response);
        resolve(response);
      },
      error => {
        reject(error);
      });
    });
  }

  public fetchOneMonthAllVisitsHistory() : Promise<any>{
    return new Promise<any>((resolve, reject)=>{
      this.httpClient.get<any>('http://localhost:8080/api/url/history/last30Days/all')
      .subscribe(response =>{
        // console.log("history one month: ",response);
        resolve(response);
      },
      error=>{
        reject(error);
      });
    })
  }

  public fetchOneYearAllVisitsHistory() :Promise<any> {
    return new Promise<any>((resolve, reject)=>{
      this.httpClient.get<any>('http://localhost:8080/api/url/history/last1Year/all')
      .subscribe(response =>{
        // console.log("history one month: ",response);
        resolve(response);
      },
      error=>{
        reject(error);
      });
    })
  }
  

  public fetchOneMonthUrlVisitsHistory(urlId :any) : Promise<any>{
    
    let params :HttpParams = new HttpParams().set("urlId", urlId);

    return new Promise<any>((resolve, reject)=>{
      this.httpClient.get<any>('http://localhost:8080/api/url/history/last30Days/all', {params})
      .subscribe(response =>{
        // console.log("history one month: ",response);
        resolve(response);
      },
      error=>{
        reject(error);
      });
    })
  }

  public fetchOneYearUrlVisitsHistory(urlId :any) :Promise<any> {
    
    let params :HttpParams = new HttpParams().set("urlId", urlId);
    
    return new Promise<any>((resolve, reject)=>{
      this.httpClient.get<any>('http://localhost:8080/api/url/history/last1Year/all', {params})
      .subscribe(response =>{
        // console.log("history one month: ",response);
        resolve(response);
      },
      error=>{
        reject(error);
      });
    })
  }

}
