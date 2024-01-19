export type ProductType = {
    id: string;
    mainImage: { id: string; data: Buffer; contentType: string };
    images: { id: string; data: Buffer; contentType: string }[];
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
