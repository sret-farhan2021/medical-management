import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '../doctor.component';
import { FormsModule } from '@angular/forms';

export interface DialogData {
  data: Data;
  dataSource: MatTableDataSource<Data>;
}

@Component({
  selector: 'app-doctoredit',
  templateUrl: './doctoredit.component.html',
  styleUrls: ['./doctoredit.component.css']
})
export class DoctoreditComponent {

  editedData: Data;

  onFileSelected(event: Event) {
    const file: File = (event.target as HTMLInputElement).files![0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.editedData.image = reader.result as string;
      };
    }
  }

  onPDFSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.editedData.deegreepdf = reader.result as string;
        this.editedData.pdfFileName = file.name; // Save the filename to show in UI
      };
    }
  }
  

  constructor(
    public dialogRef: MatDialogRef<DoctoreditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.editedData = { ...data.data };
    }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    const index = this.data.dataSource.data.indexOf(this.data.data);
    if (index >= 0) {
      this.data.dataSource.data[index] = this.editedData;
      this.dialogRef.close(this.editedData);
    }
  }
}

