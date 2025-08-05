import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profile from '../../assets/profile2.jpg';

const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src={profile}
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Mohammed Abdul Razzak Qureshi</span> from{" "}
                <span className="different"> Malakpet, Hyderabad</span>. 
                Throughout my professional journey, I’ve actively worked on multiple 
                <span className="different">real-world projects</span> 
                that gave me exposure to both 
                <span  className="different">frontend and backend technologies, databases, APIs, 
                  and version control systems.</span> 
                These experiences have helped me develop strong problem-solving skills, a collaborative mindset, 
                and a deep interest in building scalable and user-centric software solutions.
              </h4>
              <h4>
                Some of my interests apart form Coding :
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Technology{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cricket Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Watching Movies (Action,comedy){" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Introduction;