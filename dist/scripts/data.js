"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultProducts = void 0;
const uuid_1 = require("uuid");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pathImg = path_1.default.resolve(__dirname, '../assets/productCard/main-granite-vase.png');
const imageBuffer = fs_1.default.readFileSync(pathImg);
const cardImg = imageBuffer.toString('base64');
exports.defaultProducts = [
    {
        id: (0, uuid_1.v4)(),
        mainImage: {
            data: Buffer.from(cardImg, 'base64'),
            contentType: 'image/png',
        },
        images: [
            {
                data: Buffer.from(cardImg, 'base64'),
                contentType: 'image/png',
            },
        ],
        name: 'ВАЗА ИЗ ГРАНИТА «КАПУСТЯНСКОЕ»',
        price: '1630000',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: '600x2000, 700x2000, 800x2000, 900x2000 мм',
            productType: 'Vases',
            location: 'Возможно изготовление нестандартных размеров (с удорожанием)',
            color: 'Каркасно-щитовая с сотовым наполнителем',
        },
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. Клиент очень важен, за клиентом последует клиент. Говорят, что некоторым разработчикам всегда нужен эрос. Mauris eros felis, иногда входит в состав sollicitudin lobortis mauris. Иногда разумно сделать массу солярки и не запускать ее. \n' +
            'Но масса фегиата на выходных. ',
        rating: 0,
    },
    {
        id: (0, uuid_1.v4)(),
        mainImage: {
            data: Buffer.from(cardImg, 'base64'),
            contentType: 'image/png',
        },
        images: [
            {
                data: Buffer.from(cardImg, 'base64'),
                contentType: 'image/png',
            },
        ],
        name: 'ВАЗА ИЗ ГРАНИТА «КАПУСТЯНСКОЕ»',
        price: '1630000',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: '600x2000, 700x2000, 800x2000, 900x2000 мм',
            productType: 'Vases',
            location: 'Возможно изготовление нестандартных размеров (с удорожанием)',
            color: 'Каркасно-щитовая с сотовым наполнителем',
        },
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. Клиент очень важен, за клиентом последует клиент. Говорят, что некоторым разработчикам всегда нужен эрос. Mauris eros felis, иногда входит в состав sollicitudin lobortis mauris. Иногда разумно сделать массу солярки и не запускать ее. \n' +
            'Но масса фегиата на выходных. ',
        rating: 0,
    },
    {
        id: (0, uuid_1.v4)(),
        mainImage: {
            data: Buffer.from(cardImg, 'base64'),
            contentType: 'image/png',
        },
        images: [
            {
                data: Buffer.from(cardImg, 'base64'),
                contentType: 'image/png',
            },
        ],
        name: 'ВАЗА ИЗ ГРАНИТА «КАПУСТЯНСКОЕ»',
        price: '1630000',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: '600x2000, 700x2000, 800x2000, 900x2000 мм',
            productType: 'Vases',
            location: 'Возможно изготовление нестандартных размеров (с удорожанием)',
            color: 'Каркасно-щитовая с сотовым наполнителем',
        },
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. Клиент очень важен, за клиентом последует клиент. Говорят, что некоторым разработчикам всегда нужен эрос. Mauris eros felis, иногда входит в состав sollicitudin lobortis mauris. Иногда разумно сделать массу солярки и не запускать ее. \n' +
            'Но масса фегиата на выходных. ',
        rating: 0,
    },
];
