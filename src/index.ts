import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { runDb } from './repositories/db';
import { config } from 'dotenv';
import { productCardsRouter } from './routes/product-cards-route';

config();

const app = express();

const jsonBodyParser = bodyParser.json();

const PORT = process.env.PORT;

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
};

// middlewares
app.use(cors(corsOptions));
app.use(jsonBodyParser);
app.use('/products', productCardsRouter);

const startApp = async () => {
    await runDb();
    app.listen(PORT, () => {
        console.log(`Server is ready on port: ${PORT}`);
    });
};

startApp();
