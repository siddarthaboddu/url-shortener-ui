import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";
import { User } from '../models/user';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http :HttpClient) { }

  login(email :String, password :String) : Promise<string> {
    let promise = new Promise<string>((resolve, reject)=>{
      this.http.post<any>('http://localhost:8080/token/login', {email, password}, {observe: 'response'})
      .subscribe(
        response => {
          console.log("log response:",response);  
          if(response.status == 200 || response.status == 201){
              console.log(response);
              this.setSession(response.body);
              console.log(this.getExpiration());
              resolve("SUCCESS");
            }
        },
        error => {
          console.log("Error  , :  ",error);
          if(error.status == 400){
            console.log("wrong credentials: ",error);
            reject("BAD_CREDENTIALS");
          }
          else{
            console.log("error experienced", error);
            reject("ERROR_EXPERIENCED");
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

  public isLoggedIn(): boolean {
    let expiresAt: moment.Moment = this.getExpiration();
    let now = moment();
    if(now < expiresAt) return true;
    return false; 
  }

  public getExpiration(){
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  public register(user: User): Promise<boolean>{
    return new Promise((resolve, reject)=>{
      this.http.post<any>('http://localhost:8080/token/register', user,{observe: 'response'})
      .subscribe(
        (response)=>{
          console.log("response status: ",response);
          if(response.body && response.body.status == "true"){
            console.log(response);
            resolve(true);
          }
          else{
            console.log(response);
            resolve(false);
          }
        },
        (error) => {
          console.log(error);
          resolve(false);
        }
      );
    });
  }

  public isExpired(): boolean {
    let expiresAt: moment.Moment = this.getExpiration();
    let now = moment();
    console.log("isExpired method ; now: ",now,"     |    expiredAt: ",expiresAt); 

    if(now > expiresAt) return true;
    return false;
  }

  public logout(): boolean{
    localStorage.removeItem("expires_at");
    localStorage.removeItem("access_token");
    return true;
  }

}
