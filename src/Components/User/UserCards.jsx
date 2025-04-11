import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../Config/AxiosInstance';
import { useNavigate } from 'react-router-dom';

export const UserCards = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const goToItemPage = (id) => {
    navigate(`/Iteam/${id}`);
  };

  const handleSeeAll = () => {
    navigate('/AllProducts');
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

  const topThree = products.slice(0, 3);

  return (
    <div className="bg-gray-50 py-10 px-6 md:px-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Top Picks in Chhindwara</h2>
        <button
          onClick={handleSeeAll}
          className="text-indigo-600 font-semibold hover:underline transition duration-200"
        >
          See All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topThree.map((product) => (
          <div
            key={product._id}
            onClick={() => goToItemPage(product._id)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-52 object-cover rounded-t-2xl"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
              <p className="text-sm text-gray-500">
                {product.description.length > 60
                  ? product.description.slice(0, 60) + '...'
                  : product.description}
              </p>
              <p className="text-sm text-blue-500 font-medium">
                {product.restaurantId?.restaurantname || 'Unknown Restaurant'}
              </p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-green-600 font-bold text-md">₹{product.price}</span>
                <span className="text-yellow-500 text-sm">⭐ 4.3 • 35-40 mins</span>
              </div>
              <div className="text-sm text-gray-400">
                <span className="line-through">MRP: ₹{product.mrp}</span> • {product.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
