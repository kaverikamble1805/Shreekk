import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VolunteeringService {
  private apiUrl =
    'https://shreeshaktitemple.org.uk/shreeshaktiAPI/ContactForms/create_volunteer.php';

  constructor(private http: HttpClient) {}

  addVolunteer(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
