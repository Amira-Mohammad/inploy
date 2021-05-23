import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="bg-light border-bottom pb-3 ">
                <div className=" border-bottom pb-3">
                <div className="container ">
                    <div className="row">
                        <div className="p-2 fw-bolder text-danger fs-4 col-6">inpoly</div>
                        <div className="footerIcons d-flex justify-content-end col-6 pt-4">
                            <div className="bg-dark text-white border-0 rating text-center pt-2 mx-1"><i class="fab fa-facebook-f"></i></div>
                            <div className="bg-dark text-white border-0 rating text-center pt-2 mx-1"><i class="fab fa-instagram"></i></div>
                            <div className="bg-dark text-white border-0 rating text-center pt-2 mx-1"><i class="fab fa-linkedin-in"></i></div>
                            <div className="bg-dark text-white border-0 rating text-center pt-2 mx-1"><i class="fab fa-twitter"></i></div>

                        </div>
                    </div>

                </div>

                </div>
            
            <div className="container ">
                <div className="row">
                    <div className="p-2 col-6">
                        <a className="mx-2">SUPPORT</a>
                        <a className="mx-2">UNDERSTAND</a>
                        <a className="mx-2">TERMS & REGULATIONS</a>
                    </div>
                    <div className="col-6 pt-2 d-flex justify-content-end">
                        Inploy2020.All rights reserved
                    </div>
                </div>
            </div>
            </div>

        </React.Fragment>
    );
};

export default Footer;