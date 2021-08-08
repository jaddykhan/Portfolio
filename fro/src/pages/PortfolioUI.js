import React, { useState, useEffect, useRef } from "react";
import Contacts from "../components/User/Contacts/Contacts";
import Education from "../components/User/Education/Education";
import Experience from "../components/User/Experience/Experience";
import About from "../components/User/About/About";
import Footer from "../components/User/Footer/Footer";
import PageIntro from "../components/User/PageIntro/PageIntro";
import Projects from "../components/User/Projects/Projects";
import TestimonialTwo from "../components/User/TestimonialTwo";
import Skills from "../components/User/Skills/Skills";
import Video from "../components/User/video/VideoTwo";
import SimpleSlider from "../components/User/Brand";
import isLogin from "../shared/authorization";
import { useSelector } from "react-redux";
import Navbar from "../components/User/Navbar/Navbar";
import NewsTwo from "../components/User/NewsTwo";


const PortfolioUI = () => {
  const [isLogged, setIsLogged] = useState(isLogin);
  const login = useSelector((state) => state.login.isLogin);
  const projectSection = useRef(null);
  const educationSection = useRef(null);
  const experienceSection = useRef(null);
  const skillSection = useRef(null);
  const videoSection = useRef(null);
  const simpleSliderSection = useRef(null);
  const testimonialTwoSection = useRef(null);
  const contactSection = useRef(null);
  const homeSection = useRef(null);
  const newsTwoSection = useRef(null);
  const aboutSection = useRef(null);
  

  useEffect(() => {
    setIsLogged(isLogin);
  }, [login]);

  const scrollUtil = (section) => {
    window.scrollTo({
      top: section.current.offsetTop,
      behavior: "smooth",
    });
  };
  const onLinkClick = (section) => {
    switch (section) {
      case "projectSection":
        scrollUtil(projectSection);
        break;
        case "aboutSection":
          scrollUtil(aboutSection);
          break;
      case "educationSection":
        scrollUtil(educationSection);
        break;
      case "experienceSection":
        scrollUtil(experienceSection);
        break;
        case "newsTwoSection":
          scrollUtil(newsTwoSection);
          break;
      case "skillSection":
        scrollUtil(skillSection);
        break;
        case "videoSection":
        scrollUtil(videoSection);
        break; 
        case "simpleSliderSection":
        scrollUtil(simpleSliderSection);
        break;
      case "contactSection":
        scrollUtil(contactSection);
        break;
        case "testimonialTwoSection":
        scrollUtil(testimonialTwoSection);
        break;
      case "homeSection":
        scrollUtil(homeSection);
        break;
      default:
        scrollUtil(homeSection);
    }
  };

  return (
    <div>
      {!isLogged && <Navbar onLinkClick={onLinkClick} />}
      <PageIntro reff={homeSection} />
      <About reff={aboutSection}/>
      <Education reff={educationSection} />
      <Experience reff={experienceSection} />
      <Projects reff={projectSection} />
      <Skills reff={skillSection} />
      <Video reff={videoSection}/>
      <SimpleSlider reff={simpleSliderSection}/>
      <TestimonialTwo reff={testimonialTwoSection}/>
      <NewsTwo reff={newsTwoSection}/>
      <Contacts reff={contactSection} />
      <Footer onLinkClick={onLinkClick} />
    </div>
  );
};

export default PortfolioUI;
