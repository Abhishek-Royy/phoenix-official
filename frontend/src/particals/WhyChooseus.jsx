import React from "react";
import {motion} from "framer-motion"

const WhyChooseUs = () => {
  return (
    <section
      className="py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=600")`,
      }}
    >
      <div className="container mx-auto px-4 md:px-32">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-100">
          Why Choose Us
        </h1>
        <p className="text-center text-lg mb-12 text-gray-200">
          We provide exceptional service and quality that sets us apart from the
          competition.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -10,x:2 }} className="bg-[#ffffff12] border-2 p-6 rounded-lg shadow-lg text-center">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M3 14h18M4 6h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl text-white font-semibold mb-2">
              Expert Team
            </h3>
            <p className="text-gray-300">
              Our team consists of industry experts with years of experience in
              their respective fields.
            </p>
          </motion.div>
          <motion.div whileHover={{ y: -10,x:2 }} className="bg-[#ffffff12] border-2 p-6 rounded-lg shadow-lg text-center">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M3 14h18M4 6h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl text-white font-semibold mb-2">
              Quality Service
            </h3>
            <p className="text-gray-300">
              We ensure the highest quality in all our services and products,
              guaranteeing customer satisfaction.
            </p>
          </motion.div>
          <motion.div whileHover={{ y: -10,x:2 }} className="bg-[#ffffff12] border-2 p-6 rounded-lg overflow-hidden shadow-lg text-center">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M3 14h18M4 6h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl text-white font-semibold mb-2">
              Customer Focused
            </h3>
            <p className="text-gray-300">
              Our customers are our top priority, and we strive to meet their
              needs and exceed expectations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
