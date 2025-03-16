import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   console.log("Form submitted:", formData);
  // };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_thgqujs", "template_mpjdzgx", form.current, {
        publicKey: "P0KoKju3syXlN_UAX",
      })
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="w-full h-full bg-primary pt-20 pb-20" id="contact">
      <div className="h-full container  ">
        <div
          className=" mt-10 flex  flex-col-reverse sm:flex-row sm:gap-2
        "
        >
          <div className=" sm:m-0 p-8 lg:p-6  sm:w-1/2 drop-shadow-lg border-transparent rounded-xl bg-secondary">
            {/* EMAIL FORM */}
            <form ref={form} onSubmit={sendEmail}>
              {/* NAME */}
              <div className="contact-container ">
                <label className="contactLabel-font">Name</label>
                <input
                  type="text"
                  name="name"
                  className="contactInput"
                  required
                />
              </div>
              {/* EMAIL */}
              <div className="contact-container">
                <label className=" contactLabel-font">Email</label>
                <input
                  type="email"
                  name="email"
                  className="contactInput"
                  required
                />
              </div>
              {/* PHONE */}
              <div className="contact-container">
                <label className="contactLabel-font">Phone</label>
                <input
                  type="tel"
                  name="number"
                  className="contactInput"
                  required
                />
              </div>
              <div className="contact-container">
                <label className="contactLabel-font">Message</label>
                <textarea
                  name="message"
                  className="contactInput  resize-vertical max-h-25 lg:max-h-34  xl:max-h-60"
                  rows="8"
                  required
                ></textarea>
              </div>
              <div className="flex-center">
                <button type="submit" className="btn" value="Send">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="sm:w-1/2 p-4">
            <h2 className="text-5xl font-bold mb-1 text-right font-archivo text-bluePrimary">
              Get in touch!
            </h2>
            <p className="text-xl  mb-4 text-right font-extralight text-bluePrimary">
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
            <div className=" h-50 sm:h-36 lg:h-72 xl:h-[28rem] border-2 ">
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
