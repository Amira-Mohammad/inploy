import React from 'react';
import Card from '../../ReusableComponents/card/Card';
import MacBook from'../../images/MacBook.png';
import Msg from'../../images/Msg.png';
import Msg1 from'../../images/Msg1.png';
import './contact.css'
const Contact = () => {
    return (
        <div className="text-center p-5">
            <div className="container text-center"> 
                <div className="row">
                    <div className="col-4 d-flex flex-column justify-content-center">
                        <h2 className="text-start fw-bold">Contact</h2>
                        <h3 className="text-start fw-bold border-danger border-bottom border-5 pb-3 contactMail">
                            <a className="text-decoration-underline">Info@inploy.me</a>
                        </h3>

                        <form className="text-start" >

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="Call" value="option1" checked />
                                <label class="form-check-label" for="Call">
                                Call
                             </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="Email" value="option2" />
                                <label class="form-check-label" for="Email">
                                Email
                            </label>
                            </div>





                            <div class="form-group d-flex my-1">
                                <input type="email" class="form-control form-control-lg mx-1" placeholder="Email" />
                            </div>

                            <div class="form-group m-1 my-4 d-flex">
                                <button type="button" class="btn btn-danger fw-bold px-5">Send</button>
                            </div>
                        </form>

                    </div>

                    <div className="col-8 position-relative">
                        <div className="card position-absolute lapTopCard ">
                             <Card rating ={"0.4"}/> 
                        </div>
                        <div className="bg-danger rounded position-absolute text-white p-1 email">012-123-456 | AmiraMohamed@gmail.com</div>
                        <div className="iconsLinks position-absolute d-flex border rounded-pill p-1 shadow  ">
                            <div className="bg-dark text-white border-0 icon text-center pt-1 mx-1"><i class="fab fa-facebook-f"></i></div>
                            <div className="bg-dark text-white border-0 icon text-center pt-1 mx-1"><i class="fab fa-instagram"></i></div>
                            <div className="bg-dark text-white border-0 icon text-center pt-1 mx-1"><i class="fab fa-linkedin-in"></i></div>
                            <div className="bg-dark text-white border-0 icon text-center pt-1 mx-1"><i class="fab fa-twitter"></i></div>
                            <div className="bg-dark text-white border-0 icon text-center pt-1 mx-1"><i class="fab fa-facebook-f"></i></div>
                            <div className="bg-dark text-white border-0 icon text-center pt-1 mx-1"><i class="fab fa-instagram"></i></div>
                            <div className="bg-dark text-white border-0 icon text-center pt-1 mx-1"><i class="fab fa-linkedin-in"></i></div>
                            <div className="bg-dark text-white border-0 icon text-center pt-1 mx-1"><i class="fab fa-twitter"></i></div>
                        </div>
                        <img src={Msg} className="position-absolute Msg"/>
                        <img src={MacBook} className="w-100"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;