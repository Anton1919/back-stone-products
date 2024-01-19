import fs from 'fs';

export function convertToBase64(pathImage: string) {
    const imageBuffer = fs.readFileSync(pathImage);

    return imageBuffer.toString('base64');
}
