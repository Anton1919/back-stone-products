import { MongoClient } from 'mongodb';
import { config } from 'dotenv';
import { defaultProducts } from './data';

config();

const mongoUrl = process.env.DB_URL!;
export const dbName = 'stone-products';

export const client = new MongoClient(mongoUrl);

async function seedDatabase() {
    try {
        const productsCollection = client.db(dbName).collection('productcards');
        const usersCollection = client.db(dbName).collection('users');

        const existingProducts = await productsCollection.find().toArray();
        const existingUsers = await usersCollection.find().toArray();

        if (existingProducts.length === 0) {
            await productsCollection.insertMany(defaultProducts);
            console.log('Default data added to the database.');
        } else {
            console.log('Data already exists in the database.');
        }

        if (existingUsers.length === 0) {
            await usersCollection.insertMany([]);
            console.log('Default users added to the database.');
        } else {
            console.log('Users already exist in the database.');
        }
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        await client.close();
    }
}

seedDatabase();
