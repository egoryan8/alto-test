import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './components/Product';
import Pagination from './components/Pagination';
import Preloader from './components/Preloader';

import './App.css';
import './styles/Pagination.css';
import './styles/Preloader.css';
import './styles/Product.css';

function App() {
  const [products, setProduts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const productsPerPage = 4;

  const getProducts = async (skip) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://testtask.alto.codes/front-products.php?skip=${skip}`,
      );
      setProduts(data.products);
      setTotalCount(data.totalCount);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProducts(skip);
  }, [skip]);

  const handlePaginate = (pageNumber) => {
    setSkip((pageNumber - 1) * productsPerPage);
  };

  return (
    <div className="App">
      {isLoading ? (
        <Preloader />
      ) : (
        <ul className="products">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.image_url}
              availability={product.availability}
              color={product.color}
              shortDesc={product.short_desc}
            />
          ))}
        </ul>
      )}
      <Pagination
        totalCount={totalCount}
        productsPerPage={productsPerPage}
        handlePaginate={handlePaginate}
      />
    </div>
  );
}

export default App;
