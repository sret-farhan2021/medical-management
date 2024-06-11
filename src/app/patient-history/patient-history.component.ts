import { Component, OnInit,Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HistoryaddComponent } from './historyadd/historyadd.component';
import { HistorydetailsComponent } from './historydetails/historydetails.component';
import { HistoryeditComponent } from './historyedit/historyedit.component';

export interface Data {
  pid: string;
  pdiagnosis: string;
  hospital: string;
  patienttype: string;
  indid: string;
  inname: string;
  invisit: Date;
  inexit: Date;
  indep: string;
  inroom: string;
  inbed: string;
  insymptom: string;
  indiagnosis: string;
  intreatment: string;
  inoutcome: string;
  outdid: string;
  outname: string;
  outvisit: Date;
  outdep: string;
  outdiagnosis: string;
  outref: string;
  quantities: {qty: string, price: string}[];
  outsymptoms: {symptom: string,severity:string}[];
  insymptoms: {symptom: string,severity:string}[];
  inquantities: {qty: string, price: string}[];
  medicals: {image: string,file?: File}[];
  outmedicals: {image: string,file?: File}[];
}


@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit {

  data: Data = {
    pid: '',
    pdiagnosis: '',
    hospital: '',
    patienttype: '',
    indid: '',
    inname: '',
    invisit: new Date(),
    inexit: new Date(),
    indep: '',
    inroom: '',
    inbed: '',
    insymptom: '',
    indiagnosis: '',
    intreatment: '',
    inoutcome: '',
    outdid: '',
    outname: '',
    outvisit: new Date(),
    outdep: '',
    outdiagnosis: '',
    outref: '',
    quantities: [],
    outsymptoms: [],
    insymptoms: [],
    inquantities: [],
    medicals: [],
    outmedicals: [],
  };

  displayedColumns: string[] = ['id', 'PID','patienttype','edit','detail','delete'];
  dataSource = new MatTableDataSource<Data>([]);
  dialogOpen = false;
  buttonsDisabled = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      this.dataSource.data = JSON.parse(storedData);
  }
}
  openAddDataDialog(): void {
    if (this.dialogOpen) {
      return;
    }
    const dialogConfig: MatDialogConfig = {
      width: '950px',
      data: { // pass the initial data as an object

      },
      disableClose: true
    };
    
    const dialogRef = this.dialog.open(HistoryaddComponent, dialogConfig);
    this.dialogOpen = true;
    this.buttonsDisabled = true; 
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogOpen = false;
      this.buttonsDisabled = false;
  
      if (result) {
        this.dataSource.data.push(result);
        this.dataSource.data = [...this.dataSource.data];
        localStorage.setItem('data', JSON.stringify(this.dataSource.data));
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
        pid: row.pid,
        pdiagnosis: row.pdiagnosis,
        hospital: row.hospital,
        patienttype: row.patienttype,
        indid: row.indid,
        inname: row.inname,
        invisit: row.invisit,
        inexit: row.inexit,
        indep: row.indep,
        inroom: row.inroom,
        inbed: row.inbed,
        insymptom: row.insymptom,
        indiagnosis: row.indiagnosis,
        intreatment: row.intreatment,
        inoutcome: row.inoutcome,
        outdid: row.outdid,
        outname: row.outname,
        outvisit: row.outvisit,
        outdep: row.outdep,
        outdiagnosis: row.outdiagnosis,
        outsymptoms: row.outsymptoms,
        outref: row.outref,
        quantities: row.quantities,
        insymptoms: row.insymptoms,
        inquantities: row.inquantities,
        medicals: row.medicals,
        outmedicals: row.outmedicals
      };
      const dialogConfig: MatDialogConfig = {
        width: '950px',
        data: { data: row, dataSource: this.dataSource },
        disableClose: true
      };
      const dialogRef = this.dialog.open(HistoryeditComponent, dialogConfig);
      this.dialogOpen = true;
      this.buttonsDisabled = true;

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.dialogOpen = false;
        this.buttonsDisabled = false;

        if (result) {
          this.dataSource.data[index] = result;
          this.dataSource.data = [...this.dataSource.data];
          localStorage.setItem('data', JSON.stringify(this.dataSource.data));
        }
      });
    }
  }

  showDetails(row: Data): void {
    if (this.dialogOpen) {
      return;
    }

    const dialogConfig: MatDialogConfig = {
      width: '1000px',
      height: '500px',
      data: row,
      disableClose: true
    };

    const dialogRef = this.dialog.open(HistorydetailsComponent, dialogConfig);
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
