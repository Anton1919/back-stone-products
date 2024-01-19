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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("./repositories/db");
const dotenv_1 = require("dotenv");
const product_cards_route_1 = require("./routes/product-cards-route");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const jsonBodyParser = body_parser_1.default.json();
const PORT = process.env.PORT;
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
};
// middlewares
app.use((0, cors_1.default)(corsOptions));
app.use(jsonBodyParser);
app.use('/products', product_cards_route_1.productCardsRouter);
const startApp = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.runDb)();
    app.listen(PORT, () => {
        console.log(`Server is ready on port: ${PORT}`);
    });
});
startApp();
