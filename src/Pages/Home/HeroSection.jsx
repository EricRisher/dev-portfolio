import React from 'react';
import { Link } from 'react-scroll';
import Titles from '../../../src/components/Titles';

export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className='hero--wrapper'>
          <div className="hero--section--content--box">
            <div className="hero--section--content">
              <h1 className="section--title">Hi, I'm Eric</h1>
              <h1 className="hero--section--title">
                <Titles />
              </h1>
              <p className="hero--section--description">
                UC Berkeley Extension graduate and Computer Science student
                skilled in JavaScript and full-stack web development, eager to
                bring dedication and meticulousness to a creative position.
              </p>
            </div>
            <Link className="btn btn-primary GIT" to="Contact">
              Get in Touch
            </Link>
          </div>
          <div className="hero--section--img">
            <img src="./img/ericcamera.webp" alt="hero section" />
          </div>
        </div>
      </section>
    );
}