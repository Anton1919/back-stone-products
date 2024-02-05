import { Request, Response, Router } from 'express';
import { productsService } from '../domain/products-service';
import { handleCatalogRequest } from '../shared/helpers/handleCatalogRequest';

export const productCardsRouter = Router({});

////////// All products
productCardsRouter.get('/catalog', async (req: Request, res: Response) => {
    await handleCatalogRequest(req, res, productsService.getProductCards);
});

////////// Marbles
productCardsRouter.get('/catalog/marble', async (req: Request, res: Response) => {
    await handleCatalogRequest(req, res, productsService.getMarbleAllProducts);
});

productCardsRouter.get('/catalog/marble/bath', async (req: Request, res: Response) => {
    await handleCatalogRequest(req, res, productsService.getMarbleBathProducts);
});

productCardsRouter.get('/catalog/marble/slab', async (req: Request, res: Response) => {
    await handleCatalogRequest(req, res, productsService.getMarbleSlabProducts);
});

////////// Granites
productCardsRouter.get('/catalog/granite', async (req: Request, res: Response) => {
    await handleCatalogRequest(req, res, productsService.getGraniteProducts);
});

productCardsRouter.get('/catalog/granite/bar', async (req: Request, res: Response) => {
    await handleCatalogRequest(req, res, productsService.getGraniteBarCounterProducts);
});

productCardsRouter.get('/catalog/granite/table', async (req: Request, res: Response) => {
    await handleCatalogRequest(req, res, productsService.getGraniteTableTopProducts);
});

////////// Wild stones
productCardsRouter.get('/catalog/wild-stones', async (req: Request, res: Response) => {
    await handleCatalogRequest(req, res, productsService.getWildStoneProducts);
});

productCardsRouter.get('/catalog/wild-stones/masonry', async (req: Request, res: Response) => {
    await handleCatalogRequest(req, res, productsService.getWildStoneMasonryProducts);
});

productCardsRouter.get('/catalog/wild-stones/rubble', async (req: Request, res: Response) => {
    await handleCatalogRequest(req, res, productsService.getWildStoneRubbleProducts);
});

////////// Product by ID
productCardsRouter.get('/catalog/:id', async (req: Request, res: Response) => {
    const productId = req.params.id;
    const product = await productsService.getProductById(productId);

    if (product) {
        res.send(product);
    } else {
        res.sendStatus(404);
    }
});
