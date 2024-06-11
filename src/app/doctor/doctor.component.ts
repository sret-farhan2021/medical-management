import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DoctoraddComponent } from './doctoradd/doctoradd.component';
import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { DoctoreditComponent } from './doctoredit/doctoredit.component';
import { MatPaginator } from '@angular/material/paginator';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';


export interface Data {
  id: number | null;
  name: string;
  age: number | null;
  email:string;
  gender: string;
  phone: number | null;
  address: string;
  dob: Date;
  specialization: string;
  shift: string;
  degree: string; 
  year: number | null;
  college: string;
  previousexp: string;
  ename: string;
  ephone: number | null;
  eemail: string;
  eaddress: string;
  marital: string;
  nation: string;
  state: string;
  city: string;
  position: string;
  image: string;
  deegreepdf: string;
  pdfFileName: string;
}
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  data: Data = {
    id: null,
    name: '',
    age: null,
    email: '',
    gender: '',
    phone: null,
    address: '',
    dob: new Date(),
    specialization: '',
    shift: '',
    degree: '', 
    year: null,
    college: '',
    previousexp: '',
    marital: '',
    nation: '',
    state: '',
    city: '',
    position: '',
    ename: '',
    ephone: null,
    eemail: '',
    eaddress: '',
    image: '',
    deegreepdf: '',
    pdfFileName: '',
  };

  displayedColumns: string[] = ['id','name', 'specialization','shift','phone','edit','detail','delete'];
  dataSource = new MatTableDataSource<Data>([]);
  dialogOpen = false;
  buttonsDisabled = false;
  

  constructor(private dialog: MatDialog,private http: HttpClient) {   }

  ngOnInit(): void {
    const storedData = localStorage.getItem('doctorData');
    if (storedData) {
      this.dataSource.data = JSON.parse(storedData);
  }
}
storeData(): void {
  localStorage.setItem('doctorData', JSON.stringify(this.dataSource.data));
}


addData(data: any) {
  const newData = {...data };
  this.dataSource.data = [...this.dataSource.data, newData];
  this.storeData();
}

  openAddDataDialog(): void {
    if (this.dialogOpen) {
      return;
    }
    const dialogConfig: MatDialogConfig = {
      width: '1150px',
      data: { // pass the initial data as an object
        id:'',
        name: '',
        age: null,
        email: '',
        gender: '',
        phone: null,
        address: '',
        dob: new Date(),
        specialization: '',
        shift: '',
        degree: '', 
        year: null,
        college: '',
        previousexp: '',
        marital: '',
        nation: '',
        state: '',
        city: '',
        position: '',
        ename: '',
        ephone: null,
        eemail: '',
        eaddress: '',
        image:'',
        deegreepdf: '',
        pdfFileName: '',
      },
      disableClose: true
    };
    
    const dialogRef = this.dialog.open(DoctoraddComponent, dialogConfig);
    this.dialogOpen = true;
    this.buttonsDisabled = true;
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogOpen = false;
      this.buttonsDisabled = false;
  
      if (result) {
        this.dataSource.data.push(result);
        this.dataSource.data = [...this.dataSource.data];
        localStorage.setItem('doctorData', JSON.stringify(this.dataSource.data));
      }
    });
  }

  editData(row: Data): void {
    if (this.dialogOpen) {
      return;
    }

    const index = this.dataSource.data.indexOf(row);
    if (index >= 0) {
      this.data = {
        id: row.id,
        name: row.name,
        age: row.age,
        email: row.email,
        gender: row.gender,
        phone: row.phone,
        address: row.address,
        dob: row.dob,
        specialization: row.specialization,
        shift: row.shift,
        degree: row.degree, 
        year: row.year,
        college: row.college,
        previousexp: row.previousexp,
        marital: row.marital,
        nation: row.nation,
        state: row.state,
        city: row.city,
        position: row.position,
        ename: row.ename,
        ephone: row.ephone,
        eemail: row.eemail,
        eaddress: row.eaddress,
        image: row.image,
        deegreepdf: row.deegreepdf,
        pdfFileName: row.pdfFileName,
      };
      const dialogConfig: MatDialogConfig = {
        width: '1150px',
        data: { data: row, dataSource: this.dataSource },
        disableClose: true
      };
      const dialogRef = this.dialog.open(DoctoreditComponent, dialogConfig);
      this.dialogOpen = true;
      this.buttonsDisabled = true;

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.dialogOpen = false;
        this.buttonsDisabled = false;

        if (result) {
          this.dataSource.data[index] = result;
          this.dataSource.data = [...this.dataSource.data];
          localStorage.setItem('doctorData', JSON.stringify(this.dataSource.data));
        }
      });
    }
  }

  showDetails(row: Data): void {
    if (this.dialogOpen) {
      return;
    }

    const dialogConfig: MatDialogConfig = {
      width: '800px',
      data: row,
      disableClose: true
    };

    const dialogRef = this.dialog.open(DoctordetailsComponent, dialogConfig);
    this.dialogOpen = true;
    this.buttonsDisabled = true;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogOpen = false;
      this.buttonsDisabled = false;
    });
  }
  deleteData(row: Data): void {
    console.log('Deleting data:', row);
    const index = this.dataSource.data.indexOf(row);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.dataSource.data = [...this.dataSource.data];
      localStorage.setItem('data', JSON.stringify(this.dataSource.data));
    }

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
