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
    // Вивід URI для перевірки
    console.log('MONGODB_URI:', process.env.MONGODB_URI);

    mongoose.connection.on('connected', () => {
      console.log('✅ Database Connected');
    });

    const mongoURI = `${process.env.MONGODB_URI}/quickblog`;
    await mongoose.connect(mongoURI);

  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
  }
};

export default connectDB;
