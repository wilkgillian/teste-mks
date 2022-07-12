import { IoClose } from 'react-icons/io5';

import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';
import { CardProducts, Container, Content, ProductList } from './styles';

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

  const cartFormatted = cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount)
  }));
  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount;
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
        <ProductList>
          {cartFormatted.map(product => (
            <CardProducts key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                data-testid="product"
              />
              <strong>{product.title}</strong>
              <div>
                Qtd
                <span>
                  <button
                    type="button"
                    data-testid="decrement-product"
                    disabled={product.amount <= 1}
                    onClick={() => handleProductDecrement(product)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    data-testid="product-amount"
                    readOnly
                    value={product.amount}
                  />
                  <button
                    type="button"
                    data-testid="increment-product"
                    onClick={() => handleProductIncrement(product)}
                  >
                    +
                  </button>
                </span>
              </div>
              {/* <span>{product.priceFormatted}</span> */}
              <button>
                <IoClose
                  data-testid="remove-product"
                  onClick={() => handleRemoveProduct(product.id)}
                />
              </button>
              {/* 
                    <button
                      
                    >
                      <MdAddCircleOutline size={20} />
                    </button> */}
              <strong>{product.subTotal}</strong>
            </CardProducts>
          ))}
        </ProductList>

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
