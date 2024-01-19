import { Router } from 'express';
import { Request, Response } from 'express';
import { productsService } from '../domain/products-service';

export const productCardsRouter = Router({});

productCardsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const foundProducts = await productsService.getProductCards();

        res.send(foundProducts);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

productCardsRouter.get('/:id', async (req: Request, res: Response) => {
    const productId = req.params.id;
    const product = await productsService.getProductById(productId);

    if (product) {
        res.send(product);
    } else {
        res.sendStatus(404);
    }
});
