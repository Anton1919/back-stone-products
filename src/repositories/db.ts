import { MongoClient } from 'mongodb';
import { config } from 'dotenv';
import { ProductType } from '../scripts/data';

config();

const mongoUrl = process.env.DB_URL!;

export const client = new MongoClient(mongoUrl);

export const dbName = 'stone-products';

const db = client.db(dbName);

export const productCollection = db.collection<ProductType[]>('productcards');

export async function runDb() {
    try {
        await client.connect();
        await client.db(dbName).command({ ping: 1 });

        console.log('Connected successfully to mongo server');
    } catch {
        await client.close();
        console.log("Can't connect to data base");
    }
}
