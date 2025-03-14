import React from "react";
import { Link } from "react-scroll";
import Titles from "../../../src/components/Titles";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Adjust stagger timing here
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--wrapper">
        <div className="hero--section--content--box">
          <motion.div
            className="hero--section--content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="section--title" variants={itemVariants}>
              Hi, I'm Eric
            </motion.h1>
            <h1 className="hero--section--title">
              <Titles />
            </h1>
            <motion.p
              className="hero--section--description"
              variants={itemVariants}
            >
              UC Berkeley Full-Stack bootcamp graduate with a passion for
              Computer Science, specializing in JavaScript frameworks and
              full-stack web development. With experience in building scalable
              web applicaton and optimizing data systems.
            </motion.p>
          </motion.div>

          <Link className="btn btn-primary GIT " to="contact">
            Get in Touch
          </Link>
        </div>
        <motion.div
          className="hero--section--img"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <img src="./img/ericcamera.webp" alt="hero section" />
        </motion.div>
      </div>
    </section>
  );
}
