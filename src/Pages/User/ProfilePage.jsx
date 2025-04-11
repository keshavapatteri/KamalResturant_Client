import React, { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import { axiosInstance } from '../../Config/AxiosInstance';

export const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get('/user/profile', {
          withCredentials: true
        });
        console.log(res);
        
       setProfile(res.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    fetchProfile();
  }, []);


  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition duration-300">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-600 dark:text-indigo-400">
        User Profile
      </h2>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <FaUser className="text-indigo-500" />
          <p><strong className="font-semibold">Name:</strong> {profile?.name}</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-indigo-500" />
          <p><strong className="font-semibold">Email:</strong> {profile?.email}</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-indigo-500" />
          <p><strong className="font-semibold">Address:</strong> {profile?.address}</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaPhone className="text-indigo-500" />
          <p><strong className="font-semibold">Phone Number:</strong> {profile?.phonenumber}</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaCalendarAlt className="text-indigo-500" />
          <p><strong className="font-semibold">Joined:</strong> {new Date(profile?.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

  