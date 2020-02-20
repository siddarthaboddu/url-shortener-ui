import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http :HttpClient) { }

  login(email :String, password :String) : Promise<any> {
    let promise = new Promise((resolve, reject)=>{
      this.http.post<any>('http://localhost:8080/token/login', {email, password}).subscribe((response)=>{
        if(response.status == "200" || response.status != "201"){
          console.log(response);
          this.setSession(response);
          console.log(this.getExpiration());
          
          resolve(true);
        }
        else{
          console.log("error expereicne", response);
          resolve(false);
        }
      });
    })
    return promise;

  }

  private setSession(authResult) : boolean{
    console.log("expiresAT", authResult.expiresIn);
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    return true;
  }

  public isLoggedIn(){
    return !this.isLoggedIn();
  }

  public getExpiration(){
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
