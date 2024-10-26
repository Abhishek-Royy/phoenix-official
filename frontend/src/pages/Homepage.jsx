import React from "react";
import HeroVideo from "@/particals/HeroVideo";
import TrustCompany from "@/particals/TrustCompany";

import Aboutpage from "./Aboutpage";
import Testimonials from "@/particals/Testimonials";
import Faq from "@/particals/Faqs";
import Teammember from "./Teammember";

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


        {/* --------------TEAM MEMBERS--------------------------------------------------- */}
        <Teammember/>

        {/* ------------------TESTIMONIALS---------------------------------------- */}
       <Testimonials/>
          
     {/* ----------------------FAQ------------------------------------------------------- */}
     <Faq/>
      </div>
    </>
  );
}

export default Homepage;
