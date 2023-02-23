// import React, {useState} from "react";
import Projects from './Projects';

export default function Portfolio() {

    const images = [
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

