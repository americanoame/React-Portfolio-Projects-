import noteTaker from '../images/NoteTaker1.png';
import img2 from '../images/Test1.png';
import img3 from '../images/Google.png';
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
                <a href="https://github.com/americanoame" className='--btn btn-primary'>GitHub</a>
                <a href="https://github.com/americanoame" className='--btn btn-primary'>Deployed</a>
                <p className="card-text">Redux-e-commerce-platform</p>
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
                <a href="https://github.com/americanoame" className='--btn btn-primary'>GitHub</a>
                <a href="https://github.com/americanoame" className='--btn btn-primary'>Deployed</a>
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
                <a href="https://github.com/americanoame" className='--btn btn-primary'>GitHub</a>
                <a href="https://github.com/americanoame" className='--btn btn-primary'>Deployed</a>
                <p className="card-text">Redux-e-commerce-platform</p>
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

