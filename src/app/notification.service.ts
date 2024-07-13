import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'YOUR_BACKEND_API_URL';

  constructor(private http: HttpClient) { }

  sendNotification(token: string, title: string, body: string): Observable<any> {
    const payload = { token, title, body };
    return this.http.post(`${this.apiUrl}/send-notification`, payload);
  }

  sendTextMessage(to: string, body: string): Observable<any> {
    const payload = { to, body };
    return this.http.post(`${this.apiUrl}/send-text-message`, payload);
  }
}