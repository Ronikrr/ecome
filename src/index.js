import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Cartprovider } from './components/cart/cartcontext';
import { WishlistProvider } from './components/wishlist/wishlistcontext';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cartprovider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </Cartprovider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
