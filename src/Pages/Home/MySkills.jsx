import React, { useEffect } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "../../data/index.json";

const MySkills = () => {
  const controls = useAnimation();
  const { ref: skillsRef, inView: skillsInView } = useInView();
  const { scrollYProgress } = useScroll();

  // Framer Motion Animation for skills
  useEffect(() => {
    if (skillsInView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.2 },
      }));
    }
  }, [controls, skillsInView]);

  // Horizontal scroll effect based on vertical scroll position
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container" ref={skillsRef}>
        {data?.skills?.map((skill, index) => (
          <motion.div
            key={index}
            className="skills--section--card"
            initial={{ opacity: 0, y: 50 }}
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
      <motion.div className="tech--skills" data-animated="true" style={{ x }}>
        {data?.tech?.map((tech, index) => (
          <div key={index} className="tech--skill-card">
            <img src={tech.svg} alt={tech.alt} className="tech--skill--icon" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default MySkills;
