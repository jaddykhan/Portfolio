import React, { useEffect } from "react";
import SkillBar from "react-skillbars";
import { useSelector, useDispatch } from "react-redux";
import { getSkills } from "../../../actions/skillAction";
import Reveal from "react-reveal/Reveal";

const Skills = ({ reff }) => {
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);
  const colors = {
    "bar": {
      "hue": 0,
      "saturation": 100,
      "level": 0,
       
    },
    "title": {
      "text": {
        "hue": 45,
        "saturation": {
          "minimum": 30,
          "maximum": 70
        },
        "level": 50
      },
      "background": {
        "hue": 30,
        "saturation": {
          "minimum": 30,
          "maximum": 70
        },
        "level": {
          "minimum": 0,
          "maximum": 50
        }
      }
    }
  }

  return (
    <div ref={reff}>
       <div className="shane_tm_section">
        <div className="shane_tm_skills">
          <div className="container">
            <div className="skills_inner">
              <Reveal effect="fadeInLeft">
                <div className="left">
                  <div className="shane_tm_title">
                    <h3>I have high skills in developing and programming</h3>
                  </div>
                  <div className="text">
                    <p>
                      I am working on a professional, visually sophisticated and
                      technologically proficient, responsive and
                      multi-functional personal portfolio template Shane.
                    </p>
                  </div>
                </div>
                {/* End .left */}
              </Reveal>

              <Reveal effect="fadeInLeft">
                <div className="right">
                  <div className="tokyo_progress">
                    <div className="progress_inner">
                      <span>
                        <span className="label">Web Development</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                       
                          <div
                            className="bar_in"
                            style={{ width: 100 + "%" }}
                          > <SkillBar
                          skills={skills}
                          colors={colors}
                          animationDuration={4000}
                        ></SkillBar></div>
                        </div>
                      </div>
                    </div>
                    {/* End .progress_inner */}
        
     </div>
     </div>
     </Reveal>
     </div>
     </div>
     </div>
     </div>
     </div>
  );
};

export default Skills;
