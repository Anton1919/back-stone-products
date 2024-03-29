export type ProductType = {
    id: string;
    mainImage: string;
    images: { id: string; image: string }[];
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

export type UserType = {
    email: string;
    password: string;
};

export type FilterType = {
    pageNum: number;
    pageSize: number;
    sortBy: 'asc' | 'desc';
};
