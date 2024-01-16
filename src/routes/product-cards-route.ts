import { Router } from 'express';
import { Request, Response } from 'express';
import { productsService } from '../domain/products-service';

export const productCardsRouter = Router({});

productCardsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const foundProducts = await productsService.getProductCards();
        const preparedProducts = foundProducts.map((product) => ({
            ...product,
            // @ts-ignore
            images: product.images.map((image) => ({
                data: image.data.toString('base64'),
                contentType: image.contentType,
            })),
        }));
        res.send(preparedProducts);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});
