import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import data from "../../data/index.json";

const MySkills = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.2 }, 
      }));
    }
  }, [controls, inView]);

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container" ref={ref}>
        {data?.skills?.map((skill, index) => (
          <motion.div
            key={index}
            className="skills--section--card"
            initial={{ opacity: 0, x:0 }}
            animate={controls}
            custom={index} 
          >
            <div className="skills--section--card--icon">
              <img src={skill.src} alt={skill.title} />
            </div>
            <div className="skills--section--card--title">
              <h3>{skill.title}</h3>
            </div>
            <div className="skills--section--card--description">
              <p>{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
