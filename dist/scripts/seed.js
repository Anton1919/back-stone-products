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
exports.client = exports.dbName = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = require("dotenv");
const data_1 = require("./data");
(0, dotenv_1.config)();
const mongoUrl = process.env.DB_URL;
exports.dbName = 'stone-products';
exports.client = new mongodb_1.MongoClient(mongoUrl);
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const productsCollection = exports.client.db(exports.dbName).collection('productcards');
            const existingProducts = yield productsCollection.find().toArray();
            if (existingProducts.length === 0) {
                yield productsCollection.insertMany(data_1.defaultProducts);
                console.log('Default data added to the database.');
            }
            else {
                console.log('Data already exists in the database.');
            }
        }
        catch (error) {
            console.error('Error seeding data:', error);
        }
        finally {
            yield exports.client.close();
        }
    });
}
seedDatabase();
