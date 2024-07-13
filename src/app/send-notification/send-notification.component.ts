import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css']
})
export class SendNotificationComponent {
  token: string = '';
  title: string = '';
  body: string = '';
  phoneNumber: string = '';
  textMessage: string = '';

  constructor(private notificationService: NotificationService) { }

  sendNotification() {
    this.notificationService.sendNotification(this.token, this.title, this.body).subscribe(response => {
      console.log('Notification sent', response);
    }, error => {
      console.error('Error sending notification', error);
    });
  }

  sendTextMessage() {
    this.notificationService.sendTextMessage(this.phoneNumber, this.textMessage).subscribe(response => {
      console.log('Text message sent', response);
    }, error => {
      console.error('Error sending text message', error);
    });
  }
}