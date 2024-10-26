import React from "react";

function Faq() {
  return (
    <>
      <div className="md:w-full dark:bg-[#111C29] x-2 md:px-32 m-auto h-auto py-16 ">
        <h2 className="text-3xl font-semibold text-center leading-7 text-black dark:text-white mb-10">
          Frequently asked questions by clients
        </h2>
        <section
          className="grid grid-cols-1 p-5 gap-y-10 divide-y bg-transparent rounded-[10px]"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 8px 29px 8px",
          }}
        >
          <details open className="group py-1 text-lg">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold dark:text-gray-300 marker:[font-size:0px]">
              <span>What is PhoenixTech ?</span>
              <svg
                className="h-6 w-6 rotate-0 transform dark:text-[#ffe72f] text-blue-800 group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="dark:text-[#ffe72f] text-blue-800 text-[15px] leading-5">
              Phoenixtech is a cutting-edge technology company specializing in
              innovative software solutions and digital transformation services,
              empowering businesses to thrive in the modern tech landscape.
              Their expertise spans AI, cloud computing, and custom software
              development, driving efficiency and growth for clients worldwide.
            </p>
          </details>
          <details className="group py-1 text-lg">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold dark:text-gray-300 marker:[font-size:0px]">
              <span>Why choose us ? ?</span>
              <svg
                className="h-6 w-6 rotate-0 transform dark:text-[#ffe72f] text-blue-800 group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="dark:text-[#ffe72f] text-blue-800 text-[15px] leading-5">
              Clients choose Phoenixtech for its blend of innovative solutions
              and personalized service, ensuring tailored, high-quality results
              that drive business growth. With a focus on cutting-edge
              technology and a customer-centric approach, they deliver
              exceptional value and lasting impact.
            </p>
          </details>
          <details className="group py-1 text-lg">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold dark:text-gray-300 marker:[font-size:0px]">
              <span>Which kind of service we provide ?</span>
              <svg
                className="h-6 w-6 rotate-0 transform dark:text-[#ffe72f] text-blue-800 group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="dark:text-[#ffe72f] text-blue-800 text-[15px] leading-5">
            Phoenixtech offers a range of services, including AI-driven solutions, cloud computing, custom software development, and digital transformation. They help businesses enhance efficiency, scalability, and innovation across various industries.
            </p>
          </details>
        </section>
      </div>
    </>
  );
}

export default Faq;
