import { IoClose } from 'react-icons/io5';
import { useSelector } from 'react-redux';

import { useCart } from '../../hooks/useCart';
import { IState } from '../../store';
import { ICarItem } from '../../store/modules/cart/types';
import { formatPrice } from '../../util/format';
import { CartItem, Container, Content, ProductList } from './styles';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}
// interface Menu {
//   open: boolean;
//   setOpen: boolean;
// }
export function Cart({ openCart, setOpenCart }) {
  const { cart, removeProduct, updateProductAmount } = useCart();
  const car = useSelector<IState, ICarItem[]>(state => state.cart.items);
  console.log('car', car);
  const cartFormatted = car.map(product => ({
    ...product,
    price: formatPrice(product.product.price),
    subTotal: formatPrice(product.product.price * product.quantity)
  }));
  const total = formatPrice(
    car.reduce((sumTotal, product) => {
      return sumTotal + product.product.price * product.quantity;
    }, 0)
  );

  function handleProductIncrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 });
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 });
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }
  // const subTotal = cartFormatted.find(() => 'subTotal')
  // console.log();
  return (
    <Container is={openCart}>
      <Content>
        <div>
          <h1>
            Carrinho
            <br />
            de compras
          </h1>
          <button onClick={() => setOpenCart(false)}>
            <IoClose />
          </button>
        </div>
        {cartFormatted.map(item => (
          <ProductList key={item.product.id}>
            <CartItem>
              <img
                src={item.product.photo}
                alt={item.product.name}
                data-testid="product"
              />
              <strong>{item.product.name}</strong>
              <div>
                <small>Qtd:</small>
                <span>
                  <button
                    type="button"
                    data-testid="decrement-product"
                    disabled={item.quantity <= 1}
                    // onClick={() => handleProductDecrement()}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    data-testid="product-amount"
                    readOnly
                    value={item.quantity}
                  />
                  <button
                    type="button"
                    data-testid="increment-product"
                    // onClick={() => handleProductIncrement(product)}
                  >
                    +
                  </button>
                </span>
              </div>
              <span>{item.subTotal}</span>
              <IoClose
                data-testid="remove-product"
                // onClick={() => handleRemoveProduct(product.id)}
              />
              {/* <strong>{item.product.price}</strong> */}
            </CartItem>
          </ProductList>
        ))}
        <footer>
          <div>
            <span>Total:</span>
            <strong>{total}</strong>
          </div>
          <button type="button">Finalizar Compra</button>
        </footer>
      </Content>
    </Container>
  );
}
