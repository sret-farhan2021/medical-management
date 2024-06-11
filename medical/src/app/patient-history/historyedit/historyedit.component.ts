import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '../patient-history.component';

export interface DialogData {
  data: Data;
  dataSource: MatTableDataSource<Data>;
}

@Component({
  selector: 'app-historyedit',
  templateUrl: './historyedit.component.html',
  styleUrls: ['./historyedit.component.css']
})
export class HistoryeditComponent implements OnInit {
  quantities: {qty: string, price: string}[] = [];

  addQuantity() {
    this.quantities.push({qty: '', price: ''});
  }

  removeQuantity(index: number) {
    this.quantities.splice(index, 1);
  }

  print() {
    console.log(this.quantities);
  }
  outsymptoms: {symptom: string,severity: string}[] = [];

  addoutsymptom() {
    this.outsymptoms.push({symptom:'', severity: ''});
  }

  removeoutsymptom(index: number) {
    this.outsymptoms.splice(index, 1);
  }

  insymptoms: {symptom: string, severity: string}[] = [];

  addinsymptom() {
    this.insymptoms.push({symptom:'', severity: ''});
  }

  removeinsymptom(index: number) {
    this.insymptoms.splice(index, 1);
  }

  inquantities: {qty: string, price: string}[] = [];

  addinQuantity() {
    this.inquantities.push({qty: '', price: ''});
  }

  removeinQuantity(index: number) {
    this.inquantities.splice(index, 1);
  }

  medicals: {image: string,file?: File}[] = [];

  addmedical() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.dcm';
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataUrl = reader.result as string;
        this.medicals.push({
          file: file.name,
          image: dataUrl,
        });
      };
      reader.onerror = (error) => console.log(`Error: ${error}`);
    };
    fileInput.click();
  }

  removemedical(index: number) {
    this.medicals.splice(index, 1);
  }

  outmedicals: {image: string,file?: File}[] = [];

  addoutmedical() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.dcm';
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataUrl = reader.result as string;
        this.outmedicals.push({
          file: file.name,
          image: dataUrl,
        });
      };
      reader.onerror = (error) => console.log(`Error: ${error}`);
    };
    fileInput.click();
  }
  removeoutmedical(index: number) {
    this.outmedicals.splice(index, 1);
  }
  
  editedData: Data;

  constructor(
    public dialogRef: MatDialogRef<HistoryeditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.editedData = { ...data.data };
    }

    ngOnInit() {
      if (this.editedData && this.editedData.quantities) {
        this.quantities = [...this.editedData.quantities];
      } else {
        this.quantities.push({ qty: '', price: '' });
      }
    
      if (this.editedData && this.editedData.outsymptoms) {
        this.outsymptoms = [...this.editedData.outsymptoms];
      } else {
        this.outsymptoms.push({ symptom: '',severity:'' });
      }
      if (this.editedData && this.editedData.insymptoms) {
        this.insymptoms = [...this.editedData.insymptoms];
      } else {
        this.insymptoms.push({ symptom: '',severity:'' });
      }
      if (this.editedData && this.editedData.inquantities) {
        this.inquantities = [...this.editedData.inquantities];
      } else {
        this.inquantities.push({qty: '', price: '' });
      }
      if (this.editedData && this.editedData.medicals) {
        this.medicals = [...this.editedData.medicals];
      } else {
        this.medicals.push({image: '', file: undefined  });
      }
      if (this.editedData && this.editedData.outmedicals) {
        this.outmedicals = [...this.editedData.outmedicals];
      } else {
        this.outmedicals.push({image: '', file: undefined  });
      }
    }
    
    
  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    const index = this.data.dataSource.data.indexOf(this.data.data);
    if (index >= 0) {
      this.editedData.quantities = [...this.quantities];
      this.editedData.outsymptoms = [...this.outsymptoms]; 
      this.editedData.insymptoms = [...this.insymptoms];
      this.editedData.inquantities = [...this.inquantities]; 
      this.editedData.medicals = [...this.medicals];
      this.editedData.outmedicals = [...this.outmedicals];
      this.data.dataSource.data[index] = this.editedData;
      this.dialogRef.close(this.editedData);
    }
  }  
}
