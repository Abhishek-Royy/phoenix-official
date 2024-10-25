import React from "react";

function HeroVideo() {
  return (
    <>
      <div className="relative w-full h-full">
        <video
          className="h-full w-full object-cover"
          src="https://videos.pexels.com/video-files/3141207/3141207-uhd_2560_1440_25fps.mp4"
          loop
          autoPlay
          muted
        ></video>
        <div className="absolute inset-0 flex flex-col items-center justify-center ">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center ">
          Find the right freelance service,<span className="text-[#fde720]"> right away</span>
          </h1>
          <h2 className="text-white text-xl md:text-3xl font-semibold mt-7 md:w-full w-2/3 text-center leading-10">Join a platform that empowers you to take your career to the next level.</h2>
        </div>
      </div>
    </>
  );
}

export default HeroVideo;

