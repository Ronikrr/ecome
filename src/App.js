import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import Aboutus from './pages/aboutus';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Blogview from './components/blogview';
import Shop from './pages/shop';
import Shopview from './components/shopview';
import Service from './pages/service';
import Notfound from './pages/Notfound';
import Wishlist from './pages/wishlist';
import Cart from './pages/cart';
import Faq from './pages/faq';
import { jwtDecode } from 'jwt-decode';
import Ourteam from './pages/ourteam';
import Ordertraking from './pages/ordertraking';
import Giftcard from './pages/giftcard';
import Register from './components/register';
import Profile from './pages/profile';
import { Cartprovider } from './components/cart/cartcontext';
import { WishlistProvider } from './components/wishlist/wishlistcontext';
import Cartsection from './components/cart/cartsection';
import Checkoutpage from './components/cart/checkoutpage'
import ThankYou from './components/thankyou';
// Layout component that includes Header and Footer
const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

function App() {
  const [userid, setUserid] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      try {
        const decoded = jwtDecode(token); // Use jwtDecode here
        setUserid(decoded.userId); // Extract userId from the token
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);
  return (
    <Router>
        <Cartprovider>
      <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/regi' element={<Register />} />
          <Route path='/checkout' element={<Checkoutpage />} />
          <Route path='/thankyou' element={<ThankYou />} />
          <Route path='/profile' element={<Layout><Profile /></Layout>} />
          <Route path='/aboutus' element={<Layout><Aboutus /></Layout>} />
          <Route path='/contact' element={<Layout><Contact /></Layout>} />
          <Route path='/service' element={<Layout><Service /></Layout>} />
          <Route path='/wishlist' element={<Layout><Wishlist /></Layout>} />
          <Route path='/ourteam' element={<Layout><Ourteam /></Layout>} />
          <Route path='/cart' element={<Layout><Cart /></Layout>} />
          <Route path='/blog' element={<Layout><Blog /></Layout>} />
          <Route path='/blog/:blogid' element={<Layout><Blogview /></Layout>} />
          <Route path='/shop' element={<Layout><Shop /></Layout>} />
          <Route path='/ordertraking' element={<Layout><Ordertraking /></Layout>} />
          <Route path='/faq' element={<Layout><Faq /></Layout>} />
          <Route path='/shop/:productid' element={<Layout><Shopview /></Layout>} />
          <Route path='/giftcard' element={<Layout><Giftcard /></Layout>} />
          <Route path='*' element={<Notfound />} />
          {userid && <Cartsection userId={userid} />}
          {userid && <WishlistProvider userId={userid} />}
       
      </Routes>
        </Cartprovider>
    </Router>
  );
}

export default App;
