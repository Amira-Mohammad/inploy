import React from 'react';
import Quwa from '../../images/Quwa.png'
import S from '../../images/S1.png'
import T from '../../images/T.png'
import Z from '../../images/Z.png'
import american from '../../images/american.png'
import business from '../../images/business.png'
import makwa from '../../images/makwa.png'
import seaCode from '../../images/seaCode.png'
import trella from '../../images/trella.png'
import Jude from '../../images/Jude.png'
import IX from '../../images/IX.png'

import './services.scss'
const Services = () => {
    return (
        <div className="text-center p-5 my-3 bg-light position-relative">
            <div className="servicesBtn d-flex justify-content-center ">
                <button type="button" class="btn btn-light bg-transparent shadow mx-4 fw-bold ">
                <i class="far fa-star text-danger px-3"></i>
                    Free Commission
                    </button>
                <button type="button" class="btn btn-light bg-transparent shadow mx-4 fw-bold">
                <i class="fas fa-sync-alt text-danger px-3"></i>
                    Free Contact Exchange
                    </button>
                <button type="button" class="btn btn-light bg-transparent shadow mx-4 fw-bold">
                <i class="fas fa-layer-group text-danger px-3"></i>
                    + 30 Services
                    </button>
            </div>
            <div className="text-danger fw-bold my-5">Success stories with  400+ clients</div>
            <div>
                <div>
                    <img src={american} className="w-20 mx-3" />
                    <img src={business} className="w-20 mx-3" />
                    <img src={T} className="w-20 mx-3" />
                    <img src={Jude} className=" mx-3" />
                    <img src={S} className=" mx-3" />
                </div>
                <div>
                    <img src={trella} className="mx-4" />
                    <img src={IX} className="mx-4" />
                    <img src={seaCode} className="mx-4" />
                    <img src={makwa} className="mx-4" />
                    <img src={Z} className="mx-4" />
                    <img src={Quwa} className="mx-4" />
                </div>
            </div>

        </div>
    );
};

export default Services;