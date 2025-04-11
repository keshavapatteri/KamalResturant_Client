import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Aarav Mehta",
    review:
      "Amazing food and top-notch service! The ambiance was delightful and made the experience memorable.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    review:
      "I loved the spicy biryani! Great place for family dinners. Will definitely come again.",
    rating: 4,
  },
  {
    name: "Rahul Verma",
    review:
      "A cozy place with delicious dishes and polite staff. Perfect for date nights!",
    rating: 5,
  },
];

const UserReviews = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-500">
          Real experiences from food lovers just like you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {reviews.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center justify-center mb-4">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-lg" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">"{item.review}"</p>
            <h4 className="font-semibold text-red-500 text-lg">
              — {item.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
