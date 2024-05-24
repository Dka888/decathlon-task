import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { CartItem, Product } from './type';
import { Home } from './Pages/Home';
import { Shop } from './Pages/Shop';
import {Routes, Route} from 'react-router-dom';
import { Cart } from './Pages/Cart';
import { Card } from './Pages/Card';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null)
  const [message, setMessage] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);

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

const handleClickProductCard = useCallback((_product: Product) => {
    setProduct(_product);
}, [product]);


const handleAddToCart = useCallback((_product: Product) => {
  const isCart = cart.find(item => item.id === _product.id)
  if(isCart) {
    const newCart = cart.map(item => {
      if(item.id === _product.id) {
        item.quantity += 1;
      }
      return item
    })

    setCart(newCart);
  } else {
  const newCart = {
    ..._product,
    quantity: 1,
  }
  setCart([...cart, newCart]);
  }

}, [cart]);

const handleRemoveCart = useCallback((item: CartItem) => {
  const newCart = cart.map(_item => {
    if(_item.id  === item.id) {
      _item.quantity -= 1;
    }
    return _item;
  }).filter(cartItem => cartItem.quantity > 0);

  setCart(newCart);
}, [cart])

  return (
    <>
      <Routes>
        <Route path='/decathlon-task/home' element={<Home />} />
        <Route path='/decathlon-task/shop' element={<Shop products={products} message={message} handleClickProductCard={handleClickProductCard} handleAddToCart={handleAddToCart} />} />
        <Route path='/decathlon-task/cart' element={<Cart cart={cart} handleAddToCart={handleAddToCart} handleRemoveCart={handleRemoveCart}/>} />
        <Route path='/decathlon-task/card' element={<Card product={product} handleAddToCart={handleAddToCart}/>} />
      </Routes>
    </>
  )
}

export default App
