import { v4 as uuidv4 } from 'uuid';
import { convertToBase64 } from '../utils/convert-to-base64';
import {
    graniteBarCounter1,
    graniteBarCounter2,
    graniteBarCounter3,
    graniteTableTops1,
    graniteTableTops2,
    graniteTableTops3,
    marbleBath1,
    marbleBath2,
    marbleBath3,
    marbleBath4,
    marbleSlab1,
    marbleSlab2,
    marbleSlab3,
    marbleSlab4,
    masonry1,
    masonry2,
    masonry3,
    rubble1,
    rubble2,
    rubble3,
} from '../const/path-images';
import { ProductType } from '../types/product-type';

export const defaultProducts: ProductType[] = [
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-1',
        price: '1630',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-2',
        price: '1530',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-3',
        price: '1430',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-4',
        price: '1110',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-5',
        price: '1740',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-6',
        price: '1880',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-1',
        price: '1630',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-2',
        price: '1530',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-3',
        price: '1430',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-4',
        price: '1110',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-5',
        price: '1740',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-6',
        price: '1880',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-1',
        price: '1630',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-2',
        price: '1530',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-3',
        price: '1430',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-4',
        price: '1110',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-5',
        price: '1740',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-6',
        price: '1880',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-1',
        price: '1630',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-2',
        price: '1530',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-3',
        price: '1430',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-4',
        price: '1110',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-5',
        price: '1740',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-6',
        price: '1880',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-1',
        price: '1630',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-2',
        price: '1530',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-3',
        price: '1430',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-4',
        price: '1110',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-5',
        price: '1740',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(masonry3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(masonry3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone masonry-6',
        price: '1880',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Masonry',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-1',
        price: '1510',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-2',
        price: '1520',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-3',
        price: '1110',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-4',
        price: '1760',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-5',
        price: '1990',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-6',
        price: '1220',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-1',
        price: '1510',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-2',
        price: '1520',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-3',
        price: '1110',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-4',
        price: '1760',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-5',
        price: '1990',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-6',
        price: '1220',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-1',
        price: '1510',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-2',
        price: '1520',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-3',
        price: '1110',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-4',
        price: '1760',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-5',
        price: '1990',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-6',
        price: '1220',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-1',
        price: '1510',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-2',
        price: '1520',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-3',
        price: '1110',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-4',
        price: '1760',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-5',
        price: '1990',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-6',
        price: '1220',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-1',
        price: '1510',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-2',
        price: '1520',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-3',
        price: '1110',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-4',
        price: '1760',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-5',
        price: '1990',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red beige',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(rubble3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(rubble3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Wild stone rubble-6',
        price: '1220',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Rubble',
            productType: 'Wild stone',
            location: 'Russia',
            color: 'Red blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-1',
        price: '1220',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-2',
        price: '1440',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-3',
        price: '1988',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-4',
        price: '1340',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-5',
        price: '1140',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-6',
        price: '1455',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-1',
        price: '1220',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-2',
        price: '1440',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-3',
        price: '1988',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-4',
        price: '1340',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-5',
        price: '1140',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-6',
        price: '1455',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-1',
        price: '1220',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-2',
        price: '1440',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-3',
        price: '1988',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-4',
        price: '1340',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-5',
        price: '1140',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-6',
        price: '1455',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-1',
        price: '1220',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-2',
        price: '1440',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-3',
        price: '1988',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-4',
        price: '1340',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-5',
        price: '1140',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-6',
        price: '1455',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-1',
        price: '1220',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-2',
        price: '1440',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-3',
        price: '1988',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-4',
        price: '1340',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-5',
        price: '1140',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleBath4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-bath-6',
        price: '1455',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bath',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-1',
        price: '1233',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-2',
        price: '1466',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-3',
        price: '1322',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'Blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-4',
        price: '1655',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-5',
        price: '1789',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-6',
        price: '1236',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-1',
        price: '1233',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-2',
        price: '1466',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-3',
        price: '1322',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'Blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-4',
        price: '1655',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-5',
        price: '1789',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-6',
        price: '1236',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-1',
        price: '1233',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-2',
        price: '1466',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-3',
        price: '1322',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'Blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-4',
        price: '1655',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-5',
        price: '1789',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-6',
        price: '1236',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-1',
        price: '1233',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-2',
        price: '1466',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-3',
        price: '1322',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'Blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-4',
        price: '1655',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-5',
        price: '1789',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-6',
        price: '1236',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-1',
        price: '1233',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-2',
        price: '1466',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-3',
        price: '1322',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'Blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-4',
        price: '1655',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-5',
        price: '1789',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab3), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(marbleSlab4), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Marble-slab-6',
        price: '1236',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Slab',
            productType: 'Marble',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-1',
        price: '1236',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-2',
        price: '1986',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'Grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-3',
        price: '1766',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-4',
        price: '1566',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-5',
        price: '7881',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-6',
        price: '2333',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-1',
        price: '1236',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-2',
        price: '1986',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'Grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-3',
        price: '1766',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-4',
        price: '1566',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-5',
        price: '7881',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-6',
        price: '2333',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-1',
        price: '1236',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-2',
        price: '1986',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'Grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-3',
        price: '1766',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-4',
        price: '1566',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-5',
        price: '7881',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-6',
        price: '2333',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-1',
        price: '1236',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-2',
        price: '1986',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'Grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-3',
        price: '1766',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-4',
        price: '1566',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-5',
        price: '7881',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-6',
        price: '2333',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-1',
        price: '1236',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-2',
        price: '1986',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'Grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-3',
        price: '1766',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-4',
        price: '1566',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-5',
        price: '7881',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteBarCounter3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-bar-counter-6',
        price: '2333',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Bar',
            productType: 'Granite',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-1',
        price: '3455',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-2',
        price: '4566',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-3',
        price: '7888',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-4',
        price: '8999',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-5',
        price: '5999',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-6',
        price: '5798',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-1',
        price: '3455',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-2',
        price: '4566',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-3',
        price: '7888',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-4',
        price: '8999',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-5',
        price: '5999',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-6',
        price: '5798',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-1',
        price: '3455',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-2',
        price: '4566',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-3',
        price: '7888',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-4',
        price: '8999',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-5',
        price: '5999',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-6',
        price: '5798',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-1',
        price: '3455',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-2',
        price: '4566',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-3',
        price: '7888',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-4',
        price: '8999',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-5',
        price: '5999',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-6',
        price: '5798',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-1',
        price: '3455',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'White blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-2',
        price: '4566',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Blue',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-3',
        price: '7888',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-4',
        price: '8999',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'White',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 4,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-5',
        price: '5999',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Light',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 3,
    },
    {
        id: uuidv4(),
        mainImage: {
            id: uuidv4(),
            data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
            contentType: 'image/webp',
        },
        images: [
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops1), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops2), 'base64'),
                contentType: 'image/webp',
            },
            {
                id: uuidv4(),
                data: Buffer.from(convertToBase64(graniteTableTops3), 'base64'),
                contentType: 'image/webp',
            },
        ],
        name: 'Granite-table-tops-6',
        price: '5798',
        modelNumber: '183260098',
        articleNumber: '183260098',
        characteristics: {
            stoneType: 'Table',
            productType: 'Granite',
            location: 'Russia',
            color: 'Grey',
        },
        description:
            'The philanthropist laores a great life has ended, we need to put a clean lobby. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. The customer is very important to the customer after the customer. They say that some developers always need eros. Mauris eros felis, sometimes included in sollicitudin lobortis mauris. Sometimes it makes sense to make a lot of diesel fuel and not run it.',
        rating: 2,
    },
];
