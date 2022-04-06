import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Cart from './views/Cart';
import Contact from './views/Contact';
import CreatePost from './views/CreatePost';
import Home from './views/Home';
import IG from './views/IG';
import Login from './views/Login';
import News from './views/News';
import Shop from './views/Shop';
import ShopStripe from './views/ShopStripe';
import SignUp from './views/SignUp';
import SinglePost from './views/SinglePost';
import SingleProduct from './views/SingleProduct';

export default function App () {

  const getUserFromLocalStorage = () => {
    const foundUser = localStorage.getItem('vanguard_user')
    if (foundUser) {
      return JSON.parse(foundUser)
    }
    return {}
  }

  const [age, setAge] = useState(9000);
  const [people, setPeople] = useState(['andrew', 'david', 'anthony', 'tyler', 'tommy', 'april', 'christopher', 'dylan', 'jamia']);
  const [user, setUser] = useState(()=>getUserFromLocalStorage());
  const [cart, setCart] = useState([])

  const logMeIn = (userObj) => {
    setUser(userObj)
    localStorage.setItem('vanguard_user', JSON.stringify(userObj))
  }
  const logMeOut = () => {
    setUser({})
    localStorage.removeItem('vanguard_user')
  }


  const addToCart = (product) => {setCart([...cart, product])};
  const removeFromCart = (product) => {
    let newCart = [...cart];
    for (let i = newCart.length-1; i>=0; i--) {
      if (product.id === newCart[i].id){
        newCart.splice(i, 1)
        break
      }
    }
    setCart(newCart)
  };
  const sumTotalCart = (cart) => {
    let total = 0;
    for (let i = 0; i<cart.length; i++) {
      total += cart[i].price
    }
    return total.toFixed(2)
  };

  const getCartAPI = async () => {
    if (user.token) {
      const res = await fetch('http://localhost:5000/api/cart/get', {
        method: "GET",
        headers: {
          'x-access-token': user.token
        }
      });
      const data = await res.json();
      console.log(data)
      setCart(data.cart)
    }
  };

  useEffect(()=> {
    getCartAPI()
  }, [])

  return (
    <div>
      <Navbar currentUser={user} logMeOut={logMeOut} cart={cart} sumTotalCart={sumTotalCart}/>
      <div className='container d-flex justify-content-center mt-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About myClass={people} />} />
          <Route path='/news' element={<News />} />
          <Route path='/instagram' element={<IG />} />
          <Route path='/instagram/:postId' element={<SinglePost user={user} />} />
          <Route path='/shop' element={<Shop user={user} addToCart={addToCart} />} />
          <Route path='/shop/:productId' element={<SingleProduct user={user} addToCart={addToCart} />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/login' element={<Login logMeIn={logMeIn} />} />
          <Route path='/signup' element={<SignUp />} />

          <Route path='/instagram/post/create' element={<CreatePost user={user} />} />
          <Route path='/cart' element={<Cart cart={cart} sumTotalCart={sumTotalCart} removeFromCart={removeFromCart} user={user} />}/>
          

          <Route path='/stripe/shop' element={<ShopStripe />} />
        </Routes>
      </div>
    </div>
  )

}