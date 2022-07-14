import { useState, useEffect, useCallback } from 'react';
import { FiShoppingBag } from 'react-icons/fi';

import { Container, ProductList } from './styles';
import { formatPrice } from '../../util/format';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';

interface ProductFormatted extends IProduct {
  priceFormatted: string;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const dispatch = useDispatch();

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
          price: prod.price
        })
      );
      setProducts(product);
    }
    loadProducts();
  }, []);

  const handleAddProductToCart = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );
  return (
    <Container>
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.photo} alt={product.name} />
            <div>
              <strong>{product.name}</strong>
              <span>{formatPrice(product.price)}</span>
            </div>
            <strong>{product.description}</strong>
            <button
              type="button"
              data-testid="add-product-button"
              onClick={() => handleAddProductToCart(product)}
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
