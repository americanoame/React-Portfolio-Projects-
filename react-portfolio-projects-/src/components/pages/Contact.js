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
        <section className="py-5">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-sm-8 col-lg-6">
                        <h2 className="text-center">Contact Me</h2>
                        <p className="text-center">Feel free to reach out to me:</p>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text" 
                                    className="form-control"
                                    id="name"
                                    name="user_name" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="user_email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    className="form-control"
                                    id="message"
                                    rows="3">
                                </textarea>
                            </div>
                            <div className="d-flex justify-content-center my-4">
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}











//   return (
//     <section>
//       <div className="container">
//         <h2 className="--text-center"></h2>
//         <form ref={form} onSubmit={sendEmail}

//         className="--form-control --card
//              --flex-center --dir-column">
//           <input
//             type="text"
//             placeholder="full Name"
//             name="user_name" required />

//           <input type="email"
//             placeholder="EMAIL"
//             name="user_email" required />

//           <input type="text"
//             placeholder="subject"
//             name="user_subject" required />

//             <textarea name="message"
//             cols="30" rows="10"></textarea>
//             <button type="submit" className="--btn
//               btn-primary">Send</button>
//         </form>
//       </div>
//     </section>
//   )
// }

export default Email;









