import { productCollection } from './db';
import { ProductType } from '../scripts/data';
import { WithId } from 'mongodb';

export const productsRepository = {
    async getProductCards(): Promise<WithId<ProductType[]>[]> {
        return await productCollection.find().toArray();
    },
};
