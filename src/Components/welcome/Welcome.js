import React from 'react';
import './Welcome.css'
const Welcome = () => {
    return (
        <div className="text-center my-3">
            <div class="welcome my-3 text-danger fw-bolder fs-1 text-uppercase">welcome to inploy</div>
            <div className="Register my-3">Register now and secure your spot on top of your category</div>
            <div className="my-5">
                <button type="button" class="btn btn-danger fw-bolder shadow mx-2">Service Provider</button>
                <button type="button" class="btn bg-transparent fw-bolder shadow mx-2 Client">Client</button>
            </div>
        </div>
    );
};

export default Welcome;