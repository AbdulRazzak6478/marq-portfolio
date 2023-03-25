import React from "react";
import  Navbar  from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import Logo from "../../assets/logo-img.webp";

import "./Header.css";
const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
           Abdul Razzak
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
 export default Header;