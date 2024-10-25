import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FirstSlider() {
  const slideImage = [
    {
      id: 1,
      image:
        "https://images.prismic.io//intuzwebsite/2caf3e7f-1704-42e2-908f-3d089da3e3ac_The+Ultimate+Guide+to+Android+App+Development.png?w=1200&q=75&auto=format,compress&fm=png8",
    },
    {
      id: 2,
      image:
        "https://miro.medium.com/v2/resize:fit:960/1*0WDqECSWiU6N41iBQc3KPQ.png",
    },
    {
      id: 3,
      image: "https://verticalresponse.com/wp-content/uploads/2022/10/seo.jpeg",
    },
    {
      id: 4,
      image: "https://squareit.in/img/pages/graphic-design.jpg",
    },
    {
      id: 5,
      image:
        "https://buildfire.com/wp-content/uploads/2021/10/Whats-the-Difference-Between-UX-Design-vs.-UI-Design_@3x-1-scaled.jpg",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Below 1024px width
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
          slidesToScroll: 1, // Scroll 1 slide at a time
          infinite: true,
        },
      },
      {
        breakpoint: 768, // Below 768px width
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full relative z-50 h-auto px-2 md:px-32 py-16 bg-[#111C29]">
        <div className="slider-container w-full h-full">
          <Slider {...settings}>
            {slideImage.map((item) => (
              <div className="w-full h-[25vh] md:h-[25vh] px-2" key={item.id}>
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt="all image name"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FirstSlider;
