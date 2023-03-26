import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a
          href="https://github.com/imbickydutta"
          rel="noreferrer"
          target="_blank"
        >
          <h3 className="footer">Made with ❤ By Abdul Razzak</h3>
        </a>
      </div>
    </>
  );
};
export default Footer;