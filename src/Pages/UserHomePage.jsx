
import { motion } from "framer-motion";
import { UserSlide } from "../Components/User/UserSlide";
import UserReviews from "../Components/User/UserReviews";
import { UserCards } from "../Components/User/UserCards";


export const UserHomePage = () => {


  return (
  
  <div>
<UserSlide/>
{/* cattegery */}

<div class="bg-white py-6 px-4">
  <h2 class="text-xl font-semibold mb-4 text-gray-800">What's on your mind?</h2>
  <div class="flex overflow-x-auto space-x-6 scrollbar-hide">
    <div class="flex-shrink-0 text-center">
      <img src="https://shop.parallellearning.in/cdn/shop/products/Pure-Veg.gif?v=1643700430" class="w-20 h-20 rounded-full mx-auto" alt="Pure Veg" />
      <p class="mt-2 text-sm text-gray-700">Pure Veg</p>
    </div>
    <div class="flex-shrink-0 text-center">
      <img src="https://i.ndtvimg.com/i/2018-03/paratha_620x350_81520838436.jpg" class="w-20 h-20 rounded-full mx-auto" alt="Paratha" />
      <p class="mt-2 text-sm text-gray-700">Paratha</p>
    </div>
    <div class="flex-shrink-0 text-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSodh2_bz3T_LLA16yP9WdpyAoAUkC5-TdA&s" class="w-20 h-20 rounded-full mx-auto" alt="Chinese" />
      <p class="mt-2 text-sm text-gray-700">Chinese</p>
    </div>
    <div class="flex-shrink-0 text-center">
      <img src="https://www.foodandwine.com/thmb/6wTm7a0y87X97LK-ZMxe2787kI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/different-types-of-tea-FT-BLOG0621-7c7fd231e66d4fea8ca9a47cad52ba79.jpg" class="w-20 h-20 rounded-full mx-auto" alt="Tea" />
      <p class="mt-2 text-sm text-gray-700">Tea</p>
    </div>
    <div class="flex-shrink-0 text-center">
      <img src="https://thumbs.dreamstime.com/b/cup-cofee-top-heart-117247683.jpg" class="w-20 h-20 rounded-full mx-auto" alt="Coffee" />
      <p class="mt-2 text-sm text-gray-700">Coffee</p>
    </div>
    <div class="flex-shrink-0 text-center">
      <img src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/North-Indian-food-phpUPkVj5" class="w-20 h-20 rounded-full mx-auto" alt="North Indian" />
      <p class="mt-2 text-sm text-gray-700">North Indian</p>
    </div>
    <div class="flex-shrink-0 text-center">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/qltu1t1sdqzrvjmwygpl" class="w-20 h-20 rounded-full mx-auto" alt="Biryani" />
      <p class="mt-2 text-sm text-gray-700">Biryani</p>
    </div>
  </div>
</div>

{/* cards */}
<UserCards/>


{/* About */}
    <div className="w-full px-6 py-12 bg-white pl-25 ">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left transition duration-300 group-hover:scale-105 group-hover:text-red-500">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Kamal Restaurant
          </h1>
          <p className="text-gray-600 text-lg">
            We serve authentic, freshly prepared meals that bring flavor and joy to every bite.
            Whether you're craving classic Indian dishes or modern twists, we've got you covered!
          </p>
        </div>

        {/* Right: Image */}
        <motion.div
          className="md:w-1/4"
          whileHover={{ rotate: 1, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Delicious food"
            className="w-full h-auto rounded-xl shadow-xl object-cover transition duration-300 group-hover:shadow-red-400"
          />
        </motion.div>
      </motion.div>
    </div>

{/* Review */}
<UserReviews/>

</div>
   
  );
};