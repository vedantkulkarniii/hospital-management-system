import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './src/models/User.js';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for Seeding');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    await connectDB();
    await User.deleteMany();

    const users = [
      {
        name: 'Super Admin',
        email: 'admin@smartcare.com',
        password: 'password123',
        role: 'admin',
        phone: '1234567890'
      },
      {
        name: 'Dr. John Smith',
        email: 'doctor@smartcare.com',
        password: 'password123',
        role: 'doctor',
        specialization: 'Cardiology',
        phone: '9876543210'
      },
      {
        name: 'Jane Foster',
        email: 'receptionist@smartcare.com',
        password: 'password123',
        role: 'receptionist',
        phone: '5551234567'
      },
      {
        name: 'Sam Wilson',
        email: 'patient@smartcare.com',
        password: 'password123',
        role: 'patient',
        phone: '1112223333'
      }
    ];

    await User.create(users);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
