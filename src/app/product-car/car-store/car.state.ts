import { IProduct } from "@model/product.model";

export interface ICarItem extends Partial<IProduct> {
    quantity: number;
}

export const initialCarState: ICarState = {
    items:[]
}

export interface ICarState{
    items: ICarItem[]
}