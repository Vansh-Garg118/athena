// src/app.ts
import express, { Request, Response } from 'express';
import githubRoutes from './routes/api.routes';
import connectToDatabase from './DB/connectToDatabase';

const app = express();


connectToDatabase();
app.use(express.json({ limit: '50mb' }))


app.use('/api/github', githubRoutes);



export default app;
