import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { runDb } from './repositories/db';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import { productCardsRouter } from './routes/product-cards-route';
import { authRouter } from './routes/auth-route';
import mongoose from 'mongoose';

config();

const app = express();

const jsonBodyParser = bodyParser.json();

const PORT = process.env.PORT || 8000;

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
};

// middlewares
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(jsonBodyParser);
app.use('/', productCardsRouter);
app.use('/api', authRouter);

const startApp = async () => {
    try {
        await runDb();
        await mongoose.connect(process.env.DB_URL!);

        app.listen(PORT, () => {
            console.log(`Server is ready on port: ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

startApp();
