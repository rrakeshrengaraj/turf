import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section
      id="contact"
      
    >
      <div className="py-8 flex flex-col bg-[#222831]">
        <div className="flex-1 py-18 sm:py-15">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            {/* Title Section */}
            <div className="text-center mb-5">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Contact Us
              </h1>
              <p className="italic text-[#14FFEC] text-lg sm:text-xl">
                Get in touch with our team
              </p>
            </div>

            {/* Contact Content */}
            <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="rounded-xl p-8 border border-gray-700 bg-[#393E46]">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#14FFEC] flex items-center justify-center gap-2">
                  <FaPaperPlane className="text-[#14FFEC]" />
                  Send Us a Message
                </h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded bg-[#222831] border border-gray-700 text-white focus:border-[#14FFEC] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded bg-[#222831] border border-gray-700 text-white focus:border-[#14FFEC] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 rounded bg-[#222831] border border-gray-700 text-white focus:border-[#14FFEC] focus:outline-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-[#14FFEC] text-[#222831] font-bold rounded hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="rounded-xl p-6 border border-gray-700 bg-[#393E46]">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#14FFEC]">
                  Our Information
                </h2>
                <div className="space-y-6 text-gray-300">
                  <div className="flex items-start">
                    <div className="text-[#14FFEC] mr-4 mt-1">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Address</h3>
                      <p>Near Pandiyan Schoo, Jeevanagar 1st Street</p>
                      <p>Jaihindpuram, Madurai-625011 </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-[#14FFEC] mr-4 mt-1">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p>+91 88700 83033</p>
                      
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-[#14FFEC] mr-4 mt-1">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p>info@turfxl.com</p>
                      <p>bookings@turfxl.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-[#14FFEC] mr-4 mt-1">
                      <FaClock className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Opening Hours</h3>
                      <p>Monday - Sunday: 6:00 AM - 10:00 PM</p>
                      <p>Open on all public holidays</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
