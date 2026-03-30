import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Doctor or Admin
    required: true
  }
}, { timestamps: true });

const Report = mongoose.model('Report', reportSchema);
export default Report;
