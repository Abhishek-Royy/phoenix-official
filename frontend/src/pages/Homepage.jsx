import React from "react";
import HeroVideo from "@/particals/HeroVideo";
import TrustCompany from "@/particals/TrustCompany";

import Aboutpage from "./Aboutpage";
import Testimonials from "@/particals/Testimonials";

function Homepage() {
  return (
    <>
      <div className="main w-full h-auto ">
        <div className="hero-video w-full h-[90vh] ">
          <HeroVideo />
        </div>
        <div className="trust-company">
          <TrustCompany />
        </div>
        {/* ------------ABOUT SECTION------------------------------ */}
        <div id="#about" className="about">
          <Aboutpage />
        </div>

        {/* ------------------TESTIMONIALS---------------------------------------- */}
       <Testimonials/>
          
     
      </div>
    </>
  );
}

export default Homepage;
