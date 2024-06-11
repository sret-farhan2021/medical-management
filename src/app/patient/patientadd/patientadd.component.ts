import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-patientadd',
  templateUrl: './patientadd.component.html',
  styleUrls: ['./patientadd.component.css']
})
export class PatientaddComponent {
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

  quantities: {med: string, qty: string, method:string}[] = [];
 

  addQuantity() {
    this.quantities.push({ med: '',qty: '', method: ''});
  }

  removeQuantity(index: number) {
    this.quantities.splice(index, 1);
  }
  
  isLinear=true;
  defaultValues = {
    did: '',
    dname: '',
    pid: '',
    name: '',
    age: null,
    email: '',
    gender: '',
    phone: null,
    address: '',
    dob: null,
    reffered: '',
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
    ctll: '',
    ctllremarks: '',
    image: '',
    numberofcig: null,
    numbersmoke: null,
    numberofdrink: null,
    coughno: null,
    t2dm: '',
    shd: '',
    cad: '',
    cva: '',
    seizure: '',
    namemedicines: '',
    numberofyears: '',
    xctru: '',
    xctruremarks: '',
    xctrm: '',
    xctrmremarks: '',
    xctrl: '',
    xctrlremarks: '',
    xctlu: '',
    xctluremarks: '',
    xctlm: '',
    xctlmremarks: '',
    xctll: '',
    xctllremarks: '',
    afb: '',
    safb: '',
    lpa: ''
  };


  @ViewChild('patientForm') patientForm!: NgForm;

  constructor(
    public dialogRef: MatDialogRef<PatientaddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

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
  
  removePDF(file: File, fileName: string) {
    const index = this.pdfFiles.indexOf(file);
    if (index !== -1) {
      this.pdfFiles.splice(index, 1);
      this.pdfFileNames.splice(index, 1);
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
  calculateAge() {
    const dob = new Date(this.data.dob);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    this.data.age = age;
  }
  
  saveData(): void {
    this.data.did = this.data.did;
    this.data.dname = this.data.dname;
    this.data.pid = this.data.pid;
    this.data.name = this.data.name;
    this.data.age = this.data.age;
    this.data.email = this.data.email;
    this.data.gender = this.data.gender;
    this.data.phone = this.data.phone;
    this.data.address = this.data.address;
    this.data.dob = this.data.dob;
    this.data.reffered = this.data.reffered;
    this.data.blood = this.data.blood;
    this.data.disease = this.data.disease; 
    this.data.surgery = this.data.surgery;
    this.data.vaccination = this.data.vaccination;
    this.data.habit = this.data.habit;
    this.data.dov = this.data.dov;
    this.data.vno = this.data.vno;
    this.data.cough = this.data.cough;
    this.data.coughremarks = this.data.coughremarks;
    this.data.breath = this.data.breath;
    this.data.breathremarks = this.data.breathremarks;
    this.data.sputum = this.data.sputum;
    this.data.sputumremarks = this.data.sputumremarks;
    this.data.hemoptysis = this.data.hemoptysis;
    this.data.hemoremarks = this.data.hemoremarks;
    this.data.chestpain = this.data.chestpain;
    this.data.chestremarks = this.data.chestremarks;
    this.data.fever = this.data.fever;
    this.data.feverremarks = this.data.feverremarks;
    this.data.wheeze = this.data.wheeze;
    this.data.wheezeremarks = this.data.wheezeremarks;
    this.data.allergy = this.data.allergy;
    this.data.allergyremarks = this.data.allergyremarks;
    this.data.lweight = this.data.lweight;
    this.data.weight = this.data.weight;
    this.data.height = this.data.height;
    this.data.bmi = this.data.bmi;
    this.data.temp = this.data.temp; 
    this.data.pr = this.data.pr;
    this.data.spo = this.data.spo;
    this.data.bp = this.data.bp;
    this.data.dm = this.data.dm;
    this.data.sht = this.data.sht;
    this.data.smoke = this.data.smoke;
    this.data.drink = this.data.drink;
    this.data.att = this.data.att;
    this.data.anemia = this.data.anemia;
    this.data.anemiaremarks = this.data.anemiaremarks;
    this.data.cyan = this.data.cyan;
    this.data.cyanremarks = this.data.cyanremarks;
    this.data.club = this.data.club;
    this.data.clubremarks = this.data.clubremarks;
    this.data.lymph = this.data.lymph;
    this.data.lymphremarks = this.data.lymphremarks;
    this.data.edema = this.data.edema;
    this.data.edemaremarks = this.data.edemaremarks;
    this.data.icterus = this.data.icterus;
    this.data.ictremarks = this.data.ictremarks;
    this.data.jvp = this.data.jvp;
    this.data.jvpremarks = this.data.jvpremarks;
    this.data.cvs = this.data.cvs;
    this.data.cvsremarks = this.data.cvsremarks;
    this.data.pefr = this.data.pefr;
    this.data.pefrremarks = this.data.pefrremarks;
    this.data.rsleft = this.data.rsleft;
    this.data.rsleftremarks = this.data.rsleftremarks;
    this.data.rsright = this.data.rsright;
    this.data.rsrightremarks = this.data.rsrightremarks;
    this.data.pa = this.data.pa;
    this.data.paremarks = this.data.paremarks;
    this.data.cns = this.data.cns;
    this.data.cnsremarks = this.data.cnsremarks;
    this.data.ct = this.data.ct;
    this.data.ctremarks = this.data.ctremarks;
    this.data.image = this.data.image;
    this.data.quantities = this.quantities
    this.data.predata = this.predata,
    this.data.adata = this.adata,
    this.data.pdfFileNames = this.pdfFileNames,
    this.data.pdfFiles = this.pdfFiles,
    this.data.ctru = this.data.ctru,
    this.data.ctruremarks = this.data.ctruremarks,
    this.data.ctrm = this.data.ctrm,
    this.data.ctrmremarks = this.data.ctrmremarks,
    this.data.ctrl = this.data.ctrl,
    this.data.ctrlremarks = this.data.ctrlremarks,
    this.data.ctlu = this.data.ctlu,
    this.data.ctluremarks = this.data.ctluremarks,
    this.data.ctlm = this.data.ctlm,
    this.data.ctlmremarks = this.data.ctlmremarks,
    this.data.ctll = this.data.ctll,
    this.data.ctllremarks = this.data.ctllremarks,
    this.data.coughno = this.data.coughno,
    this.data.t2dm =  this.data.t2dm,
    this.data.shd =  this.data.shd,
    this.data.cad = this.data.cad,
    this.data.cva = this.data.cva,
    this.data.seizure = this.data.seizure,
    this.data.surgery = this.data.surgery,
    this.data.namemedicines = this.data.namemedicines,
    this.data.numberofyears = this.data.numberofyears,
    this.data.xctru = this.data.xctru,
    this.data.xctruremarks = this.data.xctruremarks,
    this.data.xctrm = this.data.xctrm,
    this.data.xctrmremarks = this.data.xctrmremarks,
    this.data.xctrl = this.data.xctrl,
    this.data.xctrlremarks = this.data.xctrlremarks,
    this.data.xctlu = this.data.xctlu,
    this.data.xctluremarks = this.data.xctluremarks,
    this.data.xctlm = this.data.xctlm,
    this.data.xctlmremarks = this.data.xctlmremarks,
    this.data.xctll = this.data.xctll,
    this.data.xctllremarks = this.data.xctllremarks,
    this.data.numberofdrink = this.data.numberofdrink,
    this.data.numbersmoke = this.data.numbersmoke,
    this.data.numberofcig = this.data.numberofcig,
    this.data.afb = this.data.afb
    this.data.safb = this.data.safb
    this.data.lpa = this.data.lpa
    this.data.agr =  this.data.agr
    this.data.biochemliver =  this.data.biochemliver
    this.data.urine =  this.data.urine
    this.data.electro =  this.data.electro
    this.data.biochemrenal =  this.data.biochemrenal
    this.data.wbccount =  this.data.wbccount
    this.data.cbctests =  this.data.cbctests

    
    console.log(this.data);
    this.dialogRef.close(this.data);

    // Check if patientForm is defined before calling resetForm()
    if (this.patientForm) {
        this.patientForm.resetForm();
  }
}
  
onCancelClick(): void {
  this.dialogRef.close();

  // Check if patientForm is defined before calling resetForm()
  if (this.patientForm) {
      this.patientForm.resetForm();
  }
}
  
  }