import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import './models/Startup';
import scraperRoutes from './routes/scraperRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI as string)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Use routes
app.use('/api', scraperRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});