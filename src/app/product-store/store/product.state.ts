import { IProduct } from "@model/product.model";

export interface ProductState {
  items: IProduct[];
  loading: boolean;
  error: string;
}

export const initialState: ProductState ={
  items: [],
  loading: false,
  error: ''
}