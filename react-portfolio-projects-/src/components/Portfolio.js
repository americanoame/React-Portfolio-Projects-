// import Projects from './Projects';
import noteTaker from '../images/Note-Taker.png';
import img2 from '../images/E-commerce.png';
import img3 from '../images/Google.png';
// import img4 from '../images/Good2.png';
// import img5 from '../images/Good1.png';

import '../styles/Project.css';


export default function Portfolio() {

  return (

    <div id='portfolio-section' className="container">

      <h2 className="text-center">Portfolio</h2>
      <p className="text-center">Check Out The Latest Work:</p>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={noteTaker} className="card-img-top" alt="Image 1" />
            <div className="card-body">
              <a href="https://github.com/americanoame" className='btn btn-primary'>GitHub</a>
              <a href="https://github.com/americanoame" className='btn btn-primary'>Deployed</a>
              <p className="card-text">Redux-e-commerce-platform</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={img2} className="card-img-top" alt="Image 1" />
            <div className="card-body">
              <a href="https://github.com/americanoame" className='btn btn-primary'>GitHub</a>
              <a href="https://github.com/americanoame" className='btn btn-primary'>Deployed</a>
              <p className="card-text">Redux-e-commerce-platform</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={img3} className="card-img-top" alt="Image 1" />
            <div className="card-body">
              <a href="https://github.com/americanoame" className='btn btn-primary'>GitHub</a>
              <a href="https://github.com/americanoame" className='btn btn-primary'>Deployed</a>
              <p className="card-text">Redux-e-commerce-platform</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={noteTaker} className="card-img-top" alt="Image 1" />
            <div className="card-body">
              <a href="https://github.com/americanoame" className='btn btn-primary'>GitHub</a>
              <a href="https://github.com/americanoame" className='btn btn-primary'>Deployed</a>
              <p className="card-text">Redux-e-commerce-platform</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src={noteTaker} className="card-img-top" alt="Image 1" />
            <div className="card-body">
              <a href="https://github.com/americanoame" className='btn btn-primary'>GitHub</a>
              <a href="https://github.com/americanoame" className='btn btn-primary'>Deployed</a>
              <p className="card-text">Redux-e-commerce-platform</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src={noteTaker} className="card-img-top" alt="Image 1" />
            <div className="card-body">
              <a href="https://github.com/americanoame" className='btn btn-primary'>GitHub</a>
              <a href="https://github.com/americanoame" className='btn btn-primary'>Deployed</a>
              <p className="card-text">Redux-e-commerce-platform</p>
            </div>
          </div>
        </div>
      </div>

    </div>


  )

}






















// export default function Portfolio() {

//   const images = [
//     {
//       src: img1,
//       alt: 'Note-Taker',
//       title: 'GitHub Repo',
//       description: 'Deployed App',
//       link: 'https://github.com/americanoame/Note-Taker',
//       deployed: 'https://note-taker-andre.herokuapp.com/notes'
//     },
//     {
//       src: img2,
//       alt: 'Redux-E-commerce',
//       title: 'GitHub Repo',
//       description: 'Deployed App',
//       link: 'https://github.com/americanoame/Redux-e-commerce-platform',
//       deployed: 'https://redux-e-commerce.herokuapp.com'
//     },
//     {
//       src: img3,
//       alt: 'Google Book Search',
//       title: 'GitHub Repo',
//       description: 'Deployed App',
//       link: 'https://github.com/americanoame/MERN-Book-Search-Engine',
//       deployed: ''

//     },
//     {
//       // src: img4,
//       alt: 'Note-Taker',
//       title: 'Note-Taker',
//       description: 'An Express.js App',
//     },
//     {
//       // src: img5,
//       alt: 'Note-Taker',
//       title: 'Note-Taker',
//       description: 'An Express.js App',
//     },
//   ]

//   return (

//     <section id="projects" className="py-5">
//       <div className="container">
//         <h2 className="text-center">Projects</h2>
//         <p className="text-center">Check out the Latest work</p>
//         <div className="row">
//           <Projects images={images} />
//         </div>
//       </div>
//     </section>
//   );
// }

