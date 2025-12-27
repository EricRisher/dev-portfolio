import React, { useEffect, useRef } from "react";
import data from "../../data/index.json";

export default function MyPortfolio() {
  const observerRef = useRef(null);

  useEffect(() => {
    // Initialize IntersectionObserver
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observerRef.current = observer;

    const cards = document.querySelectorAll(".portfolio--section--card");
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect();
    };
  }, []);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  };

  const navigateToGitHub = () => {
    window.open("https://github.com/EricRisher", "_blank").focus();
  };

  const navigateToProject = (url) => {
    window.open(url, "_blank").focus();
  };

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading">Featured Projects</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) =>
          item.active ? ( // Check if the project is active
            <div key={index} className="portfolio--section--card">
              <div
                className="portfolio--section--img"
                onClick={() => navigateToProject(item.live)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="portfolio--section--card--content">
                <div>
                  <h3 className="portfolio--section--title">{item.title}</h3>
                  <p className="text-md">{item.description}</p>
                </div>
                <div className="portfolio--section--card--content--icons">
                  <p
                    className="text-sm portfolio--link"
                    onClick={() => window.open(item.href, "_blank").focus()}
                  >
                    View In GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <path
                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                        stroke="currentColor"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </p>
                  <p
                    className="text-sm portfolio--link"
                    onClick={() => window.open(item.live, "_blank").focus()}
                  >
                    Visit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <path
                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                        stroke="currentColor"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </p>
                </div>
                <div className="portfolio--tech-stack">
                  <h3 className="tech-stack--title">Tech Stack</h3>
                  <div className="tech-stack--items">
                    {item.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-stack--item">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}
        <div className="portfolio--section--card recent-work">
          <div
            className="portfolio--section--img"
            onClick={() =>
              window
                .open(
                  "https://github.com/EricRisher/three-js-portfolio",
                  "_blank"
                )
                .focus()
            }
          >
            <img
              src="./img/threejs-portfolio.png"
              alt=""
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">
                Creative Developer Portfolio | WIP
              </h3>
              <p className="text-md">
                Currently working on updating my portfolio site to an updated
                design that utilizes threejs for a more interactive and unique
                user experiece. The new design features a fully interactable 3D
                Sony Playstation Portable console that offers a more engaging
                way to explore my projects and personality.
              </p>
            </div>
            <div className="portfolio--section--card--content--icons">
              <p
                className="text-sm portfolio--link"
                onClick={() =>
                  window
                    .open(
                      "https://github.com/EricRisher/three-js-portfolio",
                      "_blank"
                    )
                    .focus()
                }
              >
                View In GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>
            <div className="portfolio--tech-stack recent-work-tech">
              <h3 className="tech-stack--title">Tech Stack</h3>
              <div className="tech-stack--items">
                <span className="tech-stack--item">Next JS</span>
                <span className="tech-stack--item">React</span>
                <span className="tech-stack--item">TypeScript</span>
                <span className="tech-stack--item">Three JS</span>
                <span className="tech-stack--item">React Fiber</span>
                <span className="tech-stack--item">Framer Motion</span>
                <span className="tech-stack--item">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-github" onClick={navigateToGitHub}>
        View all Projects
      </button>
    </section>
  );
}
