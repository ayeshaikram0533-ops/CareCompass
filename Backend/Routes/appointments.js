const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Get appointments by user email
router.get('/user/:email', async (req, res) => {
  try {
    const appointments = await Appointment.find({ email: req.params.email }).sort({ createdAt: -1 });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create appointment (allows max 2 patients per slot)
router.post('/', async (req, res) => {
  try {
    const { patientName, email, phone, doctorName, date, time, symptoms } = req.body;
    
    // Check how many active appointments exist for this slot (excluding cancelled)
    const bookedCount = await Appointment.countDocuments({
      doctorName,
      date,
      time,
      status: { $ne: 'cancelled' }
    });
    
    // Allow maximum 2 patients per time slot
    if (bookedCount >= 2) {
      return res.status(400).json({ 
        message: 'Time slot is already reserved! Please select another time.' 
      });
    }
    
    // Check if this specific user already has an appointment at this slot
    const userExisting = await Appointment.findOne({
      email,
      doctorName,
      date,
      time,
      status: { $ne: 'cancelled' }
    });
    
    if (userExisting) {
      return res.status(400).json({ 
        message: 'You already have an appointment booked for this time slot!' 
      });
    }
    
    const appointment = new Appointment({
      patientName,
      email,
      phone,
      doctorName,
      date,
      time,
      symptoms,
      status: 'pending'
    });
    
    await appointment.save();
    res.json({ message: 'Appointment booked successfully!', appointment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Cancel appointment
router.put('/:id/cancel', async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelled' },
      { new: true }
    );
    res.json({ message: 'Appointment cancelled' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all appointments (for admin)
router.get('/all', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update appointment status (for admin)
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json({ message: 'Status updated', appointment });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
