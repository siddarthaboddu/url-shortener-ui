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
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { NotificationService } from './services/notification.service';
import {NotifierOptions, NotifierModule} from 'angular-notifier';
import { AppTextScrambleComponent } from './app-text-scramble/app-text-scramble.component';

import { FlexLayoutModule } from '@angular/flex-layout';


/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 70,
      gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 10
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

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
    AppLogoutComponent,
    AppTextScrambleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [   
     AuthService,
     FreeUrlService,
     UrlService,
     UserService,
     NotificationService,
     {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
     {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

