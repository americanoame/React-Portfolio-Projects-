// import React, {useState} from "react";
import Projects from './Projects';
import img1 from '../images/notaker.png';
import img2 from '../images/googlesearch.png';
import img3 from '../images/e-commerce.png';

export default function Portfolio() {

    const images = [
      {
        src: img1,
        alt: 'Note-Taker',
        title: 'Note-Taker',
        description: 'An Express.js App',
        deployed: 'https://heroku-demo-2022-11-andre.herokuapp.com/',
        github: 'https://github.com/americanoame/Note-Taker'
      },
      {
        src: img2,
        alt: 'Note-Taker',
        title: 'Note-Taker',
        description: 'An Express.js App',
        deployed: 'https://heroku-demo-2022-11-andre.herokuapp.com/',
        github: 'https://github.com/americanoame/Note-Taker'
      },
      {
        src: img3,
        alt: 'Note-Taker',
        title: 'Note-Taker',
        description: 'An Express.js App',
        deployed: 'https://heroku-demo-2022-11-andre.herokuapp.com/',
        github: 'https://github.com/americanoame/Note-Taker'
      },
      {
        src: '/react-portfolio/images/Social-Network-API.jpg',
        alt: 'Note-Taker',
        title: 'Note-Taker',
        description: 'An Express.js App',
        deployed: 'https://heroku-demo-2022-11-andre.herokuapp.com/',
        github: 'https://github.com/americanoame/Note-Taker'
      },
      {
        src: '/react-portfolio/images/Social-Network-API.jpg',
        alt: 'Note-Taker',
        title: 'Note-Taker',
        description: 'An Express.js App',
        deployed: 'https://heroku-demo-2022-11-andre.herokuapp.com/',
        github: 'https://github.com/americanoame/Note-Taker'
      },
    ]

    return (

        <section id="projects" className="py-5">
          <div className="container">
            <h2 className="text-center">Portfolio</h2>
            <p className="text-center">My Recent Work</p>
            <div className="row">                    
                <Projects images={images}/>          
            </div>
          </div>
        </section>
      );
}

