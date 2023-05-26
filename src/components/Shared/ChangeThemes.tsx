import React, { useState, useEffect } from "react";
import { BsFillSunFill, BsMoon } from "react-icons/bs";
import { IconContext } from "react-icons";

const ChangeThemes = () => {
  const [theme, setTheme] = useState("day");

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (!currentTheme) {
      return;
    }
    setTheme(currentTheme);
  }, []);

  const handleDarkMode = () => {
    const newTheme = theme === "autumn" ? "night" : "autumn";
    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleDarkMode}
        className="flex flex-row justify-center items-center btn gap-2 text-primary"
      >
        <IconContext.Provider
          value={{
            size: "2em",
            className: `global-class-name ${
              theme === "night" ? "night-mode" : ""
            }`,
            color: "white",
          }}
        >
          {theme === "autumn" ? (
            <>
              Go Dark <BsMoon />
            </>
          ) : (
            <>
              Light Up <BsFillSunFill />
            </>
          )}
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default ChangeThemes;
