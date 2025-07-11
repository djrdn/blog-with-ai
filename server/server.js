import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connect } from 'mongoose';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';

const app = express();


console.log('MONGODB_URI:', process.env.MONGODB_URI);
await connectDB()

//Middlewares
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (req,res)=> res.send("API is working"))
app.use('/api/admin', adminRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})

export default app;