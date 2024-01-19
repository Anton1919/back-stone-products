import { productsRepository } from '../repositories/products-db-reposetory';
import { WithId } from 'mongodb';
import { ProductType } from '../shared/types/product-type';

export const productsService = {
    async getProductCards(): Promise<WithId<ProductType[]>[]> {
        return await productsRepository.getProductCards();
    },

    async getProductById(productId: string): Promise<WithId<ProductType[]> | null> {
        return await productsRepository.getProductById(productId);
    },
};
