import { Request, Response } from 'express';
import { FilterType, ProductType } from '../types/product-type';
import { productsService } from '../../domain/products-service';
import { WithId } from 'mongodb';

export async function handleCatalogRequest(
    req: Request,
    res: Response,
    productServiceFunction: (filters: FilterType) => Promise<WithId<ProductType[]>[]>,
) {
    try {
        const { name, sortBy = 'desc', pageNum, pageSize } = req.query;
        const nameProduct = name?.toString();
        const pageSizeProducts = pageSize ? +pageSize : 6;
        const pageNumberProducts = pageNum ? +pageNum : 1;
        const sortByPrice = sortBy === 'asc' || sortBy === 'desc' ? sortBy : 'desc';

        let foundProducts;

        const filters: FilterType = {
            pageNum: pageNumberProducts,
            pageSize: pageSizeProducts,
            sortBy: sortByPrice,
        };

        if (nameProduct) {
            foundProducts = await productsService.getProductByName(
                nameProduct,
                pageSizeProducts,
                pageNumberProducts,
            );
        } else {
            foundProducts = await productServiceFunction(filters);
        }

        res.send(foundProducts || []);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка при получении товаров' });
    }
}
