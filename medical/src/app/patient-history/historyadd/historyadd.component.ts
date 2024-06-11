import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-historyadd',
  templateUrl: './historyadd.component.html',
  styleUrls: ['./historyadd.component.css']
})
export class HistoryaddComponent {
  quantities: {qty: string, price: string}[] = [];

  addQuantity() {
    this.quantities.push({qty: '', price: ''});
  }

  removeQuantity(index: number) {
    this.quantities.splice(index, 1);
  }

  outsymptoms: {symptom: string, severity: string}[] = [];

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
  
pid!: string;
pdiagnosis!: string;
hospital!: string;
patienttype!: string;
indid!: string;
inname!: string;
invisit!: Date;
inexit!: Date;
indep!: string;
inroom!: string;
inbed!: string;
insymptom!: string;
indiagnosis!: string;
intreatment!: string;
inoutcome!: string;
outdid!: string;
outname!: string;
outvisit!: Date;
outdep!: string;
outdiagnosis!: string;
outref!: string;


constructor(
  public dialogRef: MatDialogRef<HistoryaddComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
) {}

saveData(): void {
  this.data.pid = this.data.pid;
  this.data.pdiagnosis = this.data.pdiagnosis;
  this.data.hospital = this.data.hospital;
  this.data.patienttype = this.data.patienttype;
  this.data.indid = this.data.indid;
  this.data.inname = this.data.inname;
  this.data.invisit = this.data.invisit;
  this.data.indep = this.data.indep;
  this.data.inroom = this.data.inroom;
  this.data.inbed = this.data.inbed;
  this.data.insymptom = this.data.insymptom;
  this.data.indiagnosis = this.data.indiagnosis;
  this.data.intreatment = this.data.intreatment;
  this.data.inoutcome = this.data.inoutcome;
  this.data.outdid = this.data.outdid;
  this.data.outname = this.data.outname;
  this.data.outvisit = this.data.outvisit;
  this.data.outdep = this.data.outdep;
  this.data.outdiagnosis = this.data.outdiagnosis;
  this.data.outsymptoms = this.outsymptoms;
  this.data.outref = this.data.outref;
  this.data.quantities = this.quantities;
  this.data.insymptoms = this.insymptoms;
  this.data.inquantities = this.inquantities;
  this.data.medicals = this.medicals;
  this.data.outmedicals = this.outmedicals
  console.log(this.data);
  this.dialogRef.close(this.data);
}



onCancelClick(): void {
  this.dialogRef.close();
}
}
