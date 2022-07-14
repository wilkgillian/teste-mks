export interface IProduct {
  id: number;
  name: string;
  photo: string;
  price: number;
  description?: string;
  amount: number;
}

export interface ICarItem {
  product: IProduct;
  quantity: number;
}
export interface ICartState {
  items: ICarItem[];
}
