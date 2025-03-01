import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full h-screen bg-white ">
      <div className="h-full container">
        <div
          className=" shadow-md flex flex-col-reverse
        "
        >
          <div className="mt-4 p-2 border-2 rounded-2xl">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-md font-bold mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full text-md px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-md font-bold mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-md px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-md font-bold mb-1"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full text-md px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-md font-bold mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full text-md px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical max-h-25"
                  rows="8"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white text-xl px-8 py-1 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className=" ">
            <h2 className="text-6xl font-bold mb-2">Get in touch!</h2>
            <p className="text-xl mb-4 text-right">
              We’d love to hear from you! Whether you have a question about our
              flavors, want to give us feedback, or just want to say hello, our
              team is ready to listen.
            </p>
            <p className="text-sm mb-2">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-sm mb-4">
              <strong>Address:</strong> 123 Ice Cream St, Cebu City, Philippines
            </p>
            <div className=" h-50 border-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.14949366360804!2d123.86980960375791!3d10.30292419297053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99f001d9f9e7f%3A0xdb0d73e94ef55c5e!2sTakusi%20Ice%20Cream%20-%20Cebu!5e0!3m2!1sen!2sph!4v1740659761629!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
