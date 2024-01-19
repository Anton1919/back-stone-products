import { productCollection } from './db';
import { WithId } from 'mongodb';
import { ProductType } from '../shared/types/product-type';

export const productsRepository = {
    async getProductCards(): Promise<WithId<ProductType[]>[]> {
        return await productCollection.find().toArray();
    },

    async getProductById(productId: string): Promise<WithId<ProductType[]> | null> {
        return await productCollection.findOne({ id: productId });
    },
};
