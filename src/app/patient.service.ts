import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './patient/patient.component';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private baseUrl = 'http://localhost:3000/api/patients';

  constructor(private http: HttpClient) {}

  // Method to save patient data to the backend
  savePatientData(patientData: Data): Observable<Data> {
    return this.http.post<Data>(this.baseUrl, patientData);
  }

  // Method to update patient data on the backend
  updatePatientData(patientData: Data): Observable<Data> {
    return this.http.put<Data>(`${this.baseUrl}/${patientData.pid}`, patientData);
  }

  // Method to fetch all patients from the backend
  getPatients(): Observable<Data[]> {
    return this.http.get<Data[]>(this.baseUrl);
  }

 // Function to delete a patient
deletePatient(patient: Data): Observable<void> {
  const url = `${this.baseUrl}/${patient._id}`;
  return this.http.delete<void>(url);
}
}
