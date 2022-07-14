import { Link } from 'react-router-dom';
import Carrinho from '../../assets/images/Vector.svg';
import { Container, Car } from './styles';
import { useState } from 'react';
import { Cart } from '../Cart';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { ICarItem } from '../../store/modules/cart/types';

export function Header() {
  const [openCart, setOpenCart] = useState(false);
  const car = useSelector<IState, ICarItem[]>(state => state.cart.items);
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
            <span data-testid="cart-size">{car.length}</span>
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
