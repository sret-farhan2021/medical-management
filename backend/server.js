// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Use CORS middleware with specific configuration
app.use(cors({
  origin: 'http://localhost:4200', // Replace with your Angular app's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

// Connect to MongoDB
mongoose.connect('mongodb+srv://Tharun:rightright2@cluster0.h1mrnip.mongodb.net/medical')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Close the MongoDB connection if Node.js process is terminated
process.on('SIGINT', () => {
  mongoose.connection.close();
  console.log('MongoDB connection disconnected through app termination');
  process.exit(0);
});


    // Define patient schema
    const patientSchema = new mongoose.Schema({
      did: String,
      dname: String,
      pid: String,
      name: String,
      age: Number,
      email: String,
      gender: String,
      phone: Number,
      address: String,
      dob: Date,
      reffered: String,
      blood: String,
      disease: String,
      surgery: String,
      vaccination: String,
      habit: String,
      dov: String,
      vno: Number,
      cough: String,
      coughremarks: String,
      breath: String,
      breathremarks: String,
      sputum: String,
      sputumremarks: String,
      hemoptysis: String,
      hemoremarks: String,
      chestpain: String,
      chestremarks: String,
      fever: String,
      feverremarks: String,
      wheeze: String,
      wheezeremarks: String,
      allergy: String,
      allergyremarks: String,
      lweight: Number,
      weight: Number,
      height: Number,
      bmi: Number,
      temp: Number,
      pr: Number,
      spo: Number,
      bp: String,
      dm: String,
      sht: String,
      smoke: String,
      drink: String,
      att: String,
      anemia: String,
      anemiaremarks: String,
      cyan: String,
      cyanremarks: String,
      club: String,
      clubremarks: String,
      lymph: String,
      lymphremarks: String,
      edema: String,
      edemaremarks: String,
      icterus: String,
      ictremarks: String,
      jvp: String,
      jvpremarks: String,
      cvs: String,
      cvsremarks: String,
      pefr: String,
      pefrremarks: String,
      rsleft: String,
      rsleftremarks: String,
      rsright: String,
      rsrightremarks: String,
      pa: String,
      paremarks: String,
      cns: String,
      cnsremarks: String,
      ct: String,
      ctremarks: String,
      ctru: String,
      ctruremarks: String,
      ctrm: String,
      ctrmremarks: String,
      ctrl: String,
      ctrlremarks: String,
      ctlu: String,
      ctluremarks: String,
      ctlm: String,
      ctlmremarks: String,
      ctll: String,
      ctllremarks: String,
      quantities: [
        {
          med: String,
          qty: String,
          method: String
        }
      ],
      predata: [
        {
          images: String
        }
      ],
      adata: [
        {
          images: String
        }
      ],
      pdfFileNames: [String],
      pdfFiles: [String],
      coughno: Number,
      t2dm: String,
      shd: String,
      cad: String,
      cva: String,
      seizure: String,
      namemedicines: String,
      numberofyears: String,
      xctru: String,
      xctruremarks: String,
      xctrm: String,
      xctrmremarks: String,
      xctrl: String,
      xctrlremarks: String,
      xctlu: String,
      xctluremarks: String,
      xctlm: String,
      xctlmremarks: String,
      xctll: String,
      xctllremarks: String,
      numberofcig: Number,
      numbersmoke: Number,
      numberofdrink: Number,
      safb: String,
      afb: String,
      lpa: String,
      agr: [
        {
          name: String,
          value: String,
          flag: String
        }
      ],
      biochemliver: [
        {
          name: String,
          value: String,
          flag: String
        }
      ],
      urine: [
        {
          name: String,
          value: String,
          flag: String
        }
      ],
      electro: [
        {
          name: String,
          value: String,
          flag: String
        }
      ],
      biochemrenal: [
        {
          name: String,
          value: String,
          flag: String
        }
      ],
      wbccount: [
        {
          name: String,
          value: String,
          flag: String
        }
      ],
      cbctests: [
        {
          name: String,
          value: String,
          flag: String
        }
      ],
    });
    
    const Patient = mongoose.model('Patient', patientSchema);

    module.exports = Patient;

    // Simple route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Medical Records API');
});

  // API endpoint for retrieving all patients
  app.get('/api/patients', async (req, res) => {
    try {
      const patients = await Patient.find();
      res.json(patients);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// API endpoint for adding a new patient
app.post('/api/patients', async (req, res) => {
  const newPatientData = req.body;
  try {
    const newPatient = await Patient.create(newPatientData); // Ensure _id is not set here
    res.json(newPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



  // API endpoint for updating a patient
  app.put('/api/patients/:id', async (req, res) => {
    const { id } = req.params;
    const updatedPatientData = req.body;
  
    try {
      const updatedPatient = await Patient.findOneAndUpdate({ _id: id }, updatedPatientData, { new: true });
      res.json(updatedPatient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

 // API endpoint for deleting a patient
app.delete('/api/patients/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPatient = await Patient.findByIdAndDelete(id);

    if (!deletedPatient) {
      // If the patient with the specified ID is not found
      return res.status(404).json({ error: 'Patient not found' });
    }

    res.status(204).end(); // Respond with a 204 No Content on successful deletion
  } catch (error) {
    console.error('Error deleting patient:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));