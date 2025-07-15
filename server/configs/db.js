import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Для отримання __dirname в ES-модулі
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Завантажити .env з кореня проєкту
dotenv.config({ path: path.resolve(__dirname, '.env') });

const connectDB = async () => {
  try {
    const mongoURI = `${process.env.MONGODB_URI}/quickblog`;

    mongoose.connection.on('connected', () => {
      console.log('✅ MongoDB connected');
    });

    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('⚠️ MongoDB disconnected');
    });

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  }
};

export default connectDB;

