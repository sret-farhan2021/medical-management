import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Data } from '../doctor.component';

@Component({
  selector: 'app-doctordetails',
  templateUrl: './doctordetails.component.html',
  styleUrls: ['./doctordetails.component.css']
})
export class DoctordetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<DoctordetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }

}

