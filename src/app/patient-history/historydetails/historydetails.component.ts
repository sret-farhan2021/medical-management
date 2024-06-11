import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Data } from '../patient-history.component';
import { Component, OnInit, Inject } from '@angular/core';
import * as cornerstone from 'cornerstone-core';
import * as cornerstoneTools from 'cornerstone-tools';
import * as cornerstoneWebImageLoader from 'cornerstone-web-image-loader';
import * as cornerstoneWadoImageLoader from 'cornerstone-wado-image-loader';

@Component({
  selector: 'app-historydetails',
  templateUrl: './historydetails.component.html',
  styleUrls: ['./historydetails.component.css'],
})
export class HistorydetailsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<HistorydetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data
  ) {}

  isMaximized1 = false;
  isMaximized2 = false;
  isMaximized3 = false;
  isMaximized4 = false;
  isMaximized5 = false;
  isMaximized6 = false;

  toggleMaximize(id: number) {
    if (id === 1) {
      this.isMaximized1 = !this.isMaximized1;
    } else if (id === 2) {
      this.isMaximized2 = !this.isMaximized2;
    } else if (id === 3) {
      this.isMaximized3 = !this.isMaximized3;
    } else if (id === 4) {
      this.isMaximized4 = !this.isMaximized4;
    } else if (id === 5) {
      this.isMaximized5 = !this.isMaximized5;
    } else if (id === 6) {
      this.isMaximized6 = !this.isMaximized6;
    }
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    cornerstoneWebImageLoader.external.cornerstone = cornerstone;
    cornerstoneTools.external.cornerstone = cornerstone;
    cornerstoneWadoImageLoader.external.cornerstone = cornerstone;

    const element: HTMLElement | null = document.querySelector('.image-canvas');

    if (element !== null) {
      cornerstone.enable(element);
      cornerstoneWadoImageLoader.wadouri.dataSetCacheManager.unload(element);

      for (const medical of this.data.medicals) {
        const arrayBuffer = Uint8Array.from(
          atob(medical.image.split(',')[1]),
          (c) => c.charCodeAt(0)
        ).buffer;

        console.log('Converting base64 string to ArrayBuffer: ', arrayBuffer);

        cornerstone
          .loadAndCacheImage(btoa(String.fromCharCode(...new Uint8Array(arrayBuffer))))
          .then((imageData) => {
            console.log('Retrieved image data: ', imageData);
            cornerstone.displayImage(element, imageData);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }
}
