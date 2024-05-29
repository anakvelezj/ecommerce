export interface IProduct {
    id: number,
    name: string,
    type: string,
    detail: IProductDetail
}

export interface IProductDetail {
    description: string,
    price: number,
    picture?: string,
    pictureThumbnails: string[],
    discount?: number,
    brand?: string 
}