import React from "react";
import  Header  from "./components/Header/Header";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import  About  from "./components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
import  Github  from "./components/About/Github";
import  Projects  from "./components/Projects/Projects";
import  Contact  from "./components/Contact/Contact";
import  Footer  from "./components/Footer/Footer";
import  ScrollToTop  from "./components/ScrollToTop/ScrollToTop";
function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
        <Header />
      </section>
      <main>
        <About />
        <Github />
        <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
export default App;
// git push -u originpublic mai2
