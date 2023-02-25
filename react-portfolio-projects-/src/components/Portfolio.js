import Projects from './Projects';
// import img1 from '../images/Good1.png';
import img2 from '../images/E-commerce.png';
// import img3 from '../images/Good1.png';
// import img4 from '../images/Good2.png';
// import img5 from '../images/Good1.png';

export default function Portfolio() {

  const images = [
    {
      // src: img1,
      alt: 'Note-Taker',
      title: 'Redux-e-commerce-platform',
      description: 'An Express.js App',
    },
    {
      src: img2,
      alt: 'Redux',
      title: 'GitHub Repo',
      description: 'Deployed',
      link: 'https://github.com/americanoame/Redux-e-commerce-platform',
      deployed: 'https://redux-e-commerce.herokuapp.com'
    },
    {
      // src: img3,
      alt: 'Note-Taker',
      title: 'Note-Taker',
      description: 'An Express.js App',
    },
    {
      // src: img4,
      alt: 'Note-Taker',
      title: 'Note-Taker',
      description: 'An Express.js App',
    },
    {
      // src: img5,
      alt: 'Note-Taker',
      title: 'Note-Taker',
      description: 'An Express.js App',
    },
  ]

  return (

    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <p className="text-center">Check out the Latest work</p>
        <div className="row">
          <Projects images={images} />
        </div>
      </div>
    </section>
  );
}

