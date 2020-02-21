import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppRegisterComponent } from './app-register/app-register.component';
import { AppPricingComponent } from './app-pricing/app-pricing.component';
import { AppUserHomeComponent } from './app-user-home/app-user-home.component';
import { HeaderComponent } from './header/header.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {MaterialModuleModule} from './material-module/material-module.module';
import { HomeContentComponent } from './home-content/home-content.component'
import { AuthService } from './services/auth-service.service';
import { HttpInterceptorService } from './interceptor/http-interceptor.service';
import { FreeUrlService } from './services/free-url.service';
import { UrlService } from './services/url.service';
import { UserService } from './services/user.service';
import { AppLogoutComponent } from './app-logout/app-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppLoginComponent,
    AppRegisterComponent,
    AppPricingComponent,
    AppUserHomeComponent,
    HeaderComponent,
    UserHeaderComponent,
    HomeContentComponent,
    AppLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [   
     AuthService,
     FreeUrlService,
     UrlService,
     UserService,
     {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
