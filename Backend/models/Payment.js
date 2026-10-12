const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  patientName: String,
  email: String,
  doctorName: String,
  amount: Number,
  cardNumber: String,
  cardHolder: String,
  status: {
    type: String,
    default: 'completed'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Payment', paymentSchema);