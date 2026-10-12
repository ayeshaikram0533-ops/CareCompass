const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// Get all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add all doctors
router.post('/add-all', async (req, res) => {
  try {
    const allDoctors = [
      { name: "Dr. Sarah Ahmed", specialty: "Cardiologist", image: "fDoc1.jpg" },
      { name: "Dr. Usman Khan", specialty: "Neurologist", image: "neurosergon.jpg" },
      { name: "Dr. Ayesha Malik", specialty: "Dermatologist", image: "fdoc4.jpg" },
      { name: "Dr. Hamza Ali", specialty: "Orthopedic Surgeon", image: "mDoc4.jpg" },
      { name: "Dr. Noor Fatima", specialty: "Gynecologist", image: "fdoc5.jpg" },
      { name: "Dr. Ali Rehman", specialty: "General Physician", image: "general.jpg" },
      { name: "Dr. Maryam Shaikh", specialty: "Pediatrician", image: "fdoc6.jpg" },
      { name: "Dr. Ahmed Raza", specialty: "ENT Specialist", image: "mDoc1.jpg" },
      { name: "Dr. Nimra Iqbal", specialty: "Psychologist", image: "fDoc2.jpg" },
      { name: "Dr. Bilal Saeed", specialty: "Dental Surgeon", image: "dentist.jpg" }
    ];

    await Doctor.deleteMany({});
    await Doctor.insertMany(allDoctors);
    res.json({ message: "All doctors added!" });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;