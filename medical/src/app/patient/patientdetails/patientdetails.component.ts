import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Data } from '../patient.component';
import { ModalComponent } from './modal.component';
import { MatDialog } from '@angular/material/dialog';
import { PdfViewerComponent } from './pdf-viewer.component';


@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<PatientdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data,private dialog: MatDialog) {}

    openModal(imageUrl: string) {
      this.dialog.open(ModalComponent, {
        data: { imageSrc: imageUrl }
      });
    }
    openPdfDialog(file: File, fileName: string): void {
      const fileUrl = URL.createObjectURL(file);
      window.open(fileUrl, '_blank');
    }
    
    expandedTable: string | null = null;
    calculateBMI(weight: number | null, height: number | null): string {
    
   
      if (weight !== null && height !== null) {
            const heightInMeters = height / 100;
            const bmi = weight / (heightInMeters * heightInMeters);
            
           
      return (Math.round(bmi * 100) / 100).toFixed(2);
          }
          return 'N/A'; // Return a default value if weight or height is null
        }
        calculateindex(cig: number | null, year: number | null): string {
    
   
          if (cig !== null && year !== null) {
                const index = cig*year ;
          return (Math.round(index)).toFixed(2);
              }
              return 'N/A'; // Return a default value if weight or height is null
            }
      
  
toggleTable(tableId: string): void {
  if (this.expandedTable === tableId) {
    this.expandedTable = null;
  } else {
    this.expandedTable = tableId;
  }
}
    

  downloadPDF(file: File, fileName: string) {
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
