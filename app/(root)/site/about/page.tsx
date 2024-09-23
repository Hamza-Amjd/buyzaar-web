

import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-heading2-bold font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-center mb-12">
        Welcome to Buyzar! We are dedicated to providing the best online shopping experience for our customers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
          <img src="/profile/mission.png" alt="Our Mission" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-body-semibold ">Our Mission</h2>
          <p className="text-center">
            To deliver high-quality products with excellent customer service and a seamless shopping experience.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
          <img src="/profile/vision.png" alt="Our Vision" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-body-semibold">Our Vision</h2>
          <p className="text-center">
            To be the leading eCommerce platform known for innovation, quality, and customer satisfaction.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center"> */}
      <div className="justify-center">
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
          <img src="/profile/hamza.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mb-4" />
          <h3 className="text-body-semibold">Hamza Amjad</h3>
          <p className="text-gray-600">CEO & Founder</p>
        </div>
        {/* <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
          <img src="/path/to/team-member2.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mb-4" />
          <h3 className="text-xl font-semibold">Jane Smith</h3>
          <p className="text-gray-600">Head of Marketing</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
          <img src="/path/to/team-member3.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mb-4" />
          <h3 className="text-xl font-semibold">Emily Johnson</h3>
          <p className="text-gray-600">Customer Support Lead</p>
        </div> */}
      </div>

      <div className="mt-12 text-center">
        <h2 className="ttext-body-bold mb-4">Join Us on Our Journey!</h2>
        <p className="mb-4">Follow us on social media and stay updated on our latest products and offers.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-600 hover:underline">Facebook</a>
          <a href="#" className="text-blue-600 hover:underline">Twitter</a>
          <a href="#" className="text-blue-600 hover:underline">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
