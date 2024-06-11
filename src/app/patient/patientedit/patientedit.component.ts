import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '../patient.component';
import { FormsModule } from '@angular/forms';

export interface DialogData {
  data: Data;
  dataSource: MatTableDataSource<Data>;
}
@Component({
  selector: 'app-patientedit',
  templateUrl: './patientedit.component.html',
  styleUrls: ['./patientedit.component.css']
})
export class PatienteditComponent {

  editedData: Data;
  isLinear=true;
  quantities: {med: string, qty: string, method:string}[] = [];

  agr: { name: string, value: string, flag: string;}[] = [
    { name: "Total Protein", value: '', flag: "Normal" },
    { name: "Albumin", value: '', flag: "Normal" },
    { name: "Globulin", value: '', flag: "Normal" },
    { name: "A/G Ratio", value: '', flag: "Normal" },
    { name: "Gamma GT (GGTP)", value: '', flag: "Normal" },
    { name: "HB A1C", value: '', flag: "Normal" },
   ];
  biochemliver: { name: string, value: string, flag: string;}[]= [
    { name: "Bilirubin - Total", value: '', flag: "Normal" },
    { name: "Bilirubin - Direct", value: '', flag: "Normal" },
    { name: "Bilirubin - Indirect", value: '', flag: "Normal" },
    { name: "S.G.O.T (AST)", value: '', flag: "Normal" },
    { name: "S.G.P.T (ALT)", value: '', flag: "Normal" },
    { name: "Alkaline Phosphatase", value: '', flag: "Normal" },
  ];
  urine: { name: string, value: string, flag: string;}[] = [
    { name: "Colour", value: '', flag: "Normal" },
    { name: "Appearance", value: '', flag: "Normal" },
    { name: "SP. Gravity", value: '', flag: "Normal" },
    { name: "PH", value: '', flag: "Normal" },
    { name: "Proteins", value: '', flag: "Normal" },
    { name: "Sugar (F/R)", value: '', flag: "Normal" },
    { name: "Ketone", value: '', flag: "Normal" },
    { name: "Nitrite", value: '', flag: "Normal" },
    { name: "Bile Salts", value: '', flag: "Normal" },
    { name: "Bile Pigments", value: '', flag: "Normal" },
    { name: "Urobilinogen ", value: '', flag: "Normal" },
    { name: "Pus Cells/HPF", value: '', flag: "Normal" },
    { name: "EPI.Cells/HPF", value: '', flag: "Normal" },
    { name: "RBCS/HPF", value: '', flag: "Normal" },
    { name: "Casts & Crystals ", value: '', flag: "Normal" },
    { name: "Others", value: '', flag: "Normal" },
  ];
  electro: { name: string, value: string, flag: string;}[] = [
    { name: "Sodium (NA+)", value: '', flag: "Normal" },
    { name: "Pottasium (K+)", value: '', flag: "Normal" },
    { name: "Chlorides (CL-)", value: '', flag: "Normal" },
    { name: "Bicarbonate (HCO3)", value: '', flag: "Normal" },
  ];
  biochemrenal: { name: string, value: string, flag: string;}[] = [
    { name: "Glucose(Fasting)", value: '', flag: "Normal" },
    { name: "Urea - Serum", value: '', flag: "Normal" },
    { name: "Creatinine - Serum", value: '', flag: "Normal" },
    { name: "Uric acid - Serum", value: '', flag: "Normal" },
    { name: "Calcium - Serum", value: '', flag: "Normal" },
    { name: "Phosporous - Serum", value: '', flag: "Normal" },
  ];
  wbccount: { name: string, value: string, flag: string;}[] = [
    { name: "Neutrophils", value: '', flag: "Normal" },
    { name: "Lymphocytes", value: '', flag: "Normal" },
    { name: "Eosinophils", value: '', flag: "Normal" },
    { name: "Monocytes", value: '', flag: "Normal" },
    { name: "Basophils", value: '', flag: "Normal" },
    { name: "Immature Granucolyte", value: '', flag: "Normal" },
    { name: "NRBC", value: '', flag: "Normal" },
    { name: "Platelet Count", value: '', flag: "Normal" },
    { name: "ESR(1 hour)", value: '', flag: "Normal" },
  ];
  cbctests: { name: string, value: string, flag: string;}[] = [ 
    {name: "RBC count", value: '', flag: "Normal" },
  { name: "Haemoglobin", value: '', flag: "Normal" },
  { name: "PVC(Haematocrit)", value: '', flag: "Normal" },
  { name: "MCV", value: '', flag: "Normal" },
  { name: "MCH", value: '', flag: "Normal" },
  { name: "MCHC", value: '', flag: "Normal" },
  { name: "RDW-CV", value: '', flag: "Normal" },
  { name: "Total WBC Count", value: '', flag: "Normal" },];

  addQuantity() {
    this.quantities.push({ med: '',qty: '', method: ''});
  }

  removeQuantity(index: number) {
    this.quantities.splice(index, 1);
  }
  constructor(
    public dialogRef: MatDialogRef<PatienteditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.editedData = { ...data.data };
    }
    adata: { images: string }[] = [];
    predata: { images: string }[] = [];
    
    onFileSelected(event: any) {
      const files = event.target.files;
    
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.adata.push({ images: e.target.result });
        };
        reader.readAsDataURL(files[i]);
      }
    }
    
    onpreFileSelected(event: any) {
      const files = event.target.files;
    
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.predata.push({ images: e.target.result });
        };
        reader.readAsDataURL(files[i]);
      }
    }
    
    removeImage(index: number) {
      this.adata.splice(index, 1);
    }
    
    removepreImage(index: number) {
      this.predata.splice(index, 1);
    }
    
  
    pdfFileNames:string[] = [];
    pdfFiles: File[] = [];
    
    onPDFSelected(event: any) {
      const files = event.target.files;
    
      for (let i = 0; i < files.length; i++) {
        const file: File = files[i];
        this.pdfFiles.push(file);
        this.pdfFileNames.push(file.name);
      }
    }
    
    removePDF(fileName: string) {
      const index = this.pdfFileNames.indexOf(fileName);
      if (index !== -1) {
        this.pdfFileNames.splice(index, 1);
        this.pdfFiles.splice(index, 1);
      }
    }
    
  
    ngOnInit() {
      if (this.editedData && this.editedData.quantities) {
        this.quantities = [...this.editedData.quantities];
      } else {
        this.quantities.push({ med: '',qty: '', method: ''});
      }
      if (this.editedData && this.editedData.adata) {
        this.adata = [...this.editedData.adata];
      } else {
        this.adata.push({ images: '' });
      }
      if (this.editedData && this.editedData.predata) {
        this.predata = [...this.editedData.predata];
      } else {
        this.predata.push({ images: '' });
      }
      if (this.editedData && this.editedData.pdfFileNames) {
        this.pdfFileNames = [...this.editedData.pdfFileNames];
      }
    
      if (this.editedData && this.editedData.pdfFiles) {
        this.pdfFiles = [...this.editedData.pdfFiles];
      }
      if (this.editedData && this.editedData.agr) {
        this.agr = [...this.editedData.agr];
      }
      if (this.editedData && this.editedData.biochemliver) {
        this.biochemliver = [...this.editedData.biochemliver];
      }
      if (this.editedData && this.editedData.urine) {
        this.urine = [...this.editedData.urine];
      }
      if (this.editedData && this.editedData.electro) {
        this.electro = [...this.editedData.electro];
      }
      if (this.editedData && this.editedData.biochemrenal) {
        this.biochemrenal = [...this.editedData.biochemrenal];
      }
      if (this.editedData && this.editedData.wbccount) {
        this.wbccount = [...this.editedData.wbccount];
      }
      if (this.editedData && this.editedData.cbctests) {
        this.cbctests = [...this.editedData.cbctests];
      }
    }
  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    const index = this.data.dataSource.data.indexOf(this.data.data);
    if (index >= 0) {
      this.data.dataSource.data[index] = this.editedData;
      this.editedData.quantities = [...this.quantities];
      this.editedData.adata = [...this.adata]
      this.editedData.predata = [...this.predata]
      this.editedData.pdfFileNames = [...this.pdfFileNames]
      this.editedData.pdfFiles = [...this.pdfFiles]
      this.editedData.agr = [...this.agr]
      this.editedData.biochemliver = [...this.biochemliver]
      this.editedData.urine = [...this.urine]
      this.editedData.electro = [...this.electro]
      this.editedData.biochemrenal = [...this.biochemrenal]
      this.editedData.wbccount = [...this.wbccount]
      this.editedData.cbctests = [...this.cbctests]

      this.dialogRef.close(this.editedData);
    }
  }
}

