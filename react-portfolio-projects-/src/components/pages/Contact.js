import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import '../../styles/Contact.css';

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gj5fcam', 'template_jw1jue6', form.current, 'SK6EGaqF0eThnX2Q4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (


        <div class="container my-5">
            <div className="d-flex justify-content-center">
                <div className="col-12 col-sm-8 col-lg-6">
                {/* <h2 className="text-center">Contact Me</h2> */}
                    <h1 className="--text-center">Please Contact Me for more information</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="mb-3">
                            <label for="nameInput" class="form-label">Name</label>
                            <input type="text" class="form-control" id="nameInput" name="user_name" required />
                        </div>
                        <div class="mb-3">
                            <label for="emailInput" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="emailInput" name="user_email" aria-describedby="emailHelp" required />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="messageInput" class="form-label">Message</label>
                            <textarea class="form-control" id="messageInput" name="message" rows="3" required></textarea>
                        </div>

                        <div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

















        // <section className="py-5">
        //     <div className="container">
        //         <div className="d-flex justify-content-center">
        //             <div className="col-12 col-sm-8 col-lg-6">
        //                 <h2 className="text-center">Contact Me</h2>
        //                 <p className="text-center">Feel free to reach out to me:</p>
        //                 <form ref={form} onSubmit={sendEmail}>
        //                     <div className="form-group">
        //                         <label htmlFor="name">Name</label>
        //                         <input
        //                             type="text" 
        //                             className="form-control"
        //                             id="name"
        //                             name="user_name" required/>
        //                     </div>
        //                     <div className="form-group">
        //                         <label htmlFor="email">Email</label>
        //                         <input
        //                             type="email"
        //                             className="form-control"
        //                             id="email"
        //                             name="user_email" required />
        //                     </div>
        //                     <div className="form-group">
        //                         <label htmlFor="message">Message</label>
        //                         <textarea
        //                             name="message"
        //                             className="form-control"
        //                             id="message"
        //                             rows="3">
        //                         </textarea>
        //                     </div>
        //                     <div className="d-flex justify-content-center my-4">
        //                         <button type="submit" className="btn btn-primary btn-block">Submit</button>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
}







export default Email;









