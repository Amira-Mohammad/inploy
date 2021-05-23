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

import './services.css'
const Services = () => {
    return (
        <div className="text-center p-5 my-3 bg-light">
            <div className="text-danger fw-bold">Success stories with  400+ clients</div>
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
                    <img src={IX} className="mx-4"  />
                    <img src={seaCode} className="mx-4"  />
                    <img src={makwa} className="mx-4"  />
                    <img src={Z} className="mx-4"  />
                    <img src={Quwa} className="mx-4"  />
                </div>
            </div>
            Services

        </div>
    );
};

export default Services;