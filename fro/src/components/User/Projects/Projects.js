import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getprojects } from "../../../actions/projectAction";
import { domainName } from "../../../apis/serverApi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Reveal from "react-reveal/Reveal";

const Projects = ({ reff }) => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getprojects());
  }, [dispatch]);

  const project = projects.map((proj) => {
    return (
      <ul className="gallery_zoom">
      <li>
      <Reveal effect="fadeIn">
      <div className="inner">
        
                  <div key={proj._id} className="entry shane_tm_portfolio_animation_wrap">
     
        
                  <img
                                      src={domainName + proj.projectImage}
                                      
                                    />
     
     <div className="mobile_title">
          <h3>{proj.title}</h3>
          <span>{proj.description}</span>
         
          {proj.haveLink && (
            <button
              target="_blank"
              rel="noreferrer"
              href={proj.link}
            >
              <i className="fa fa-clone left"></i> View project code
            </button>
          )}
        </div>
      </div>
      </div>
      </Reveal>
      </li>
      </ul>
    );
  });

  return (
    <section
     
      ref={reff}
    >
      <div className="shane_tm_section" id="portfolio">
      <SimpleReactLightbox>
        <div className="shane_tm_portfolio">
          <div className="container">
            <div className="positon-relative">
              <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left">
                    <span>Portfolio</span>
                    <h3>Creative Portfolio</h3>
                  </div>
                </div>
              </div>
              {/* End shane_tm_title */}
              <div className="portfolio_filter">
                <Tabs>
                  <TabList>
                    <Tab>All</Tab>
                    <Tab>Design</Tab>
                    <Tab>Branding</Tab>
                    <Tab>Photography</Tab>
                  </TabList>
                  <div className="portfolio_list">
      <SRLWrapper>
        <TabPanel>
      
             

       {project}
    
      
      </TabPanel>
      </SRLWrapper>
      </div>
     </Tabs>
     </div>
     </div>
     </div>
     </div>
     </SimpleReactLightbox>
     </div>
    </section>
  );
};

export default Projects;
