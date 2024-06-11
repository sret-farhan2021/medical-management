import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PatientaddComponent } from './patientadd/patientadd.component';
import { PatienteditComponent } from './patientedit/patientedit.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs';

export interface Data {
  _id: string; // Make sure this field is present
  quantities: {med: string, qty: string, method:string}[];
  predata: { images: string } [];
  adata: {images: string} [];
  pdfFileNames:string[] ;
  pdfFiles: File[];
  agr: { name: string, value: string, flag: string;} [];
  biochemliver: { name: string, value: string, flag: string;} [];
  urine: { name: string, value: string, flag: string;} [];
  electro: { name: string, value: string, flag: string;} [];
  biochemrenal: { name: string, value: string, flag: string;} [];
  wbccount: { name: string, value: string, flag: string;} [];
  cbctests: { name: string, value: string, flag: string;} [];
  did: string;
  dname: string;
  pid: string;
  name: string;
  age: number | null;
  email: string;
  gender: string;
  phone: number |null;
  address: string;
  dob: Date;
  blood: string;
  disease: string; 
  surgery: string;
  vaccination: string;
  habit: string;
  dov: string;
  reffered: string;
  vno: number | null;
  cough: string;
  coughremarks: string;
  breath: string;
  breathremarks: string;
  sputum: string;
  sputumremarks: string;
  hemoptysis: string;
  hemoremarks: string;
  chestpain: string;
  chestremarks: string;
  fever: string;
  feverremarks: string;
  wheeze: string;
  wheezeremarks: string;
  allergy: string;
  allergyremarks: string;
  lweight: number | null;
  weight: number | null;
  height: number | null;
  bmi: number | null;
  temp: number | null; 
  pr: number | null;
  spo: number | null;
  bp: string;
  dm: string;
  sht: string;
  smoke: string;
  drink: string;
  att: string;
  anemia: string;
  anemiaremarks: string;
  cyan: string;
  cyanremarks: string;
  club: string;
  clubremarks: string;
  lymph: string;
  lymphremarks: string;
  edema: string;
  edemaremarks: string;
  icterus: string;
  ictremarks: string;
  jvp: string;
  jvpremarks: string;
  cvs: string;
  cvsremarks: string;
  pefr: string;
  pefrremarks: string;
  rsleft: string;
  rsleftremarks: string;
  rsright: string;
  rsrightremarks: string;
  pa: string;
  paremarks: string;
  cns: string;
  cnsremarks: string;
  ct: string;
  ctremarks: string;
  ctru: string;
  ctruremarks: string;
  ctrm: string;
  ctrmremarks: string;
  ctrl: string;
  ctrlremarks: string;
  ctlu: string;
  ctluremarks: string;
  ctlm: string;
  ctlmremarks: string;
  ctll: string;
  ctllremarks: string;
  coughno: number | null;
  t2dm:string;
  shd:string;
  cad:string;
  cva:string;
  seizure:string;
  namemedicines:string;
  numberofyears:string;
  xctru:string;
  xctruremarks:string;
  xctrm:string;
  xctrmremarks:string;
  xctrl:string;
  xctrlremarks:string;
  xctlu:string;
  xctluremarks:string;
  xctlm:string;
  xctlmremarks:string;
  xctll:string;
  xctllremarks:string;
  safb:string;
  afb:string;
  lpa:string;
  numberofcig: number | null;
  numbersmoke: number | null;
  numberofdrink: number | null;
}

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  data: Data = {
    _id:'',
    did:'',
    dname:'',
    pid:'',
    name: '',
    age: null,
    email: '',
    gender: '',
    phone: null,
    address: '',
    dob: new Date(),
    blood: '',
    disease: '',
    surgery: '',
    vaccination: '',
    habit: '',
    dov: '',
    reffered: '',
    vno: null,
    cough: '',
    coughremarks: '',
    breath: '',
    breathremarks: '',
    sputum: '',
    sputumremarks: '',
    hemoptysis: '',
    hemoremarks: '',
    chestpain: '',
    chestremarks: '',
    fever: '',
    feverremarks: '',
    wheeze: '',
    wheezeremarks: '',
    allergy: '',
    allergyremarks: '',
    lweight: null,
    weight: null,
    height: null,
    bmi: null,
    temp: null,
    pr: null,
    spo: null,
    bp: '',
    dm: '',
    sht: '',
    smoke: '',
    drink: '',
    att: '',
    anemia: '',
    anemiaremarks: '',
    cyan: '',
    cyanremarks: '',
    club: '',
    clubremarks: '',
    lymph: '',
    lymphremarks: '',
    edema: '',
    edemaremarks: '',
    icterus: '',
    ictremarks: '',
    jvp: '',
    jvpremarks: '',
    cvs: '',
    cvsremarks: '',
    pefr: '',
    pefrremarks: '',
    rsleft: '',
    rsleftremarks: '',
    rsright: '',
    rsrightremarks: '',
    pa: '',
    paremarks: '',
    cns: '',
    cnsremarks: '',
    ct: '',
    ctremarks: '',
    ctru: '',
  ctruremarks: '',
  ctrm: '',
  ctrmremarks: '',
  ctrl: '',
  ctrlremarks: '',
  ctlu: '',
  ctluremarks: '',
  ctlm: '',
  ctlmremarks: '',
  ctll:'',
  ctllremarks: '',
    quantities:[],
    predata: [],
    adata: [],
    pdfFileNames: [] ,
    pdfFiles: [],
    coughno: null,
    t2dm:'',
    shd:'',
    cad:'',
    cva:'',
    seizure:'',
    namemedicines:'',
    numberofyears:'',
    xctru:'',
    xctruremarks:'',
    xctrm:'',
    xctrmremarks:'',
    xctrl:'',
    xctrlremarks:'',
    xctlu:'',
    xctluremarks:'',
    xctlm:'',
    xctlmremarks:'',
    xctll:'',
    xctllremarks:'',
    numberofcig: null,
  numbersmoke: null,
  numberofdrink: null,
  safb:'',
  afb:'',
  lpa:'',
  agr: [],
biochemliver: [],
urine: [],
electro: [],
biochemrenal: [],
wbccount: [],
cbctests: [],
  };

  displayedColumns: string[] = ['id','name', 'age','edit','detail','delete'];
  dataSource = new MatTableDataSource<Data>([]);
  dialogOpen = false;
  buttonsDisabled = false;

  constructor(private dialog: MatDialog,private http: HttpClient){}
  private readonly apiUrl = 'http://localhost:3000/api/patients'; // Update with your backend API endpoint
  ngOnInit(): void {
    const storedData = localStorage.getItem('patientData');
    if (storedData) {
      this.dataSource.data = JSON.parse(storedData);
      this.fetchPatients();
    }
    
  }

  // Function to fetch patients from the backend
  fetchPatients(): void {
    this.http.get<Data[]>(this.apiUrl).subscribe(
      (patients) => {
        this.dataSource.data = patients;
      },
      (error) => {
        console.error('Error fetching patients:', error);
      }
    );
  }

  savePatient(patient: Data): Observable<Data> {
    return this.http.post<Data>(this.apiUrl, patient);
  }

  // Function to update an existing patient using _id
updatePatient(patient: Data): Observable<Data> {
  const url = `${this.apiUrl}/${patient._id}`; // Change pid to _id
  return this.http.put<Data>(url, patient);
}


// Function to delete a patient
deletePatient(patient: Data): Observable<void> {
  const url = `${this.apiUrl}/${patient._id}`;
  return this.http.delete<void>(url);
}

  openAddDataDialog(): void {
    const dialogConfig: MatDialogConfig = {
      width: '1150px',
      data: { // pass the initial data as an object
        did:'',
    dname:'',
    pid:'',
    name: '',
    age: null,
    email: '',
    gender: '',
    phone: null,
    address: '',
    dob: new Date(),
    blood: '',
    disease: '',
    surgery: '',
    vaccination: '',
    habit: '',
    dov: '',
    vno: null,
    cough: '',
    coughremarks: '',
    breath: '',
    breathremarks: '',
    sputum: '',
    sputumremarks: '',
    hemoptysis: '',
    hemoremarks: '',
    chestpain: '',
    chestremarks: '',
    fever: '',
    feverremarks: '',
    wheeze: '',
    wheezeremarks: '',
    allergy: '',
    allergyremarks: '',
    lweight: null,
    weight: null,
    height: null,
    bmi: null,
    temp: null,
    pr: null,
    spo: null,
    bp: '',
    dm: '',
    sht: '',
    smoke: '',
    drink: '',
    att: '',
    anemia: '',
    anemiaremarks: '',
    cyan: '',
    cyanremarks: '',
    club: '',
    clubremarks: '',
    lymph: '',
    lymphremarks: '',
    edema: '',
    edemaremarks: '',
    icterus: '',
    ictremarks: '',
    jvp: '',
    jvpremarks: '',
    cvs: '',
    cvsremarks: '',
    pefr: '',
    pefrremarks: '',
    rsleft: '',
    rsleftremarks: '',
    rsright: '',
    rsrightremarks: '',
    pa: '',
    paremarks: '',
    cns: '',
    cnsremarks: '',
    ct: '',
    ctremarks: '',
    ctru: '',
  ctruremarks: '',
  ctrm: '',
  ctrmremarks: '',
  ctrl: '',
  ctrlremarks: '',
  ctlu: '',
  ctluremarks: '',
  ctlm: '',
  ctlmremarks: '',
  ctll:'',
  ctllremarks: '',
  coughno: null,
  t2dm:'',
  shd:'',
  cad:'',
  cva:'',
  seizure:'',
  namemedicines:'',
  numberofyears:'',
  xctru:'',
  xctruremarks:'',
  xctrm:'',
  xctrmremarks:'',
  xctrl:'',
  xctrlremarks:'',
  xctlu:'',
  xctluremarks:'',
  xctlm:'',
  xctlmremarks:'',
  xctll:'',
  xctllremarks:'',
  numberofcig: null,
  numbersmoke: null,
  numberofdrink: null,
  safb:'',
  afb:'',
  lpa:'',

      },
      disableClose: true
    };
    
    const dialogRef = this.dialog.open(PatientaddComponent, dialogConfig);
    this.dialogOpen = true;
    this.buttonsDisabled = true;
    
    dialogRef.afterClosed().subscribe((result: Data) => {
      console.log('The dialog was closed');
      this.dialogOpen = false;
      this.buttonsDisabled = false;
    
      if (result) {
        // Save the new patient to the backend
        this.savePatient(result).subscribe(
          (newPatient) => {
            // Update the local data with the new patient
            const data = [...this.dataSource.data, newPatient];
            this.dataSource.data = data;
            localStorage.setItem('patientData', JSON.stringify(data));
          },
          (error) => {
            console.error('Error saving patient:', error);
          }
        );
      }
    });
  }
  

  editData(row: Data): void {
    if (this.dialogOpen) {
      return;
    }
  
    const index = this.dataSource.data.indexOf(row);
    if (index >= 0) {
      const dialogConfig: MatDialogConfig = {
        width: '1150px',
        data: { data: row, dataSource: this.dataSource },
        disableClose: true
      };
  
      const dialogRef = this.dialog.open(PatienteditComponent, dialogConfig);
      this.dialogOpen = true;
      this.buttonsDisabled = true;
  
      dialogRef.afterClosed().subscribe((result: Data) => {
        console.log('The dialog was closed');
        this.dialogOpen = false;
        this.buttonsDisabled = false;
  
        if (result) {
          // Update the patient in the backend
          this.updatePatient(result).subscribe(
            () => {
              // Update the local data with the edited patient using _id
              const data = [...this.dataSource.data];
              const index = data.findIndex((p) => p._id === result._id);
              if (index >= 0) {
                data[index] = result;
                this.dataSource.data = data;
                localStorage.setItem('patientData', JSON.stringify(data));
              }
            },
            (error) => {
              console.error('Error updating patient:', error);
            }
          );
        }
      });
    }
  }


  showDetails(row: Data): void {
    if (this.dialogOpen) {
      return;
    }

    const dialogConfig: MatDialogConfig = {
      width: '850px',
      data: row,
      disableClose: true
    };

    const dialogRef = this.dialog.open(PatientdetailsComponent, dialogConfig);
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
  
    // Delete the patient from the backend using _id
    this.deletePatient(row).subscribe(
      () => {
        // Update the local data by removing the deleted patient using _id
        const data = [...this.dataSource.data];
        const index = data.findIndex((p) => p._id === row._id);
        if (index >= 0) {
          data.splice(index, 1);
          this.dataSource.data = [...data];
          localStorage.setItem('patientData', JSON.stringify(data));
        }
      },
      (error) => {
        console.error('Error deleting patient:', error);
        // Handle the error as needed, e.g., show an alert
      }
    );
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
