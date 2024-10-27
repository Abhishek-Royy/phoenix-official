// import React, { useEffect, useState } from "react";

// function Toggle() {
//   // State to manage the toggle status
//   const [isChecked, setIsChecked] = useState(false);

//   // State to manage the theme
//   const [theme, setTheme] = useState("light");

//   // Toggle state change handler
//   const handleToggle = () => {
//     setIsChecked(!isChecked);
//     handleThemeSwitch(); // Switch theme when the toggle is changed
//   };

//   // Apply the theme by adding/removing the "dark" class from the document element
//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);

//   // Theme switching handler
//   const handleThemeSwitch = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <div className="flex items-center">
//       <label className="inline-flex items-center cursor-pointer">
//         <input
//           type="checkbox"
//           className="sr-only peer"
//           checked={isChecked}
//           onChange={handleToggle}
//         />
//         <div
//           className={`relative w-11 h-6 rounded-full transition-colors
//             ${isChecked ? "bg-blue-600" : "bg-gray-200"}
//             peer-focus:ring-4 peer-focus:ring-blue-300
//             dark:peer-focus:ring-blue-800 dark:bg-gray-700
//             peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
//             peer-checked:after:border-white
//             after:content-[''] after:absolute after:top-0.5 after:left-[2px]
//             after:bg-white after:border-gray-300 after:border after:rounded-full
//             after:h-5 after:w-5 after:transition-all dark:border-gray-600`}
//         ></div>
//       </label>
//     </div>
//   );
// }

// export default Toggle;

import React, { useEffect, useState } from "react";

function Toggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the new theme to localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex items-center">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={theme === "dark"}
          onChange={handleToggle}
        />
        <div
          className={`relative w-11 h-6 rounded-full transition-colors
            ${theme === "dark" ? "bg-blue-600" : "bg-gray-200"}
            peer-focus:ring-4 peer-focus:ring-blue-300
            dark:peer-focus:ring-blue-800 dark:bg-gray-700 bg-yellow-500
            peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
            peer-checked:after:border-white
            after:content-[''] after:absolute after:top-0.5 after:left-[2px]
            after:bg-black after:border-gray-300 after:border after:rounded-full
            after:h-5 after:w-5 after:transition-all dark:border-gray-600`}
        ></div>
      </label>
    </div>
  );
}

export default Toggle;
