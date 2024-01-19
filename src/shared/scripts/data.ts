import { v4 as uuidv4 } from 'uuid';
import {
    graniteTableTops1,
    graniteTableTops2,
    graniteTableTops3,
    marbleSlab1,
    marbleSlab2,
    marbleSlab3,
    masonry1,
    masonry2,
    masonry3,
} from '../const/path-images';
import { ProductType } from '../types/product-type';

export const defaultProducts: ProductType[] = [
    {
        id: uuidv4(),
        mainImage: masonry1,
        images: [masonry1, masonry2, masonry3],
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
        mainImage: marbleSlab1,
        images: [marbleSlab1, marbleSlab2, marbleSlab3],
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
        mainImage: graniteTableTops1,
        images: [graniteTableTops1, graniteTableTops2, graniteTableTops3],
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
];
