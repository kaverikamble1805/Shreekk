import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactUs } from '../models/contact-us';
// import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  // private apiUrl = `${environment.apiUrl}/AddContactUs`;
  private apiUrl =
    'https://shreeshaktitemple.org.uk/shreeshaktiAPI/ContactForms/create_contact.php';

  // constructor(private http: HttpClient) {}

  // addContactUs(data: ContactUs): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, data);
  // }

  constructor(private http: HttpClient) {}

  addContactUs(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
