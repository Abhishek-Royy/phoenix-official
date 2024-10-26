// import React from 'react'
// import { Routes,Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Homepage from './pages/Homepage'
// import Aboutpage from './pages/Aboutpage'
// import Services from './pages/Services'
// import Projects from './pages/Projects'
// import Teammember from './pages/Teammember'
// import Contactpage from './pages/Contactpage'
// import Footer from './components/Footer'


// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Homepage/>}/>
//         <Route path='/about' element={<Aboutpage/>}/>
//         <Route path='/services' element={<Services/>}/>
//         <Route path='/projects' element={<Projects/>}/>
//         <Route path='/team-member' element={<Teammember/>}/>
//         <Route path='/contact' element={<Contactpage/>}/>
      
//       </Routes>
//       <Footer/>
//     </div>
//   )
// }

// export default App



// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Teammember from './pages/Teammember';
import Contactpage from './pages/Contactpage';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or actual data fetching
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating a delay
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team-member" element={<Teammember />} />
            <Route path="/contact" element={<Contactpage />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
