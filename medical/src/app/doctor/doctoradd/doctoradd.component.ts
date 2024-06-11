import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, NumberValueAccessor } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-doctoradd',
  templateUrl: './doctoradd.component.html',
  styleUrls: ['./doctoradd.component.css']
})
export class DoctoraddComponent {

  onFileSelected(event: Event) {
    const file: File = (event.target as HTMLInputElement).files![0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.data.image = reader.result as string;
      };
    }
  }
  onPDFSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.deegreepdf = reader.result as string;
        this.pdfFileName = file.name; // Save the filename to show in UI
      };
    }
  }
  
  
  id!: number;

  name!: string;
  age!: number;
  email!: string;
  gender!: string;
  phone!: number;
  address!: string;
  dob!: Date;
  marital!: string;
  nation!: string;
  state!: string;
  city!: string;
  position!: string;
  specialization!: string;
  shift!: string;
  degree!: string; 
  year!: number;
  college!: string;
  previousexp!: string;
  ename!: string;
  ephone!: number;
  eemail!: string;
  eaddress!: string;
  image!: string;
  deegreepdf!: string;
  pdfFileName!: string;
  constructor(
    public dialogRef: MatDialogRef<DoctoraddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  
  saveData(): void {
    this.id = this.id+1;
     const newData = {
      id: this.id, // generate a UUID and include it in the object
      name: this.name,
      age: this.age,
      email: this.email,
      gender: this.gender,
      phone: this.phone,
      address: this.address,
      dob: this.dob,
      specialization: this.specialization,
      shift: this.shift,
      degree: this.degree,
      year: this.year,
      college: this.college,
      previousexp: this.previousexp,
      marital: this.marital,
      nation: this.nation,
      state: this.state,
      city: this.city,
      position: this.position,
      ename: this.ename,
      ephone: this.ephone,
      eemail: this.eemail,
      eaddress: this.eaddress,
      image: this.image,
      deegreepdf: this.deegreepdf,
      pdfFileName: this.pdfFileName,
    };
    console.log('id',this.id)
    console.log(this.data)
    this.dialogRef.close(this.data);
  }
  
  onCancelClick(): void {
    this.dialogRef.close();
  }


  
  
  
  }
  