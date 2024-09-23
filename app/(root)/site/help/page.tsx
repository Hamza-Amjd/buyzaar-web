// src/Help.js

import React from 'react';

const Help = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Help Center</h1>
      <p className="text-lg text-center mb-12">
        We're here to help! Browse our FAQs or contact us for assistance.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-6 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold">1. How do I create an account?</h3>
          <p>
            To create an account, click on the "Sign Up" button on the top right corner of the homepage and fill out the required information.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold">2. How can I reset my password?</h3>
          <p>
            If you've forgotten your password, click on "Forgot Password?" on the login page and follow the instructions sent to your email.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold">3. What payment methods do you accept?</h3>
          <p>
            We accept major credit cards, PayPal, and other secure payment methods.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold">4. How can I track my order?</h3>
          <p>
            After your order is shipped, you will receive a tracking number via email. You can enter this number on our website to track your order.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions that are not answered in the FAQs, feel free to reach out to our support team.
      </p>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-2">Customer Support</h3>
        <p>Email: <a href="mailto:hamzaamjad294@gmail.com" className="text-blue-600 hover:underline">hamzaamjad294@gmail.com</a></p>
        <p>Phone: <a href="tel:+9223064160969" className="text-blue-600 hover:underline">+92 (306) 4160969</a></p>
        <p>Available: Mon - Fri, 9 AM - 5 PM ( GMT+05:00)</p>
      </div>

    </div>
  );
};

export default Help;
