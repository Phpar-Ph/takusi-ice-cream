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
    <div className="w-full h-full bg-white ">
      <div className="h-full container lg:max-w-[1024px] md:max-w-[768px] pb-20 pt-20">
        <div
          className=" mt-10 flex flex-col-reverse m-4 sm:flex-row sm:gap-2
        "
        >
          <div className="mt-4 sm:m-0 p-4 lg:p-6 border-2 rounded-2xl sm:w-1/2 drop-shadow-lg">
            <form onSubmit={handleSubmit}>
              {/* NAME */}
              <div className="mb-1 lg:mb-2">
                <label
                  className="block text-gray-700 text-xs font-medium mb-1"
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
                  className="w-full  text-sm pt-1 pb-1 pl-2 lr-2 lg:text-md lg:pt-2 lg:pb-2 lg:pl-4 lr-4 border-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              {/* EMAIL */}
              <div className="mb-1 lg:mb-2">
                <label
                  className="block text-gray-700 text-xs font-medium mb-1"
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
                  className="w-full  text-sm pt-1 pb-1 pl-2 lr-2 lg:text-md lg:pt-2 lg:pb-2 lg:pl-4 lr-4 border-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              {/* PHONE */}
              <div className="mb-1 lg:mb-2">
                <label
                  className="block text-gray-700 text-xs font-medium mb-1"
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
                  className="w-full  text-sm pt-1 pb-1 pl-2 lr-2 lg:text-md lg:pt-2 lg:pb-2 lg:pl-4 lr-4 border-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-1 lg:mb-2">
                <label
                  className="block text-gray-700 text-xs font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full  text-sm pt-1 pb-1 pl-2 lr-2 lg:text-md lg:pt-2 lg:pb-2 lg:pl-4 lr-4 border-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-vertical max-h-25 lg:max-h-34 "
                  rows="8"
                  required
                ></textarea>
              </div>
              <div className="flex-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white text-sm px-8 py-1 rounded-sm hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="sm:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold mb-1">
              Get in touch!
            </h2>
            <p className="text-sm lg:text-md  mb-4 text-right font-extralight">
              We’d love to hear from you! Whether you have a question about our
              flavors, want to give us feedback, or just want to say hello, our
              team is ready to listen.
            </p>
            <p className="text-sm mb-1">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-sm mb-2">
              <strong>Address:</strong> 123 Ice Cream St, Cebu City, Philippines
            </p>
            <div className=" h-50 sm:h-36 lg:h-72 border-1">
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
