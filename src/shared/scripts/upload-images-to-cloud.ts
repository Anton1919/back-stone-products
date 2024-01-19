let EasyYandexS3 = require('easy-yandex-s3').default;
import path from 'path';
import { config } from 'dotenv';

config();

const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const pathFolderImagesWildStones = path.resolve(__dirname, '../assets/productCard/wildStones');
const pathFolderImagesGranite = path.resolve(__dirname, '../assets/productCard/granite');
const pathFolderImagesMarble = path.resolve(__dirname, '../assets/productCard/marble');

const pathImagesArray = [
    { path: pathFolderImagesWildStones, save_name: true },
    { path: pathFolderImagesGranite, save_name: true },
    { path: pathFolderImagesMarble, save_name: true },
];

let s3 = new EasyYandexS3({
    auth: {
        accessKeyId,
        secretAccessKey,
    },
    Bucket: 'stone-product-images',
    debug: false,
});

async function uploadImagesToTheCloud() {
    let upload = await s3.Upload(pathImagesArray, '/product-images/');

    console.log(upload);
}

uploadImagesToTheCloud();
