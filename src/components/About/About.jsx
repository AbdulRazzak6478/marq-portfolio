import React from "react";
import "./About.css";
import Type from "./Type";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Introduction from "./Introduction";
import Timeline from "./Timeline";
import Techstacks from "./Techstacks.jsx";
const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Abdul Razzak</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          A Front-End Developer who loves solving problems and building
          projects. I am equipped with a variety of technologies and tools to
          help me build the best possible product.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/AbdulRazzak6478"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:abdulrazzak4186@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919515426478"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-abdul-razzak-qureshi/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            // href="https://drive.google.com/file/d/1IBahA178010Uiu2Eq9tUbHV8NIR7ZR8P/view?usp=share_link"
            href="https://drive.google.com/file/d/1dnildTg1KL4YBq8AObI8tu1QB4vtOA8D/view?usp=share_link"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
          <a
            href="https://www.instagram.com/marq_immu6478"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://goo.gl/maps/YxwajwoTW2EkPtw28"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LocationOnIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};

export default About;
