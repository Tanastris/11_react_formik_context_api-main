// pariusst ir atvaizuodti produktus is https://dummyjson.com/products

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Btn from '../UI/Btn';
import { Link } from 'react-router-dom';

const singleProdItem = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
  images: [
    'https://cdn.dummyjson.com/product-images/1/1.jpg',
    'https://cdn.dummyjson.com/product-images/1/2.jpg',
    'https://cdn.dummyjson.com/product-images/1/3.jpg',
    'https://cdn.dummyjson.com/product-images/1/4.jpg',
    'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
  ],
};

// our custom hook
// yra funnkcija kurioje mes galim naudoti hooks
// tturi prasideti zodeliu 'use'

function useApiData(url) {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        console.log('resp ===', resp);
        setData(resp.data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, [url]);
  return[data, setData]
}

function ProductsList() {
  const [respObj, setRespObj] = useApiData('https://dummyjson.com/products');
  const mainProductsArr = respObj.products || []
  console.log('mainProductsArr ===', mainProductsArr);
  // console.log(' mainProductsArr[0] ===', JSON.stringify(mainProductsArr[0]));
  

  return (
    <div>
      <ul className='grid grid-cols-3 gap-3 mt-8'>
        { mainProductsArr.map((pObj) => (
          <li className='border' key={pObj.id}>
            <img className='block h-64 w-full object-cover' src={pObj.thumbnail} alt={pObj.title} />
            <div className="info p-4">
              <h3 className='text-lg font-semibold'>{pObj.title}</h3>
              <p>Price: {pObj.price.toFixed(2)}</p>
              <Link className='mt-6 inline-block place-self-start text-lg border px-6 py-2 border-slate-600 rounded-md hover:bg-indigo-600 hover:text-white transition-colors ' to={`/products/${pObj.id}`}>Read more</Link>
            </div>
            
            </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
