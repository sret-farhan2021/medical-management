import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { HistorydetailsComponent } from './patient-history/historydetails/historydetails.component';
import { HistoryeditComponent } from './patient-history/historyedit/historyedit.component';
import { HistoryaddComponent } from './patient-history/historyadd/historyadd.component';
import { DoctoraddComponent } from './doctor/doctoradd/doctoradd.component';
import { DoctordetailsComponent } from './doctor/doctordetails/doctordetails.component';
import { DoctoreditComponent } from './doctor/doctoredit/doctoredit.component';
import { PatientaddComponent } from './patient/patientadd/patientadd.component';
import { PatientdetailsComponent } from './patient/patientdetails/patientdetails.component';
import { PatienteditComponent } from './patient/patientedit/patientedit.component';
import { TuberclosisComponent } from './tuberclosis/tuberclosis.component';
import { TbeditComponent } from './tuberclosis/tbedit/tbedit.component';
import { TbaddComponent } from './tuberclosis/tbadd/tbadd.component';
import { TbdetailsComponent } from './tuberclosis/tbdetails/tbdetails.component';
import { RendererFactory2 } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientComponent,
    DoctorComponent,
    PatientHistoryComponent,
    HistorydetailsComponent,
    HistoryeditComponent,
    HistoryaddComponent,
    DoctoraddComponent,
    DoctordetailsComponent,
    DoctoreditComponent,
    PatientaddComponent,
    PatientdetailsComponent,
    PatienteditComponent,
    TuberclosisComponent,
    TbeditComponent,
    TbaddComponent,
    TbdetailsComponent,
  ],
  imports: [
    ModalModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    MatStepperModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
