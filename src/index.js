'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const dotenv_1 = __importDefault(require('dotenv'));
const app = (0, express_1.default)();
const configDotenv = dotenv_1.default.config();
console.log(process.env);
// const jsonBodyParser = bodyParser.json();
//
// const PORT = process.env.PORT || 8000;
//
// // Middlewares
// app.use(jsonBodyParser);
//
// // app.use('/products', productsRouter);
//
// const startApp = async () => {
//     // await runDb();
//     app.listen(PORT, () => {
//         console.log(`Server is ready on port: ${PORT}`);
//     });
// };
//
// startApp();
