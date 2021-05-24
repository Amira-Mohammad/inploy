import React from 'react';
import Card from '../../ReusableComponents/card/Card'
import UI from '../../images/UI.png';
import frontEnd from '../../images/front-end.png';
import backend from '../../images/backend.jpg';
import './registery.scss'
const Registery = () => {
    return (
        <div className="text-center container my-5 Registery ">
            <div className="row">

                <div class="col-sm-6 d-flex">

                    <Card
                        appearence={"9999"}
                        rating={"0.2"}
                        name={"Jeesica"}
                        title={"UI Developer"}
                        img={UI}
                    />
                    <Card
                        appearence={"999"}
                        right={"70px"}
                        rating={"0.5"}
                        name={"Jean"}
                        title={"Front-end Developer"}
                        img={frontEnd}
                        height={"310px"}
                    />
                    <Card
                        appearence={"99"}
                        right={"150px"}
                        rating={"0.7"}
                        name={"Julia"}
                        title={"Backend Developer"}
                        img={backend}
                        height={"300px"}
                    />
                </div>
                <div class="col-sm-6">
                    <h3 className="text-start fw-bold border-danger border-bottom border-5 registerNow">Register Now</h3>

                    <form >
                        <div class="form-group d-flex my-1">

                            <input type="text" class="form-control form-control-lg mx-1" placeholder="Full Name" />
                            <input type="text" class="form-control form-control-lg mx-1" placeholder="Job Title" />
                        </div>
                        <div class="form-group">

                        </div>
                        <div class="form-group d-flex my-1">
                            <input type="email" class="form-control form-control-lg mx-1" placeholder="Email" />
                            <input type="text" class="form-control form-control-lg mx-1" placeholder="Number" />
                        </div>
                        <div class="form-group mx-1 rail-select">
                            <div class="select-side position-absolute bg-dark pt-2">
                                <i class="fas fa-angle-down text-white"></i>
                            </div>
                            <select class="form-select select">
                                <option value="" selected disabled>Category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>


                        </div>


                        <div class="form-group m-1 pt-5 d-flex">
                            <button type="button" class="btn btn-danger fw-bold">Register Now</button>
                        </div>

                    </form>
                </div>


                {/* <div className="col-6 d-flex">  </div>
                <div className="col-6"></div> */}


            </div>
        </div>
    );
};

export default Registery;