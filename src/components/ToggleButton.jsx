import React, { useState, useEffect } from "react";

const ToggleButton = () => {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`ToggleButton ${theme}`}>
      <code>{theme}</code>
      <input
        className="input"
        type="checkbox"
        aria-label="Toggle Theme"
        checked={theme === "Dark"}
        onChange={(e) => toggleTheme(e.currentTarget.checked)}
      />
    </div>
  );
};

export default ToggleButton;
