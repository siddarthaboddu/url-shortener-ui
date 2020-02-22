import { Injectable } from '@angular/core';
import { NotifierService, NotifierOptionsToken } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notifierService: NotifierService) { }

  triggerNotification(message: string, type: string = 'success'){
    console.log("notification Triggered: message: ",message,"   | type: ",type);
    this.notifierService.show({
      message: message,
      type: type,
    });
  }
}
