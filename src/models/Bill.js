import mongoose from 'mongoose';

const billSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment'
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Unpaid', 'Paid'],
    default: 'Unpaid'
  },
  items: [
    {
      description: { type: String, required: true },
      cost: { type: Number, required: true }
    }
  ]
}, { timestamps: true });

const Bill = mongoose.model('Bill', billSchema);
export default Bill;
