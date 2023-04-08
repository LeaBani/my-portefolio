import { useState } from "react";

function Theme() {

  const [isDark, setIsDark] = useState(false);

  function toggleIsDark(){
    setIsDark(!isDark);
    console.log(isDark);
  }
  return (
    <div className="Theme">
    <div className={isDark ? "dark" : "light"} onClick={toggleIsDark}>THEME</div>
    </div>
  );
}

export default Theme;
