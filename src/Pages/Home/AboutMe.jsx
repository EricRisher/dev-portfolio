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
                "Eric Risher is a UC Berkeley Coding Bootcamp graduate and recent Computer Science student with skills in JavaScript, and both front-end and back-end web development. He possesses a strong foundation in web applications, software engineering, and various technologies such as MongoDB, Git, Node.js, React, jQuery, MySQL, among others.",
              ],
              startDelay: 100,
              typeSpeed: 5,
              backSpeed: 50,
              showCursor: false,
            });
          } else if (entry.target === el2.current) {
            new Typed(el2.current, {
              strings: [
                "Eric has demonstrated his ability to apply theoretical knowledge and hands-on programming skills to real-world projects.",
              ],
              startDelay: 4600,
              typeSpeed: 5,
              backSpeed: 50,
              showCursor: false,
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
