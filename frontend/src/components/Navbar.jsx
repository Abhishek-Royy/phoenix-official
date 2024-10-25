import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import webLogo from "../assets/phenioxLogo.png";
import Toggle from "@/particals/Toggle";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", route: "/" },
    { id: 2, text: "About", route: "/about" },
    { id: 3, text: "Service", route: "/services" },
    { id: 4, text: "Projects", route: "/projects" },
    { id: 5, text: "Team Member", route: "/team-member" }, // Updated unique IDs
    { id: 6, text: "Contact", route: "/contact" }, // Updated unique IDs
  ];

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <motion.div
      className="bg-[#111C29] flex justify-between items-center h-20 max-w-full sticky top-0 mx-auto px-2 md:px-32 text-white z-[999999999]"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <Link to="/">
        <img className="w-[75px]" src={webLogo} alt="Web-logo" />
      </Link>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`p-4 rounded-xl font-semibold m-2 cursor-pointer duration-300  ${
              activeMenu === item.text ? "active" : ""
            }`}
            onMouseEnter={() => setActiveMenu(item.text)}
            onMouseLeave={() => setActiveMenu("")}
          >
            <NavLink to={item.route} className="flex items-center">
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <Toggle />
      {/* Mobile Navigation Menu Toggle */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <IoCloseSharp size={30} /> : <RiMenu3Fill size={30} />}
      </div>
      {/* Mobile Navigation Menu */}
      <motion.ul
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={variants}
        className={`fixed md:hidden left-0 top-20 w-full h-full border-r border-r-gray-900 bg-[#ffffff41] ease-in-out duration-100 ${
          nav ? "block" : "hidden"
        }`}
      >
        {/* <img className="w-20 m-4" src={webLogo} alt="Web-logo" /> */}
        {navItems.map((item) => (
          <NavLink to={item.route} onClick={() => setNav(false)}>
            <li
              key={item.id}
              className=" p-4 text-3xl border-b-2 border-white rounded-xl duration-300 hover:text-black text-black cursor-pointer  my-5"
            >
              {item.text}
            </li>
          </NavLink>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Navbar;


// import React, { useState, useEffect } from "react";
// import { IoCloseSharp } from "react-icons/io5";
// import { RiMenu3Fill } from "react-icons/ri";
// import webLogo from "../assets/phenioxLogo.png";
// import Toggle from "@/particals/Toggle";
// import { motion } from "framer-motion";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [activeMenu, setActiveMenu] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   // Scroll event listener to change the background color of the navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navItems = [
//     { id: 1, text: "Home", route: "/" },
//     { id: 2, text: "About", route: "/about" },
//     { id: 3, text: "Service", route: "/services" },
//     { id: 4, text: "Projects", route: "/projects" },
//     { id: 5, text: "Team Member", route: "/team-member" },
//     { id: 6, text: "Contact", route: "/contact" },
//   ];

//   const variants = {
//     open: { opacity: 1, x: 0 },
//     closed: { opacity: 0, x: "100%" },
//   };

//   return (
//     <motion.div
//       className={` flex justify-between items-center h-20 max-w-full sticky top-0 mx-auto px-2 md:px-32 text-white z-[999999999] transition-colors duration-300 ${
//         isScrolled ? "bg-[#111C29]" : "bg-transparent"
//       }`}
//       style={{ boxShadow: isScrolled ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "none" }}
//     >
//       <Link to="/">
//         <img className="w-[75px]" src={webLogo} alt="Web-logo" />
//       </Link>
//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex items-center">
//         {navItems.map((item) => (
//           <li
//             key={item.id}
//             className={`p-4 rounded-xl font-semibold m-2 cursor-pointer duration-300 ${
//               activeMenu === item.text ? "active" : ""
//             }`}
//             onMouseEnter={() => setActiveMenu(item.text)}
//             onMouseLeave={() => setActiveMenu("")}
//           >
//             <NavLink to={item.route} className="flex items-center">
//               {item.text}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//       <Toggle />
//       {/* Mobile Navigation Menu Toggle */}
//       <div onClick={handleNav} className="block md:hidden">
//         {nav ? <IoCloseSharp size={30} /> : <RiMenu3Fill size={30} />}
//       </div>
//       {/* Mobile Navigation Menu */}
//       <motion.ul
//         initial={false}
//         animate={nav ? "open" : "closed"}
//         variants={variants}
//         className={`fixed md:hidden left-0 top-20 w-full h-full border-r border-r-gray-900 bg-[#ffffff41] ease-in-out duration-100 ${
//           nav ? "block" : "hidden"
//         }`}
//       >
//         {navItems.map((item) => (
//           <NavLink key={item.id} to={item.route} onClick={() => setNav(false)}>
//             <li
//               className="p-4 text-3xl border-b-2 border-white rounded-xl duration-300 hover:text-black text-black cursor-pointer my-5"
//             >
//               {item.text}
//             </li>
//           </NavLink>
//         ))}
//       </motion.ul>
//     </motion.div>
//   );
// };

// export default Navbar;
