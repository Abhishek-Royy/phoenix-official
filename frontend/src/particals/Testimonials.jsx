


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "This is an amazing product! It has changed the way our team collaborates.",
      name: "Michael Gough",
      position: "CEO at Google",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      quote:
        "This is an amazing product! It has changed the way our team collaborates.",
      name: "Jane Doe",
      position: "Product Manager at Microsoft",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jane-doe.png",
    },
    {
      quote:
        "A fantastic solution for managing projects efficiently. Highly recommend!",
      name: "John Smith",
      position: "Lead Developer at Facebook",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/john-smith.png",
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 640, // Adjust the breakpoint to your needs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // You can also adjust other settings here if needed
        },
      },
    ],
  };

  return (
    <div
      className="wrapper w-full h-auto py-20 dark:bg-gradient-to-l to-black from-[#111C29]"
      // style={{
      //   background: `url("https://xmple.com/wallpaper/linear-blue-black-gradient-2560x1440-c2-010204-080b2b-a-225-f-14.svg")`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="md:w-full w-[90%] mx-auto">
        <h1 className="text-center text-3xl font-semibold leading-8 dark:text-gray-100 mb-10">
          What our Client Says ?
        </h1>
        <div className="max-w-screen-lg mx-auto text-center">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <figure
                key={index}
                className="max-w-screen-md  mb-10 md:h-max h-auto py-10 bg-[#3a3e8641] dark:bg-[#ffffff17] mx-2" // Added margin on mobile view
              >
                <svg
                  className="w-10 h-10 mx-auto mb-3 text-yellow-300 dark:text-yellow-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                  <p className="text-2xl italic font-medium  dark:text-white">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={testimonial.image}
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite className="pe-3 font-medium  dark:text-white">
                      {testimonial.name}
                    </cite>
                  </div>
                </figcaption>
              </figure>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
