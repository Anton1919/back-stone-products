"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCardsRouter = void 0;
const express_1 = require("express");
const products_service_1 = require("../domain/products-service");
exports.productCardsRouter = (0, express_1.Router)({});
exports.productCardsRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundProducts = yield products_service_1.productsService.getProductCards();
        const preparedProducts = foundProducts.map((product) => (Object.assign(Object.assign({}, product), { 
            // @ts-ignore
            images: product.images.map((image) => ({
                id: image.id,
                data: image.data.toString('base64'),
                contentType: image.contentType,
            })) })));
        res.send(preparedProducts);
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
}));
exports.productCardsRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    const product = yield products_service_1.productsService.getProductById(productId);
    if (product) {
        res.send(product);
    }
    else {
        res.sendStatus(404);
    }
}));
