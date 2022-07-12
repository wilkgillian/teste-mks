import { useState, useEffect } from 'react';
import { FiShoppingBag } from 'react-icons/fi';

import { Container, ProductList } from './styles';
import { formatPrice } from '../../util/format';
import { useCart } from '../../hooks/useCart';
import axios from 'axios';
import { Cart } from '../../components/Cart';
interface Products {
  id: number;
  name: string;
  brand: string;
  description: number;
  photo: string;
  price: number;
}
interface ProductFormatted extends Products {
  priceFormatted: string;
}
//
interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const { addProduct, cart } = useCart();

  // const cartItemsAmount = cart.reduce((sumAmount, product) => {
  //   const newSumAmount = { ...sumAmount };
  //   newSumAmount[product.id] = product.amount;

  //   return newSumAmount;
  // }, {} as CartItemsAmount);

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get(
        'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=20&sortBy=id&orderBy=DESC'
      );

      const data = response.data;
      const product = data.products.map(
        (prod: {
          id: number;
          name: string;
          brand: string;
          photo: string;
          description: string;
          price: number;
        }) => ({
          id: prod.id,
          name: prod.name,
          brand: prod.brand,
          photo: prod.photo,
          description: prod.description,
          priceFormatted: formatPrice(prod.price)
        })
      );
      setProducts(product);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    addProduct(id);
  }
  return (
    <Container>
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.photo} alt={product.name} />
            <div>
              <strong>{product.name}</strong>
              <span>{product.priceFormatted}</span>
            </div>
            <strong>{product.description}</strong>
            <button
              type="button"
              data-testid="add-product-button"
              onClick={() => handleAddProduct(product.id)}
            >
              <FiShoppingBag />
              <span>COMPRAR</span>
            </button>
          </li>
        ))}
      </ProductList>
    </Container>
  );
};

export default Home;
