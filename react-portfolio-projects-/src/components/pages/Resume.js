import React from 'react';
import Cv1 from "../../images/Cv1.jpg";
import '../../styles/Resume.css';

export default function Resume() {

    return (

        <div className="container-resume my-5">

            <div className='d-flex justify-content-end'>
                <button onClick={Resume} className="btn btn-lg btn-primary download-button">Download PDF</button>
            </div>

            <div className="row">
                <div className="col-lg-2">
                    <img src={Cv1} alt='andre' className='img-fluid mb-5 rounded-circle' />
                    <hr className="header-hr" />
                    
                </div>

                <div className="col-lg-8">
                    <h1 className="headerName">Andre Silva</h1>
                    <h3 className="headerTask">
                        Full Stack Web Developer / Caddie / Golf Player
                    </h3>
                    <hr className="header-hr" />
                    <h3 className="headerSummary">
    
                        am a highly motivated and web developer recent grauduated from Rutgers Coding Bootcamp.

                        Throughout my studies, I have consistently demonstrated my passion

                        for creating innovative and user-friendly websites that meet the needs of diverse audiences. I have had the opportunity

                    </h3>



                    <div className="card mt-5">
                        <div className="card-body">
                            <h3 className="card-title">Master of Science, Computer Science</h3>
                            <h4 className="card-subtitle mb-2 text-muted">Stanford University</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac est eu est aliquam dictum. Integer tristique mauris eu malesuada rutrum.</p>
                        </div>
                    </div>



                </div>

            </div>


        </div>

    )
}

