import React from "react";
import data from "../../data/index.json";

const MySkills = () => {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">What I Do</h2>
      </div>

      <div className="skills--section--container">
        {data?.skills?.map((skill, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--card--content">
              <div className="skills--section--card--icon">
                <img src={skill.src} alt={skill.title} />
              </div>
              <div className="skills--section--card--title">
                <h3>{skill.title}</h3>
              </div>
            </div>
            <div className="skills--section--card--description">
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="tech--skills">
        <div className="tech--skills--slider">
          {[...data.tech, ...data.tech].map((tech, index) => (
            <div key={index} className="tech--skill-card">
              <img
                src={tech.svg}
                alt={tech.alt}
                width="150px"
                height="150px"
                className="tech--skill--icon"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
