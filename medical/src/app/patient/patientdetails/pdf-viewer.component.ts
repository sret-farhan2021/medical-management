import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent {
  safeUrl: SafeResourceUrl | undefined;

  constructor(
    public dialogRef: MatDialogRef<PdfViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { file: File, fileName: string },
    private sanitizer: DomSanitizer
  ) {
    this.readFile();
  }

  readFile(): void {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const base64String = event.target.result.split(',')[1];
      const fileUrl = 'data:application/pdf;base64,' + base64String;
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl);
    };
    reader.readAsDataURL(this.data.file);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
