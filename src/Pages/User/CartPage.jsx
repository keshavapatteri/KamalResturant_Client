import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../Config/AxiosInstance';

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const response = await axiosInstance.get('/Cart/productuserid', {
        withCredentials: true,
      });

      const cartItems = response.data.Product.map((item) => ({
        ...item.ProductId,
        quantity: item.quantity,
        cartItemId: item._id,
      }));

      setCartItems(cartItems);
    } catch (error) {
      console.error('Failed to fetch cart:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  };

  const updateQuantityOnServer = async (cartItemId, productId, newQuantity) => {
    try {
      const response = await axiosInstance.put(
        `/Cart/update`,
        { productId, quantity: newQuantity },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error('Error updating quantity:', error.response?.data || error.message);
    }
  };

  const deleteCartItem = async (productId) => {
    try {
      await axiosInstance.delete(`/Cart/remove`, {
        data: { productId },
        withCredentials: true,
      });

      setCartItems((prev) => prev.filter((item) => item._id !== productId));
    } catch (error) {
      console.error('Error deleting cart item:', error.response?.data || error.message);
    }
  };

  const increaseQuantity = async (id) => {
    const item = cartItems.find((item) => item.cartItemId === id);
    const newQuantity = item.quantity + 1;
    const updatedCart = await updateQuantityOnServer(id, item._id, newQuantity);

    if (updatedCart) {
      setCartItems((prev) =>
        prev.map((it) =>
          it.cartItemId === id ? { ...it, quantity: newQuantity } : it
        )
      );
    }
  };

  const decreaseQuantity = async (id) => {
    const item = cartItems.find((item) => item.cartItemId === id);
    if (item.quantity === 1) return;
    const newQuantity = item.quantity - 1;
    const updatedCart = await updateQuantityOnServer(id, item._id, newQuantity);

    if (updatedCart) {
      setCartItems((prev) =>
        prev.map((it) =>
          it.cartItemId === id ? { ...it, quantity: newQuantity } : it
        )
      );
    }
  };

  if (loading) {
    return <div className="text-center text-lg py-10 animate-pulse">Loading Cart...</div>;
  }

  if (cartItems.length === 0) {
    return <div className="text-center text-gray-500 py-10 text-xl">Your cart is empty 🛒</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Your Cart</h1>

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {cartItems.map((item, idx) => (
          <div
            key={item._id || idx}
            className="flex flex-col sm:flex-row items-center gap-4 p-4 border-b last:border-none"
          >
            <img
              src={item.image || '/placeholder.jpg'}
              alt={item.title}
              className="w-28 h-28 object-cover rounded-lg shadow"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>

              <div className="mt-2 flex items-center gap-3">
                <button
                  onClick={() => decreaseQuantity(item.cartItemId)}
                  className="px-2 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded"
                >
                  -
                </button>
                <span className="text-md font-medium">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.cartItemId)}
                  className="px-2 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="text-lg font-semibold text-green-600">
                ₹{item.price * item.quantity}
              </div>
              <button
                onClick={() => deleteCartItem(item._id)}
                className="text-red-600 hover:underline text-sm"
              >
                ❌ Remove
              </button>
            </div>
          </div>
        ))}

        <div className="p-6 flex justify-between items-center border-t">
          <h3 className="text-xl font-semibold text-gray-800">Total:</h3>
          <p className="text-2xl text-green-700 font-bold">₹{calculateTotal()}</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-indigo-700 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
