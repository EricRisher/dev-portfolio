import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AboutMe() {
  const el = useRef(null);
  const el2 = useRef(null);
  const observerRef = useRef(null); // Ref for storing the observer

  useEffect(() => {
    const options = {
      root: null, // using the viewport as the root
      rootMargin: "0px",
      threshold: 0.1, // 10% of the item is visible
    };

    observerRef.current = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the typing animation for each paragraph when it comes into view
          if (entry.target === el.current) {
            new Typed(el.current, {
              strings: [
                "Hey there, I'm Eric Risher. I recently graduated from UC Berkeley Coding Bootcamp and I'm truly passionate about Computer Science. I love diving into JavaScript and I'm skilled in both front-end and back-end web development. Throughout my journey, I've built a strong foundation in web applications and software engineering. I'm also well-versed in various technologies like MongoDB, Git, Node.js, React, jQuery, MySQL, and more.",
              ],
              startDelay: 100,
              typeSpeed: 1,
              showCursor: false,
              onComplete: () => {
                new Typed(el2.current, {
                  strings: [
                    "What really drives me is bringing theory to life in practical projects. I thrive on the challenge of applying my knowledge to real-world scenarios, creating meaningful solutions along the way.",
                  ],
                  typeSpeed: 1,
                  showCursor: false,
                });
              },
            });
        }
          // Once animation is started, unobserve the entry
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe the elements
    observerRef.current.observe(el.current);
    observerRef.current.observe(el2.current);

    return () => {
      observerRef.current.disconnect(); // Disconnect observer on cleanup
    };
  }, []);

  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/ericimg.webp" alt="about-me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section--description" ref={el}></p>
          <p className="hero--section--description" ref={el2}></p>
        </div>
      </div>
    </section>
  );
}
