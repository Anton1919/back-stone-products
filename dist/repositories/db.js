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
exports.runDb = exports.productCollection = exports.dbName = exports.client = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const mongoUrl = process.env.DB_URL;
exports.client = new mongodb_1.MongoClient(mongoUrl);
exports.dbName = 'stone-products';
const db = exports.client.db(exports.dbName);
exports.productCollection = db.collection('productcards');
function runDb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.client.connect();
            yield exports.client.db(exports.dbName).command({ ping: 1 });
            console.log('Connected successfully to mongo server');
        }
        catch (_a) {
            yield exports.client.close();
            console.log("Can't connect to data base");
        }
    });
}
exports.runDb = runDb;
