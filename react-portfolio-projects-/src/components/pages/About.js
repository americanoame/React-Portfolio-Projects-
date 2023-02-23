import React from 'react';
import photo1 from "../../images/photo1.jpeg";
import '../../styles/About.css';

export default function About() {
    return (
        <section className='py-5'>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 mx-auto text-center'>
                        <img src={photo1} alt='andre' className='img-fluid mb-5 rounded-circle' />
                        <h2 className='text-secondary'>Andre Silva</h2>
                        <p className='lead text-muted mb-5'>Coding life | Golfing Life</p>
                    </div>
                </div>

                <div id='background-color' className='row'>
                    <div id='about' className='col-lg-6 mx-auto'>

                        <p className='lead text-muted mb-3'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p className='lead text-muted mb-3'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p className='lead text-muted mb-3'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p className='lead text-muted mb-3'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p className='lead text-muted mb-3'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                    </div>
                </div>

            </div>

        </section>
    )
}

