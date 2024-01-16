import { productsRepository } from '../repositories/products-db-reposetory';
import { ProductType } from '../scripts/data';
import { WithId } from 'mongodb';

export const productsService = {
    async getProductCards(): Promise<WithId<ProductType[]>[]> {
        return await productsRepository.getProductCards();
    },
};
