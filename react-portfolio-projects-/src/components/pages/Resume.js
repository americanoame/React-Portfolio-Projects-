import React from 'react';
import Cv1 from "../../images/Cv1.jpg";
import '../../styles/Resume.css';

export default function Resume() {

    return (

        <div className="container my-5">

            <div className='d-flex justify-content-end'>
                <button onClick={Resume} className="btn btn-lg btn-primary pdf-btn">Download PDF</button>
            </div>

            <div className="row">
                <div className="col-lg-2">
                    <img src={Cv1} alt='andre' className='img-fluid mb-5 rounded-circle cv-image' />
                    <hr />
                </div>

                <div className="col-lg-8">
                    <h1 className="header-name">Andre Silva</h1>
                    <h2 className="header-task">
                        Full Stack Web Developer / Caddie / Golf Player
                    </h2>
                    <hr />
                    <div className="header-summary">

                        <p>am a highly motivated and web developer recent grauduated from Rutgers Coding Bootcamp.

                            Throughout my studies, I have consistently demonstrated my passion

                            for creating innovative and user-friendly websites that meet the needs of diverse audiences. I have had the opportunity
                        </p>
                    </div>

                    <h2 className="work-experience">WORK EXPERIENCE</h2>
                    <hr />
                    <div className="all-companies">
                        <div className="Mountain-ridge">
                            <h3>Mountain Ridge Country Club</h3>
                        </div>
                        <p className="role">Caddie</p>
                        <p className="time-range">April 2009 - Present</p>
                        <ul>
                            <li>
                                provide support and assistance to golfers during their round of golf,
                                helping them to navigate the course and make the most of their game.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="all-companies">
                        <div className="Mountain-ridge">
                            <h3>Amazon Flex</h3>
                        </div>
                        <p className="role">Driver</p>
                        <p className="time-range">April 2017 - march 2020</p>
                        <ul>
                            <li>
                                helping Amazon meet its customer delivery commitments while providing
                                a great costumer service work.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="all-companies">
                        <div className="Mountain-ridge">
                            <h3>Uber</h3>
                        </div>
                        <p className="role">Driver</p>
                        <p className="time-range">April 2015 -  2019</p>
                        <ul>
                            <li>
                                providing safe, reliable transportation to passengers
                                while also representing the Uber brand and providing a positive customer experience.
                                <li>
                                    Throughout this task. i did 4293 trips and 1610 deliveries with no accident and always providing
                                    good costumer service and always safety first.
                                </li>
                            </li>
                        </ul>
                    </div>

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

