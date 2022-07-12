import { Link } from 'react-router-dom';
import Carrinho from '../../assets/images/Vector.svg';
import { Container, Car } from './styles';
import { useCart } from '../../hooks/useCart';
import { useState } from 'react';
import { Cart } from '../Cart';
interface CartProps {
  open: boolean;
  setOpen: boolean;
}
export function Header() {
  const [openCart, setOpenCart] = useState(false);
  const { cart } = useCart();
  const cartSize = cart.length;
  console.log(openCart);
  return (
    <>
      <Container>
        <Link to="/">
          <h1>MKS</h1>
          <h2>Sistemas</h2>
        </Link>

        <Car>
          <button onClick={() => setOpenCart(true)}>
            <img src={Carrinho} alt="carrinho" />
            <span data-testid="cart-size">{cartSize}</span>
          </button>
        </Car>
      </Container>
      {openCart === true ? (
        <Cart openCart={openCart} setOpenCart={setOpenCart} />
      ) : (
        ''
      )}
    </>
  );
}
