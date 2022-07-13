export interface IProduct {
  id: string;
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
