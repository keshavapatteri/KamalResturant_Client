import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../Config/AxiosInstance';

export const AllProductsCards = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const goToItemPage = (id) => {
    navigate(`/Iteam/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/user/getAllProducts');
        setProducts(response.data.data);
      } catch (error) {
        console.log('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white min-h-screen py-12 px-6 md:px-20">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">
        Discover Chhindwara’s Favorites
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => goToItemPage(product._id)}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-gray-800 truncate">{product.title}</h3>
              <p className="text-sm text-gray-600 leading-snug">
                {product.description.length > 70
                  ? product.description.slice(0, 70) + '...'
                  : product.description}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-indigo-600 font-medium">
                  {product.restaurantId?.restaurantname || 'Unknown Restaurant'}
                </p>
                <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <span className="text-green-600 font-semibold text-md">
                  ₹{product.price}
                </span>
                <span className="text-yellow-500 text-sm">⭐ 4.3 • 35-40 mins</span>
              </div>
              <div className="text-xs text-gray-400">
                <span className="line-through">MRP: ₹{product.mrp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
