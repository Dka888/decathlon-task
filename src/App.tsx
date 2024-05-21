import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from './type';
import { Home } from './Pages/Home';
import { Shop } from './Pages/Shop';
import {Routes, Route} from 'react-router-dom';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const [message, setMessage] = useState('')

useEffect(() => {
  const loadingData = async() => {
     const response = await axios.get('https://fakestoreapi.com/products');
    if (response.status === 200) {
     setProducts(response.data);
    }
    if (response.status !== 200) {
      setMessage('Nie udało się pobrać dane');
      setTimeout(() => setMessage(''), 3000);
    }
  }

  loadingData();
},[]);

  return (
    <>
      <Routes>
        <Route path='/decathlon-task' element={<Home />} />
        <Route path='/decathlon-task/shop' element={<Shop products={products} message={message}/>} />
      </Routes>
    </>
  )
}

export default App
