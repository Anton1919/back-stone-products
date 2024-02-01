import { Router } from 'express';
import { Request, Response } from 'express';
import { productsService } from '../domain/products-service';

export const productCardsRouter = Router({});

productCardsRouter.get('/catalog', async (req: Request, res: Response) => {
    try {
        if (req.query.name) {
            const foundProducts = await productsService.getProductByName(req.query.name.toString());
            res.send(foundProducts);
        } else {
            const foundProducts = await productsService.getProductCards();
            res.send(foundProducts);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

productCardsRouter.get('/catalog/:id', async (req: Request, res: Response) => {
    const productId = req.params.id;
    const product = await productsService.getProductById(productId);

    if (product) {
        res.send(product);
    } else {
        res.sendStatus(404);
    }
});
