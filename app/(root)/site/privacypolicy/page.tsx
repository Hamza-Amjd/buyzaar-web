
import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-justify">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Effective Date: 22, Sep 2014
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Introduction</h2>
      <p className="mb-4">
        We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [yourwebsite.com], use our services, or interact with us in any way.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
      <p className="mb-4">
        We may collect the following types of information:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Personal Information:</strong> Information that identifies you personally, such as your name, email address, phone number, and mailing address.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">3. How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect for various purposes, including to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide, maintain, and improve our services</li>
        <li>Communicate with you, including sending updates and promotional materials</li>
        <li>Respond to your inquiries and support requests</li>
        <li>Analyze usage trends and enhance user experience</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>With Service Providers:</strong> We may employ third-party companies and individuals to facilitate our services, process payments, or perform other functions on our behalf.</li>
        <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Security</h2>
      <p className="mb-4">
        We take the security of your personal information seriously and use reasonable measures to protect it. However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        You have the right to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Access the personal information we hold about you</li>
        <li>Request corrections to your personal information</li>
        <li>Request deletion of your personal information</li>
        <li>Withdraw consent for data processing, where applicable</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with a new effective date.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <p>
        Buyzaar  
      </p>
        <Link href="mailto:hamzaamjad294@gmail.com">hamzaamjad294@gmail.com</Link> 
    </div>
  );
};

export default PrivacyPolicy;
