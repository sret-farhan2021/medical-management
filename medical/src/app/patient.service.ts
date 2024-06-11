import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './patient/patient.component'; 

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  // Method to save patient data to the backend
  savePatientData(patientData: Data): Observable<Data> {
    return this.http.post<Data>(`${this.baseUrl}/patients`, patientData);
  }

  // Method to update patient data on the backend
  updatePatientData(patientData: Data): Observable<Data> {
    return this.http.put<Data>(`${this.baseUrl}/patients/${patientData.pid}`, patientData);
  }

  // Add more methods as needed for other CRUD operations (e.g., deletePatientData)
}
