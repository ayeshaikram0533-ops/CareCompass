const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');

// Save payment
router.post('/', async (req, res) => {
  try {
    const { patientName, email, doctorName, amount, cardNumber, cardHolder } = req.body;
    
    const payment = new Payment({
      patientName,
      email,
      doctorName,
      amount,
      cardNumber: cardNumber.slice(-4),
      cardHolder
    });
    
    await payment.save();
    res.json({ message: 'Payment successful!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get payments by user
router.get('/user/:email', async (req, res) => {
  try {
    const payments = await Payment.find({ email: req.params.email });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all payments (admin)
router.get('/all', async (req, res) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;