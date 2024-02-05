import { productsRepository } from '../repositories/products-db-reposetory';
import { WithId } from 'mongodb';
import { FilterType, ProductType } from '../shared/types/product-type';

export const productsService = {
    async getProductCards(filters: FilterType): Promise<WithId<ProductType[]>[]> {
        return await productsRepository.getProductCards(filters);
    },

    async getProductByName(
        name: string | undefined,
        pageSize: number,
        pageNum: number,
    ): Promise<WithId<ProductType[]>[]> {
        return await productsRepository.getProductByName(name, pageSize, pageNum);
    },

    async getProductById(productId: string): Promise<WithId<ProductType[]> | null> {
        return await productsRepository.getProductById(productId);
    },

    async getMarbleAllProducts(filters: FilterType): Promise<WithId<ProductType[]>[]> {
        return await productsRepository.getMarbleAllProducts(filters);
    },

    async getMarbleBathProducts(filters: FilterType): Promise<WithId<ProductType[]>[]> {
        return await productsRepository.getMarbleBathProducts(filters);
    },

    async getMarbleSlabProducts(filters: FilterType): Promise<WithId<ProductType[]>[]> {
        return await productsRepository.getMarbleSlabProducts(filters);
    },

    async getGraniteProducts(filters: FilterType): Promise<WithId<ProductType[]>[]> {
        return await productsRepository.getGraniteProducts(filters);
    },

    async getGraniteBarCounterProducts(filters: FilterType): Promise<WithId<ProductType[]>[]> {
        return await productsRepository.getGraniteBarCounterProducts(filters);
    },

    async getGraniteTableTopProducts(filters: FilterType): Promise<WithId<ProductType[]>[]> {
        return await productsRepository.getGraniteTableTopProducts(filters);
    },

    async getWildStoneProducts(filters: FilterType): Promise<WithId<ProductType[]>[]> {
        return await productsRepository.getWildStoneProducts(filters);
    },

    async getWildStoneMasonryProducts(filters: FilterType): Promise<WithId<ProductType[]>[]> {
        return await productsRepository.getWildStoneMasonryProducts(filters);
    },

    async getWildStoneRubbleProducts(filters: FilterType): Promise<WithId<ProductType[]>[]> {
        return await productsRepository.getWildStoneRubbleProducts(filters);
    },
};
