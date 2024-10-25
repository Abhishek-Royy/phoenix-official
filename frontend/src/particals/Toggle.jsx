// import React, { useState } from "react";

// function Toggle() {
//   // State to manage the toggle status
//   const [isChecked, setIsChecked] = useState(false);
//   // State to simulate dark and light mode
//   const [darkMode, setDarkMode] = useState(false);

//   // Function to handle the toggle change
//   const handleToggle = () => {
//     setIsChecked(!isChecked);
//   };

//   // Function to toggle dark and light mode
//   const handleModeChange = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <div className="p-4">
//         {/* Dark Mode Toggle Button */}
//         <button
//           onClick={handleModeChange}
//           className={`mb-4 px-4 py-2 rounded transition-colors
//           ${darkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-black"}
//           hover:${darkMode ? "bg-gray-700" : "bg-gray-400"}`}
//         >
//           {/* Button styling changes based on darkMode */}
//           {darkMode ? "🌙" : "☀️"}
//         </button>

//         {/* Toggle Switch */}
//         <label className="inline-flex items-center cursor-pointer">
//           <input
//             type="checkbox"
//             value=""
//             className="sr-only peer"
//             checked={isChecked}
//             onChange={handleToggle}
//           />
//           <div
//             className={`relative w-11 h-6 rounded-full transition-colors
//             ${isChecked ? "bg-blue-600" : "bg-gray-200"}
//             peer-focus:ring-4 peer-focus:ring-blue-300 
//             dark:peer-focus:ring-blue-800 dark:${isChecked ? "bg-blue-500" : "bg-gray-700"} 
//             peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
//             peer-checked:after:border-white 
//             after:content-[''] after:absolute after:top-0.5 
//             after:start-[2px] after:bg-white after:border-gray-300 
//             after:border after:rounded-full after:h-5 
//             after:w-5 after:transition-all dark:border-gray-600`}
//           ></div>
//         </label>
//       </div>
//     </div>
//   );
// }

// export default Toggle;



import React, { useState } from "react";

function Toggle() {
  // State to manage the toggle status
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle the toggle change
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className={`relative w-11 h-6 rounded-full 
            ${isChecked ? "bg-blue-600" : "bg-gray-200"} 
            peer peer-focus:ring-4 peer-focus:ring-blue-300 
            dark:peer-focus:ring-blue-800 dark:bg-gray-700 
            peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
            peer-checked:after:border-white 
            after:content-[''] after:absolute after:top-0.5 
            after:start-[2px] after:bg-white after:border-gray-300 
            after:border after:rounded-full after:h-5 
            after:w-5 after:transition-all dark:border-gray-600`}
        ></div>
      </label>
    </>
  );
}

export default Toggle;
