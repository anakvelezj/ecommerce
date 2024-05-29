import { IProduct } from "@model/product.model";

export interface PartialProductCar extends Partial<IProduct> {
    quantity?: number;
}