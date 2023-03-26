import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiOpenai,
  SiChakraui
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import exercises from "./projectsimgs/exercises.png"
import chatBot from "./projectsimgs/chatBot.png"
import youtube from "./projectsimgs/youtube-lite.png"
import crypto from "./projectsimgs/crypto.png"
import seo from "./projectsimgs/google-seo.png"
import note from "./projectsimgs/notes.png"
import { TbApi } from "react-icons/tb";
import { BsBootstrap } from "react-icons/bs";
const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={exercises}
                  alt="Mail Chimp"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Gymate - Ultimate Fitness Club</h2>
              <p>
              A Responsive Exercises Webpage that provides users with a variety of exercises and visually demonstrating by GIF to help them to perform correctly. The website offers a wide range of exercises,as well as related media and equipments on how to get the most out of each exercise.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <SiTailwindcss />
              </div>
              <div>
                <a
                  href="https://benevolent-croissant-a9e3c8.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/AbdulRazzak6478/react-exercises-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={chatBot}
                  alt="chatBot"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>chatGPT-3 AI Bot</h2>
              <p>
              Using an OpenAi Api to implement Ai-Powered chatbot.Which is powerful natural language processing engine to understand user input and provides an easy-to-use interface for creating and managing chatbot conversations.
              </p>
              <div>
                <IoLogoJavascript />
                <FaReact />
                <SiTailwindcss />
                <SiOpenai />
              </div>
              <div>
                <a
                  href="https://react-chat-gpt-ai-app.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/AbdulRazzak6478/react-chatGPT-Ai-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={youtube}
                  alt="youtube"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Youtube Clone</h2>
              <p>
              Responsive Youtube Lite website using rapid api to set the Categories, search based results and video details with related Feeds.
              </p>
              <div>
                <IoLogoJavascript />
                <SiHtml5 />
                <FaReact />
                <SiTailwindcss />
                <TbApi />
              </div>
              <div>
                <a
                  href="https://react-youtube-lite.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/AbdulRazzak6478/react-youtube-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={seo}
                  alt="google-seo"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Google SEO</h2>
              <p>
              Responsive Google SEO clone similar to webpage that user can put query in the search Box and upon click search button will be able to see the search feed from the server based upon their query.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <SiTailwindcss />
              </div>
              <div>
                <a
                  href="https://react-google-search-app.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/AbdulRazzak6478/react-google-search-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={crypto}
                  alt="crypto-coins"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Crypto Currency</h2>
              <p>
              A Crypto coins website by using coins api to fetch amoung 13,200 coins and displaying its properties, graph charts in various time period in different currencies
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <SiChakraui />
              </div>
              <div>
                <a
                  href="https://react-home-abdulrazzak6478.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/AbdulRazzak6478/crypto-currency-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={note}
                  alt="notes-webpage"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Notes App</h2>
              <p>
              Notes app which allow user to make notes by assigning its priority, and store the notes in local Storage with complete CRUD functionality.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
                <BsBootstrap />
              </div>
              <div>
                <a
                  href="https://react-notes-app-gamma.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/AbdulRazzak6478/react-notes-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
