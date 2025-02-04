import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { WishlistContext } from './wishlistcontext';
import Loader from '../loader';
import FeedbackMessage from '../successmessage';

const Wishlistsection = () => {
  const [user, setuser] = useState(null);
  const [products, setproducts] = useState([])
  const [loading, setLoading] = useState(false);
  const [feedback, setfeedback] = useState({ message: '', type: '' })

  const handleClear = () => {
    setfeedback({ message: '', type: '' })
  }
  const navigate = useNavigate();
  const { wishlist, removeformwishlist } = useContext(WishlistContext)
  useEffect(() => {
    const fetchData = async () => {
      const adminToken = localStorage.getItem('cosmtictoken');
      if (!adminToken) {
        navigate('/');
        return;
      }

      try {

        setLoading(true);
        const res = await fetch('http://localhost:8000/api/v1/user/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${adminToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (res.status === 401) {
          navigate("/");
          return;
        } else if (res.status === 500) {
          setfeedback({
            message: `Server error. Please try again later.`,
            type: 'error',
          });
        }

        if (!res.ok) {
          setfeedback({
            message: `Error fetching profile: ${res.status}`,
            type: 'error',
          });
        }
        const data = await res.json();
        setuser(data.user);
        setLoading(false);
      } catch (error) {
        setfeedback({
          message: `Failed to add lead. Please try again.${error.response ? error.response.data : error.message}`,
          type: 'error',
        });
      }
    };

    fetchData();
  }, [navigate]);

  useEffect(() => {
    const fetchProductData = async () => {
      if (!user) return;

      const userCart = wishlist[user.id] || [];
      console.log("User cart items:", userCart);

      const productPromises = userCart.map((item) => fetchProduct(item.id));

      try {
        setLoading(true);
        const products = await Promise.all(productPromises);
        setproducts(products.filter((product) => product)); // Filter 
      } catch (error) {
        setfeedback({
          message: `Failed to add lead. Please try again.${error.response ? error.response.data : error.message}`,
          type: 'error',
        });
      }
      finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [user, wishlist]);

  const fetchProduct = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
      if (!response.ok) throw new Error('Failed to fetch');
      const product = await response.json();
      console.log("Fetched product:", product);

      return product || null;
    } catch (error) {
      console.error('Error fetching product:', error);
      setfeedback({
        message: `Failed to add lead. Please try again.${error.response ? error.response.data : error.message}`,
        type: 'error',
      });
      return null;
    }
    finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />
  return (
    <div className='py-[170px]' >
      <div className="container mx-auto">
        <div className="z-10 flex flex-col w-full space-y-10 text-sm text-left small_head">
          <div className="main_head">
            <span className="text-5xl text-[#4f282b] capitalize prociono-regular leading-none font-semibold md:text-[40px]">
              my wishlist
            </span>
            {feedback.message && (
              <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />
            )}
          </div>
        </div>
        <div className="w-full mt-10">
          {products.length === 0 ? (
            <table className='w-full border border-[#4f282b] ' >
              <thead className='w-full' >
                <tr className='bg-[#4f282b] w-full *:py-4 text-white capitalize  ' >
                  <th>product</th>
                  <th>unit price</th>
                  <th>stockstatus</th>
                </tr>
              </thead>
              <tbody className="w-full">
                <tr className="w-full *:py-4 capitalize text-[#4f282b] ">
                  <th colSpan={3}> your wishlist is empty</th>
                </tr>
              </tbody>
            </table>
          ) : (
            <table className='w-full border border-[#4f282b] ' >
              <thead className='w-full' >
                <tr className='bg-[#4f282b] w-full *:py-4 text-white capitalize  ' >
                  <th>id</th>
                  <th>name</th>
                  <th>unit price</th>
                  <th>image</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody className='w-full' >
                {products.map((item, id) => (
                  <tr className='w-full *:py-4 *:text-center ' >
                    <td className='border border-[#4f282b]' >{id + 1}</td>
                    <td className='border border-[#4f282b]' >{item?.name}</td>
                    <td className='border border-[#4f282b]' >{item?.price}</td>
                    <td className='border border-[#4f282b]' >
                      <Link to={`/shop/${item.id}`} >
                        <img
                          src={item.api_featured_image}
                          alt=""
                          className="w-32 h-32 m-0 md:me-5 object-fit aspect-square "
                        />
                      </Link></td>
                    <td className='border border-[#4f282b] text-center' >
                      <button className="text-[25px] border-2 border-[#4f282b] hover:text-[#4f282b]  hover:bg-transparent bg-[#4f282b] text-white rounded-full p-2" onClick={() => removeformwishlist(user.id, item?.id)} ><i class="bi bi-bag-x"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

        </div>
      </div>
    </div>
  )
}

export default Wishlistsection