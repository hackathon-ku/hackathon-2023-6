import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from './morgan.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  morgan(
    `:splitter\x1b[33m:method\x1b[0m \x1b[36m:url\x1b[0m :statusColor :response-time ms - length|:res[content-length]`
  )
);

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to backend.' });
});

// MongoDB server

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// mongoose.connection.on('connected', (connection) => {
//   console.log('mongoDB connected!');
// });

// mongoose.connection.on('disconnected', (connection) => {
//   console.log('mongoDB disconnected!');
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  await connect();
  console.log(`🚀 Server is running on port ${PORT}. 🚀`);
});
