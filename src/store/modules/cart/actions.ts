import { IProduct } from './types';

export function addProductToCart(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product
    }
  };
}
export function decrementProductFromCart(product: IProduct) {
  return {
    type: 'DECREMENT_PRODUCT_FROM_CART',
    payload: {
      product
    }
  };
}
export function removeProductFromCart(product: IProduct) {
  return {
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: {
      product
    }
  };
}
