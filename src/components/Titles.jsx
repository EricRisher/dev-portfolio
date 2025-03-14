import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Titles = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Developer",
        "Software Engineer",
        "Tech Enthusiast",
        "UI/UX Designer",
        "Web Developer",
        "Photographer",
      ],
      typeSpeed: 50,
      backSpeed: 60,
      backDelay: 2000,
      startDelay: 600,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return <span ref={el} />;
};

export default Titles;
