import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import {
  addProductToCart,
  decrementProductFromCart,
  removeProductFromCart
} from '../../store/modules/cart/actions';
import { ICarItem, IProduct } from '../../store/modules/cart/types';
import { formatPrice } from '../../util/format';
import { CartItem, Container, Content, ProductList } from './styles';

interface MenuProps {
  openCart: boolean;
  setOpenCart: (value: boolean) => void;
}
export function Cart({ openCart, setOpenCart }: MenuProps) {
  const car = useSelector<IState, ICarItem[]>(state => state.cart.items);
  const dispatch = useDispatch();
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

  function handleProductDecrement(product: IProduct) {
    dispatch(decrementProductFromCart(product));
  }
  function handleProductIncrement(product: IProduct) {
    dispatch(addProductToCart(product));
  }

  function handleDeleteProduct(product: IProduct) {
    dispatch(removeProductFromCart(product));
  }

  return (
    <>
      {openCart === true ? (
        <Container>
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
                        onClick={() => handleProductDecrement(item.product)}
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
                        disabled={item.quantity >= 10}
                        onClick={() => handleProductIncrement(item.product)}
                      >
                        +
                      </button>
                    </span>
                  </div>
                  <span>{item.subTotal}</span>
                  <IoClose
                    style={{
                      cursor: 'pointer'
                    }}
                    data-testid="remove-product"
                    onClick={() => handleDeleteProduct(item.product)}
                  />
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
      ) : (
        ''
      )}
    </>
  );
}
