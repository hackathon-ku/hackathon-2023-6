import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from './morgan.js';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import activityRoute from './routes/activityRoute.js';
import subjectRoute from './routes/subjectRoute.js';
import courseRoute from './routes/courseRoute.js';
import { verifyAccessToken } from './helper.js';

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
  res.json({ message: 'Welcome to backend!.' });
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

app.use('/auth', authRoute);

app.use('/user', verifyAccessToken, userRoute);

app.use('/course', verifyAccessToken, courseRoute);

app.use('/activity', verifyAccessToken, activityRoute);

app.use('/subject', verifyAccessToken, subjectRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  await connect();
  console.log(`🚀 Server is running on port ${PORT}. 🚀`);
});
