import React from "react";
import "./Techstacks.css";
import {FaCss3Alt, FaReact, FaNodeJs ,FaJava} from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiVercel
} from "react-icons/si";
import {TbBrandVscode,TbBrandCpp} from "react-icons/tb"
import { DiCss3, DiMongodb ,DiMaterializecss} from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
import mui from "../../assets/mui.png";

const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <TbBrandCpp />
            <h5>C++</h5>
          </div>
          <div>
            <FaJava />
            <h5>Java</h5>
          </div>

          {/* <div>
            <SiExpress />
            <h5>Express</h5>
          </div> */}

          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Tailwind CSS</h5>
          </div>
          <div>
            <SiVercel />
            <h5>Vercel</h5>
          </div>
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          {/* <div>
            <TbBrandVscode />
            <h5>VScode</h5>
          </div> */}
          <div>
            {/* <DiMaterializecss /> */}
            <img src={mui}  alt="material ui" style={{objectFit:"contain",width:'130px',height:'130px',overflow:'hidden'}} />
            <h5>Material Ui</h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default Techstacks;