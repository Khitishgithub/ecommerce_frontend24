import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-lg mb-4">
            Welcome to our online store! We're dedicated to providing high-quality products and excellent service to our customers. 
          </p>
          <p className="text-lg mb-4">
            Our journey began with a passion for delivering unique and innovative items to our community. With a focus on customer satisfaction, we aim to offer a seamless shopping experience.
          </p>
          <p className="text-lg mb-4">
            At our core, we value integrity, reliability, and customer-centricity. Each product is curated with care, ensuring that you receive only the best.
          </p>
          <p className="text-lg mb-4">
            Thank you for choosing us. Explore our collection and discover something special!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
