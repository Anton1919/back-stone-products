import { productCollection } from '../../repositories/db';

type CharacteristicsType = Record<string, any>;

export async function getProductByFilter(
    sortBy: string,
    pageNum: number,
    pageSize: number,
    filterProductType?: CharacteristicsType,
) {
    const filter = filterProductType ? filterProductType : {};
    const sortOptions: Record<string, any> = {};
    sortOptions['price'] = sortBy === 'desc' ? -1 : 1;

    return productCollection
        .find(filter)
        .sort(sortOptions)
        .skip((pageNum - 1) * pageSize)
        .limit(pageSize)
        .toArray();
}
