import React from 'react';
import photo1 from "../images/photo1.jpeg";

export default function About() {
    return (

        <section id='about' className='py-5'>

            <div className='container'>
                <div class='row'>
                    <div class='col-md-5 mx-auto text-center'>
                        <img src={photo1} alt='andre' className='img-fluid mb-5 rounded-circle' />
                        <h2 className='text-secondary'>Andre Silva</h2>
                        <p className='lead text-muted mb-5'>a paxon developer</p>
                    </div>
                </div>


                
            </div>

        </section>
    )
}

