

// src/App.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Teammember from "./pages/Teammember";
import Contactpage from "./pages/Contactpage";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import NotFound from "./components/NotFound";
import RefundPolicy from "./FooterPage/RefundPolicy";
import TermsAndConditions from "./FooterPage/Term&Condition";
import PrivacyPolicy from "./FooterPage/PrivacyPolicy";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or actual data fetching
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay
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

            {/* footerPage */}
            <Route path="/refundPolicy" element={<RefundPolicy />} />
            <Route path="/termCondition" element={<TermsAndConditions />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;




// import React, { useState, useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import Navbar from "./components/Navbar";
// import Homepage from "./pages/Homepage";
// import Aboutpage from "./pages/Aboutpage";
// import Services from "./pages/Services";
// import Projects from "./pages/Projects";
// import Teammember from "./pages/Teammember";
// import Contactpage from "./pages/Contactpage";
// import Footer from "./components/Footer";
// import Preloader from "./components/Preloader";
// import NotFound from "./components/NotFound";
// import RefundPolicy from "./FooterPage/RefundPolicy";
// import TermsAndConditions from "./FooterPage/Term&Condition";
// import PrivacyPolicy from "./FooterPage/PrivacyPolicy";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     const loadData = async () => {
//       await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay
//       setLoading(false);
//     };
//     loadData();
//   }, []);

//   const pageTransition = {
//     initial: { opacity: 0, x: 50 },
//     animate: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: -50 },
//   };

//   return (
//     <div>
//       {loading ? (
//         <Preloader />
//       ) : (
//         <>
//           <Navbar />
//           <AnimatePresence mode="wait">
//             <Routes location={location} key={location.pathname}>
//               <Route
//                 path="/"
//                 element={
//                   <motion.div
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     variants={pageTransition}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <Homepage />
//                   </motion.div>
//                 }
//               />
//               <Route
//                 path="/about"
//                 element={
//                   <motion.div
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     variants={pageTransition}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <Aboutpage />
//                   </motion.div>
//                 }
//               />
//               <Route
//                 path="/services"
//                 element={
//                   <motion.div
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     variants={pageTransition}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <Services />
//                   </motion.div>
//                 }
//               />
//               <Route
//                 path="/projects"
//                 element={
//                   <motion.div
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     variants={pageTransition}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <Projects />
//                   </motion.div>
//                 }
//               />
//               <Route
//                 path="/team-member"
//                 element={
//                   <motion.div
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     variants={pageTransition}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <Teammember />
//                   </motion.div>
//                 }
//               />
//               <Route
//                 path="/contact"
//                 element={
//                   <motion.div
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     variants={pageTransition}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <Contactpage />
//                   </motion.div>
//                 }
//               />

//               {/* Footer Pages */}
//               <Route
//                 path="/refundPolicy"
//                 element={
//                   <motion.div
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     variants={pageTransition}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <RefundPolicy />
//                   </motion.div>
//                 }
//               />
//               <Route
//                 path="/termCondition"
//                 element={
//                   <motion.div
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     variants={pageTransition}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <TermsAndConditions />
//                   </motion.div>
//                 }
//               />
//               <Route
//                 path="/privacypolicy"
//                 element={
//                   <motion.div
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     variants={pageTransition}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <PrivacyPolicy />
//                   </motion.div>
//                 }
//               />
//               <Route
//                 path="*"
//                 element={
//                   <motion.div
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     variants={pageTransition}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <NotFound />
//                   </motion.div>
//                 }
//               />
//             </Routes>
//           </AnimatePresence>
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
