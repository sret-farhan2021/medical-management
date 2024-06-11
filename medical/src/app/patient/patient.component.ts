import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PatientaddComponent } from './patientadd/patientadd.component';
import { PatienteditComponent } from './patientedit/patientedit.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';

export interface Data {
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

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    const storedData = localStorage.getItem('patientData');
    if (storedData) {
      this.dataSource.data = JSON.parse(storedData);
    }
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
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogOpen = false;
      this.buttonsDisabled = false;
    
      if (result) {
        // Store the new data in the local storage
        const storedData = localStorage.getItem('patientData');
        let data = [];
        if (storedData) {
          data = JSON.parse(storedData);
        }
        data.push(result);
        localStorage.setItem('patientData', JSON.stringify(data));
  
        // Update the dataSource for the table
        this.dataSource.data = data;
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
    did:row.did,
    dname:row.dname,
    pid:row.pid,
    name: row.name,
    age: row.age,
    email: row.email,
    gender: row.gender,
    phone: row.phone,
    address: row.address,
    dob: row.dob,
    reffered: row.reffered,
    blood: row.blood,
    disease: row.disease,
    surgery: row.surgery,
    vaccination: row.vaccination,
    habit: row.habit,
    dov: row.dov,
    vno: row.vno,
    cough: row.cough,
    coughremarks: row.coughremarks,
    breath: row.breath,
    breathremarks: row.breathremarks,
    sputum: row.sputum,
    sputumremarks: row.sputumremarks,
    hemoptysis: row.hemoptysis,
    hemoremarks: row.hemoremarks,
    chestpain: row.chestpain,
    chestremarks: row.chestremarks,
    fever: row.fever,
    feverremarks: row.feverremarks,
    wheeze: row.wheeze,
    wheezeremarks: row.wheezeremarks,
    allergy: row.allergy,
    allergyremarks: row.allergyremarks,
    lweight: row.lweight,
    weight: row.weight,
    height: row.height,
    bmi: row.bmi,
    temp: row.temp,
    pr: row.pr,
    spo: row.spo,
    bp: row.bp,
    dm: row.dm,
    sht: row.sht,
    smoke: row.smoke,
    drink: row.drink,
    att: row.att,
    anemia: row.anemia,
    anemiaremarks: row.anemiaremarks,
    cyan: row.cyan,
    cyanremarks: row.cyanremarks,
    club: row.club,
    clubremarks: row.clubremarks,
    lymph: row.lymph,
    lymphremarks: row.lymphremarks,
    edema: row.edema,
    edemaremarks: row.edemaremarks,
    icterus: row.icterus,
    ictremarks: row.ictremarks,
    jvp: row.jvp,
    jvpremarks: row.jvpremarks,
    cvs: row.cvs,
    cvsremarks: row.cvsremarks,
    pefr: row.pefr,
    pefrremarks: row.pefrremarks,
    rsleft: row.rsleft,
    rsleftremarks: row.rsleftremarks,
    rsright: row.rsright,
    rsrightremarks: row.rsrightremarks,
    pa: row.pa,
    paremarks: row.paremarks,
    cns: row.cns,
    cnsremarks: row.cnsremarks,
    ct: row.ct,
    ctremarks: row.ctremarks,
    ctru: row.ctru,
    ctruremarks: row.ctruremarks,
    ctrm: row.ctrm,
    ctrmremarks: row.ctrmremarks,
    ctrl: row.ctrl,
    ctrlremarks: row.ctrlremarks,
    ctlu: row.ctlu,
    ctluremarks: row.ctluremarks,
    ctlm: row.ctlm,
    ctlmremarks: row.ctlmremarks,
    ctll:row.ctll,
    ctllremarks: row.ctllremarks,
    quantities: row.quantities,
    predata: row.predata,
    adata: row.adata,
    pdfFileNames: row.pdfFileNames,
    pdfFiles: row.pdfFiles,
    coughno: row.coughno,
    t2dm: row.t2dm,
    shd: row.shd,
    cad: row.cad,
    cva: row.cva,
    seizure: row.seizure,
    namemedicines: row.namemedicines,
    numberofyears: row.numberofyears,
    xctru: row.xctru,
    xctruremarks: row.xctruremarks,
    xctrm: row.xctrm,
    xctrmremarks: row.xctrmremarks,
    xctrl: row.xctrl,
    xctrlremarks: row.xctrlremarks,
    xctlu: row.xctlu,
    xctluremarks: row.xctluremarks,
    xctlm: row.xctlm,
    xctlmremarks: row.xctlmremarks,
    xctll: row.xctll,
    xctllremarks: row.xctllremarks,
    numberofcig: row.numberofcig,
  numbersmoke: row.numbersmoke,
  numberofdrink: row.numberofdrink,
  safb: row.safb,
  afb: row.afb,
  lpa: row.lpa,
  agr: row.agr,
  biochemliver: row.biochemliver,
  urine: row.urine,
  electro: row.electro,
  biochemrenal: row.biochemrenal,
  wbccount: row.wbccount,
  cbctests: row.cbctests
  };
      const dialogConfig: MatDialogConfig = {
        width: '1150px',
        data: { data: row, dataSource: this.dataSource },
        disableClose: true
      };
      const dialogRef = this.dialog.open(PatienteditComponent, dialogConfig);
      this.dialogOpen = true;
      this.buttonsDisabled = true;

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.dialogOpen = false;
        this.buttonsDisabled = false;
        if (result) {
          // Update the local data
          this.dataSource.data[index] = result;
          this.dataSource.data = [...this.dataSource.data];
          localStorage.setItem('patientData', JSON.stringify(this.dataSource.data));
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
    const index = this.dataSource.data.indexOf(row);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.dataSource.data = [...this.dataSource.data];
      localStorage.setItem('patientData', JSON.stringify(this.dataSource.data));
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
