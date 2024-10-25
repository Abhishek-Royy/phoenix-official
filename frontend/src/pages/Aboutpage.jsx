import React from 'react'
import FirstSlider from '@/particals/FirstSlider'
import Servicesweprovide from '@/particals/Servicesprovide'

import WhyChooseUs from '@/particals/WhyChooseus'
import Achievements from '@/particals/Acchivements'


function Aboutpage() {
  return (
    <>
       <div className="servicesweprovide">
          <Servicesweprovide />
        </div>
        <div className="first-slider ">
          <FirstSlider />
        </div>
        <div className="statecounter">
          <WhyChooseUs/>
        </div>
        {/* --------------ACCHIVEMENTS-------------------------------- */}
        <div className="acchivements">
          <Achievements/>
        </div>
    </>
  )
}

export default Aboutpage
