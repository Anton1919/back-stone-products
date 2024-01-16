import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

const pathImg = path.resolve(__dirname, '../assets/productCard/main-granite-vase.png');

const imageBuffer = fs.readFileSync(pathImg);

const cardImg = imageBuffer.toString('base64');

export type ProductType = {
    id: string;
    mainImage: { data: Buffer; contentType: string };
    images: { data: Buffer; contentType: string }[];
    name: string;
    price: string;
    modelNumber: string;
    articleNumber: string;
    characteristics: {
        stoneType: string;
        productType: string;
        location: string;
        color: string;
    };
    description: string;
    rating: number;
};

export const defaultProducts: ProductType[] = [
    {
        id: uuidv4(),
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
        description:
            'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. Клиент очень важен, за клиентом последует клиент. Говорят, что некоторым разработчикам всегда нужен эрос. Mauris eros felis, иногда входит в состав sollicitudin lobortis mauris. Иногда разумно сделать массу солярки и не запускать ее. \n' +
            'Но масса фегиата на выходных. ',
        rating: 0,
    },
    {
        id: uuidv4(),
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
        description:
            'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. Клиент очень важен, за клиентом последует клиент. Говорят, что некоторым разработчикам всегда нужен эрос. Mauris eros felis, иногда входит в состав sollicitudin lobortis mauris. Иногда разумно сделать массу солярки и не запускать ее. \n' +
            'Но масса фегиата на выходных. ',
        rating: 0,
    },
    {
        id: uuidv4(),
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
        description:
            'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. Клиент очень важен, за клиентом последует клиент. Говорят, что некоторым разработчикам всегда нужен эрос. Mauris eros felis, иногда входит в состав sollicitudin lobortis mauris. Иногда разумно сделать массу солярки и не запускать ее. \n' +
            'Но масса фегиата на выходных. ',
        rating: 0,
    },
];
