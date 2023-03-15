import noteTaker from '../images/NoteTaker1.png';
import img2 from '../images/Test1.png';
import img3 from '../images/Google.png';
import img4 from '../images/MDV.png';
import img5 from '../images/RUT.png';
import img6 from '../images/PTG.png';

import '../styles/Portfolio.css';

export default function Portfolio() {

  return (
    <div className="py-5">
      <div className="container">

        <h2 className="text-center-port">Portfolio</h2>
        <p className="text-center-port">Check Out The Latest Works:</p>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={noteTaker} className="card-img-top" alt="Image 1" />
              <div className="card-body">
                <a href="https://github.com/americanoame/Note-Taker" className='--btn btn-primary'>GitHub</a>
                <a href="https://note-taker-andre.herokuapp.com/" className='--btn btn-primary'>Deployed</a>
                <p className="card-text">The Note-Taker</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={img2} className="card-img-top" alt="Image 1" />
              <div className="card-body">
                <a href="https://github.com/americanoame" className='--btn btn-primary'>GitHub</a>
                <a href="https://github.com/americanoame" className='--btn btn-primary'>Deployed</a>
                <p className="card-text">Redux-e-commerce-platform</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={img3} className="card-img-top" alt="Image 1" />
              <div className="card-body">
                <a href="https://github.com/americanoame/MERN-Book-Search-Engine" className='--btn btn-primary'>GitHub</a>
                <a href="https://andre-book-search.herokuapp.com/" className='--btn btn-primary'>Deployed</a>
                <p className="card-text">MERN-Book-Search-Engine</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={img4} className="card-img-top" alt="Image 1" />
              <div className="card-body">
                <a href="https://github.com/americanoame/MDV-controller-Tech-Blog" className='--btn btn-primary'>GitHub</a>
                <a href="https://mdv-controller.herokuapp.com/" className='--btn btn-primary'>Deployed</a>
                <p className="card-text">MDV-controller-Tech-Blog</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src={img5} className="card-img-top" alt="Image 1" />
              <div className="card-body">
                <a href="https://github.com/americanoame/Community-Chat-1" className='--btn btn-primary'>GitHub</a>
                <a href="https://community-chat.herokuapp.com/" className='--btn btn-primary'>Deployed</a>
                <p className="card-text">Community-Chat-1</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src={img6} className="card-img-top" alt="Image 1" />
              <div className="card-body">
                <a href="https://github.com/americanoame/Profolio-Generator-" className='--btn btn-primary'>GitHub</a>
                <a href="https://drive.google.com/file/d/1NTHX9LSy8am28Tb-nLnNg2kRjrK8dXPz/view" className='--btn btn-primary'>Deployed</a>
                <p className="card-text">Team Profile Generator</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src={noteTaker} className="card-img-top" alt="Image 1" />
              <div className="card-body">
                <a href="https://github.com/americanoame" className='--btn btn-primary'>GitHub</a>
                <a href="https://github.com/americanoame" className='--btn btn-primary'>Deployed</a>
                <p className="card-text">Redux-e-commerce-platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

