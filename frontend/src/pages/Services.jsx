
import React, { useEffect, useState } from "react";
import axios from "axios";

function Servicepage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); 

  // Function to fetch service data from the server
  const fetchServerData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/service/services`
      );
      setServices(response.data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchServerData();
  }, []);

  return (
    <div className="h-auto dark:bg-[#111C29] bg-[#fff] py-24 md:px-32 ">
      <div className="lg:max-w-full w-[95%] mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-8 dark:text-yellow-500">
          Our Services
        </h1>
        <p className="text-lg dark:text-gray-100 mb-12">
          We offer a range of services to help you achieve your business goals.
        </p>
        
        {loading ? (
          // Loader component or JSX can go here
          <div className="text-center">
            <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mx-auto mb-8"></div>
            <p className="text-lg dark:text-gray-100">Loading services...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-6 flex flex-col items-center text-center"
              >
                <img
                  src={service.sImage}
                  alt={service.sName}
                  className="mb-4 w-full h-auto object-cover"
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {service.sName}
                </h2>
                <p className="text-gray-500">{service.sDescription}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Servicepage;
