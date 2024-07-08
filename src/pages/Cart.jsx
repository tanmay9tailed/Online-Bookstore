import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import url from '../../url';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (userId) {
      fetch(`${url}/cart/${userId}`)
        .then((res) => res.json())
        .then((data) => setCartItems(data))
        .catch((error) => console.error('Error fetching cart items:', error));
    }
  }, [userId]);

  const removeFromCart = (id) => {
    fetch(`${url}/cart/${userId}/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Item removed from cart:', data);
        // Update cartItems state after successful removal
        setCartItems(cartItems.filter((item) => item._id !== id));
      })
      .catch((error) => console.error('Error removing item from cart:', error));
  };

  if (!userId) {
    return (
      <div className="bg-blue-100 min-h-screen flex justify-center items-center">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden p-8">
          <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>
          <p className="text-gray-700">
            Please <Link to="/login" className="text-blue-600 hover:underline">login</Link> to view your cart.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-100 min-h-screen flex justify-center items-center">
      <div className="max-w-screen-xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8">
        <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center border-b border-gray-200 py-4">
                <img src={item.book_cover_img_link} alt={item.book_name} className="h-20 w-20 rounded-lg object-cover shadow-md" />
                <div className=" w-full ml-4 flex justify-between items-end">
                  <div>
                  <h3 className="text-xl font-semibold">{item.book_name}</h3>
                  <p className="text-gray-600">{item.author}</p>
                  <p className="text-gray-600">{item.genre} | {item.publication_year}</p>
                  <p className="text-blue-700 font-bold">{item.quantity} x &#8377;{item.price}</p>
                  </div>
                  <button
                    className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md mt-2"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4 flex justify-end">
              <Link to="/checkout" className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        ) : (
          <p className="text-gray-700">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
