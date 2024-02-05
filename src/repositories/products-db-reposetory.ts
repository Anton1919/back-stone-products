import { productCollection } from './db';
import { WithId } from 'mongodb';
import { FilterType, ProductType } from '../shared/types/product-type';
import { getProductByFilter } from '../shared/helpers/getProductByFilter';

export const productsRepository = {
    async getProductCards({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        return await getProductByFilter(sortBy, pageNum, pageSize);
    },

    async getProductByName(
        name: string | undefined,
        pageSize: number,
        pageNum: number,
    ): Promise<WithId<ProductType[]>[]> {
        const filter: any = {};

        if (name) {
            filter.name = { $regex: name, $options: 'i' };
        }

        return await getProductByFilter('desc', pageNum, pageSize, filter);
    },

    async getProductById(productId: string): Promise<WithId<ProductType[]> | null> {
        return await productCollection.findOne({ id: productId });
    },

    async getMarbleAllProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        return await getProductByFilter(sortBy, pageNum, pageSize, {
            'characteristics.productType': 'Marble',
        });
    },

    async getMarbleBathProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        return await getProductByFilter(sortBy, pageNum, pageSize, {
            'characteristics.stoneType': 'Bath',
        });
    },

    async getMarbleSlabProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        return await getProductByFilter(sortBy, pageNum, pageSize, {
            'characteristics.stoneType': 'Slab',
        });
    },

    async getGraniteProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        return await getProductByFilter(sortBy, pageNum, pageSize, {
            'characteristics.productType': 'Granite',
        });
    },

    async getGraniteBarCounterProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        return await getProductByFilter(sortBy, pageNum, pageSize, {
            'characteristics.stoneType': 'Bar',
        });
    },

    async getGraniteTableTopProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        return await getProductByFilter(sortBy, pageNum, pageSize, {
            'characteristics.stoneType': 'Table',
        });
    },

    async getWildStoneProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        return await getProductByFilter(sortBy, pageNum, pageSize, {
            'characteristics.productType': 'Wild stone',
        });
    },

    async getWildStoneMasonryProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        return await getProductByFilter(sortBy, pageNum, pageSize, {
            'characteristics.stoneType': 'Masonry',
        });
    },

    async getWildStoneRubbleProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        return await getProductByFilter(sortBy, pageNum, pageSize, {
            'characteristics.stoneType': 'Rubble',
        });
    },
};
