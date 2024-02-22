import React from 'react';
export default function HeroSection() {
    return (
     <section id='heroSection' className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <h1 className="section--title">Hi, I'm Eric</h1>
                <h1 className='hero--section--title'>
                <span className='hero--section--title-color'>Full Stack</span>{' '}
                <br />
                Developer
                </h1>
                <p className='hero--section--description'>
                UC Berkeley Coding Bootcamp graduate and Computer Science student skilled in JavaScript and full-stack web development, eager to bring dedication and meticulousness to a creative position.
                </p>
            </div>
            <button className='btn btn-primary'>Get in Touch</button>
        </div>
        <div className="hero--section--img">
            <img
                src='./img/headshot.jpg'
                alt='hero section'
            />
        </div>
     </section>
    );
}