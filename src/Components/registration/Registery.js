import React from 'react';
import Card from '../../ReusableComponents/card/Card'
import UI from '../../images/UI.png';
import frontEnd from '../../images/front-end.png';
import backend from '../../images/backend.jpg'; 
import './registery.css'
const Registery = () => {
    return (
        <div className="text-center container my-3 Registery ">
            <div className="row">
                <div className="col-6 d-flex">
                    
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
                    {/* <div className="card" >
                        <img src={planet} className="card-img-top" />
                        <div className="card-body p-5">
                            <div className="position-absolute bg-danger text-white pt-2 status"><i class="fas fa-check"></i></div>
                            <div className="imgContainer position-absolute bg-danger ">
                                <img src={person} className="rounded-circle h-100" />
                            </div>
                            <div className="position-absolute bg-white text-dark shadow  pt-2 rating ">0.5</div>
                            <h5 className="card-title fw-bolder">name</h5>
                            <h6 className="text-danger">job title</h6>
                            <a>Quick view <i class="fas fa-angle-down"></i></a>

                        </div>
                    </div> */}
                </div>
                <div className="col-6">
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
                        <div class="form-group mx-1">
                            <select class="form-select form-select-lg " aria-label=".form-select-lg example" >
                                <option value="" selected disabled>Category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>


                        </div>
                        <div class="form-group m-1 d-flex">
                            <button type="button" class="btn btn-danger fw-bold">Register Now</button>
                        </div>

                    </form>




                </div>
            </div>
        </div>
    );
};

export default Registery;