import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-lg mb-4">
                If you have any questions or inquiries, feel free to contact us. We are here to assist you.
              </p>
              <p className="text-lg mb-4">
                Email: contact@yourstore.com<br />
                Phone: 123-456-7890
              </p>
              <p className="text-lg mb-4">
                Our support team is available Monday to Friday from 9 AM to 6 PM (EST).
              </p>
            </div>
            <form className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" className="border border-gray-300 rounded-md py-2 px-3 mb-4" />

              <label htmlFor="email" className="text-lg font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" className="border border-gray-300 rounded-md py-2 px-3 mb-4" />

              <label htmlFor="message" className="text-lg font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="border border-gray-300 rounded-md py-2 px-3 resize-none mb-4"></textarea>

              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
