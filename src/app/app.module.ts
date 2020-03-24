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
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AllVisitsChartComponent } from './all-visits-chart/all-visits-chart.component';
import { ListOfUrlsComponent } from './list-of-urls/list-of-urls.component';
import { UserShortenUrlComponent } from './user-shorten-url/user-shorten-url.component';
import { UserShortenUrlDialogComponent } from './user-shorten-url-dialog/user-shorten-url-dialog.component';
import { UserShortenUrlResponseDialogComponent } from './user-shorten-url-response-dialog/user-shorten-url-response-dialog.component';

import { SimplebarAngularModule } from 'simplebar-angular';
import { UrlDetailsComponent } from './url-details/url-details.component';
import { ShortUrlRedirectComponent } from './short-url-redirect/short-url-redirect.component';

import { ShareButtonsModule } from '@ngx-share/buttons';
import { UrlVisitsChartComponent } from './url-visits-chart/url-visits-chart.component';
import { UrlRefererChartComponent } from './url-referer-chart/url-referer-chart.component';

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
    AllVisitsChartComponent,
    ListOfUrlsComponent,
    UserShortenUrlComponent,
    UserShortenUrlDialogComponent,
    UserShortenUrlResponseDialogComponent,
    UrlDetailsComponent,
    ShortUrlRedirectComponent,
    UrlVisitsChartComponent,
    UrlRefererChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    NotifierModule.withConfig(customNotifierOptions),
    NgxChartsModule,
    SimplebarAngularModule,
    ShareButtonsModule.withConfig({
      debug: true
    })
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

