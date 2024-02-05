import { productCollection } from './db';
import { WithId } from 'mongodb';
import { FilterType, ProductType } from '../shared/types/product-type';

export const productsRepository = {
    async getProductCards({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        const sortOptions: Record<string, any> = {};
        sortOptions['price'] = sortBy === 'desc' ? -1 : 1;
        return await productCollection
            .find({})
            .sort(sortOptions)
            .skip((pageNum - 1) * pageSize)
            .limit(pageSize)
            .toArray();
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

        return productCollection
            .find(filter)
            .skip((pageNum - 1) * pageSize)
            .limit(pageSize)
            .toArray();
    },

    async getProductById(productId: string): Promise<WithId<ProductType[]> | null> {
        return await productCollection.findOne({ id: productId });
    },

    async getMarbleAllProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        const marbleFilter = { 'characteristics.productType': 'Marble' };
        const sortOptions: Record<string, any> = {};
        sortOptions['price'] = sortBy === 'desc' ? -1 : 1;
        return productCollection
            .find(marbleFilter)
            .sort(sortOptions)
            .skip((pageNum - 1) * pageSize)
            .limit(pageSize)
            .toArray();
    },

    async getMarbleBathProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        const marbleFilter = { 'characteristics.stoneType': 'Bath' };
        const sortOptions: Record<string, any> = {};
        sortOptions['price'] = sortBy === 'desc' ? -1 : 1;
        return productCollection
            .find(marbleFilter)
            .sort(sortOptions)
            .skip((pageNum - 1) * pageSize)
            .limit(pageSize)
            .toArray();
    },

    async getMarbleSlabProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        const marbleFilter = { 'characteristics.stoneType': 'Slab' };
        const sortOptions: Record<string, any> = {};
        sortOptions['price'] = sortBy === 'desc' ? -1 : 1;
        return productCollection
            .find(marbleFilter)
            .sort(sortOptions)
            .skip((pageNum - 1) * pageSize)
            .limit(pageSize)
            .toArray();
    },

    async getGraniteProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        const marbleFilter = { 'characteristics.productType': 'Granite' };
        const sortOptions: Record<string, any> = {};
        sortOptions['price'] = sortBy === 'desc' ? -1 : 1;
        return productCollection
            .find(marbleFilter)
            .sort(sortOptions)
            .skip((pageNum - 1) * pageSize)
            .limit(pageSize)
            .toArray();
    },

    async getGraniteBarCounterProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        const marbleFilter = { 'characteristics.stoneType': 'Bar' };
        const sortOptions: Record<string, any> = {};
        sortOptions['price'] = sortBy === 'desc' ? -1 : 1;
        return productCollection
            .find(marbleFilter)
            .sort(sortOptions)
            .skip((pageNum - 1) * pageSize)
            .limit(pageSize)
            .toArray();
    },

    async getGraniteTableTopProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        const marbleFilter = { 'characteristics.stoneType': 'Table' };
        const sortOptions: Record<string, any> = {};
        sortOptions['price'] = sortBy === 'desc' ? -1 : 1;
        return productCollection
            .find(marbleFilter)
            .sort(sortOptions)
            .skip((pageNum - 1) * pageSize)
            .limit(pageSize)
            .toArray();
    },

    async getWildStoneProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        const marbleFilter = { 'characteristics.productType': 'Wild stone' };
        const sortOptions: Record<string, any> = {};
        sortOptions['price'] = sortBy === 'desc' ? -1 : 1;
        return productCollection
            .find(marbleFilter)
            .sort(sortOptions)
            .skip((pageNum - 1) * pageSize)
            .limit(pageSize)
            .toArray();
    },

    async getWildStoneMasonryProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        const marbleFilter = { 'characteristics.stoneType': 'Masonry' };
        const sortOptions: Record<string, any> = {};
        sortOptions['price'] = sortBy === 'desc' ? -1 : 1;
        return productCollection
            .find(marbleFilter)
            .sort(sortOptions)
            .skip((pageNum - 1) * pageSize)
            .limit(pageSize)
            .toArray();
    },

    async getWildStoneRubbleProducts({
        pageNum,
        pageSize,
        sortBy,
    }: FilterType): Promise<WithId<ProductType[]>[]> {
        const marbleFilter = { 'characteristics.stoneType': 'Rubble' };
        const sortOptions: Record<string, any> = {};
        sortOptions['price'] = sortBy === 'desc' ? -1 : 1;
        return productCollection
            .find(marbleFilter)
            .sort(sortOptions)
            .skip((pageNum - 1) * pageSize)
            .limit(pageSize)
            .toArray();
    },
};
