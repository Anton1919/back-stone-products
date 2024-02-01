import { productCollection } from './db';
import { WithId } from 'mongodb';
import { ProductType } from '../shared/types/product-type';

export const productsRepository = {
    async getProductCards(): Promise<WithId<ProductType[]>[]> {
        return await productCollection.find({}).limit(6).toArray();
    },

    async getProductByName(name: string | undefined): Promise<WithId<ProductType[]>[]> {
        const filter: any = {};

        console.log(name);

        if (name) {
            filter.name = { $regex: name };
        }

        return productCollection.find(filter).toArray();
    },

    async getProductById(productId: string): Promise<WithId<ProductType[]> | null> {
        return await productCollection.findOne({ id: productId });
    },
};
