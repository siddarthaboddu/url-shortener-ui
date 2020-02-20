import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log("HttpInterceptor");

    const accessToken = localStorage.getItem("access_token");
    let newHeaders = req.headers
    .append("Access-Control-Allow-Origin", "http://localhost:4200")
    .append("Access-Control-Allow-Methods","POST")
    .append("Access-Control-Allow-Headers","application/json");

    if(accessToken){
      newHeaders = newHeaders.append("Authorization", "Bearer "+accessToken);
    }

    req = req.clone({headers: newHeaders});
    console.log(req);
    console.log(req.headers);
    return next.handle(req);
  }
}
