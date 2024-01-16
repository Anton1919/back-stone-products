"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCard = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productCardSchema = new mongoose_1.default.Schema({
    images: [
        {
            data: Buffer,
            contentType: String,
        },
    ],
    name: String,
    price: Number,
    modelNumber: String,
    articleNumber: String,
    characteristics: {
        stoneType: String,
        productType: String,
        location: String,
        color: String,
    },
    description: String,
});
exports.ProductCard = mongoose_1.default.model('ProductCard', productCardSchema);
