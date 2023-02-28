// import Projects from './Projects';
import img1 from '../images/Note-Taker.png';
// import img2 from '../images/E-commerce.png';
// import img3 from '../images/Google.png';
// import img4 from '../images/Good2.png';
// import img5 from '../images/Good1.png';




export default function Portfolio() {

  return (

    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src={img1} class="card-img-top" alt="Image 1" />
            <div class="card-body">
              <h5 class="card-title">Card 1</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src={img1} class="card-img-top" alt="Image 1" />
            <div class="card-body">
            <a href="https://github.com/americanoame" className='btn btn-primary'>GitHub</a>
              <a href="https://github.com/americanoame" className='btn btn-primary'>Deployed</a>
              <p className="card-text">Redux-e-commerce-platform</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src={img1} class="card-img-top" alt="Image 1" />
            <div class="card-body">
              <a href="https://github.com/americanoame" className='btn btn-primary'>GitHub</a>
              <a href="https://github.com/americanoame" className='btn btn-primary'>Deployed</a>
              <p className="card-text">Redux-e-commerce-platform</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src={img1} class="card-img-top" alt="Image 1" />
            <div class="card-body">
              <h5 class="card-title">Card 4</h5>
              <p class="card-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src={img1} class="card-img-top" alt="Image 1" />
            <div class="card-body">
              <h5 class="card-title">Card 5</h5>
              <p class="card-text">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src={img1} class="card-img-top" alt="Image 1" />
            <div class="card-body">
              <h5 class="card-title">Card 6</h5>
              <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
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

