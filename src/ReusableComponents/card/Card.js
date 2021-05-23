import React from 'react';
import planet from "../../images/plant1.jpg";
import person from '../../images/person1.jpg';
import './card.scss'
const Card = (props) => {
    return (
        <div className="card"
            style={{ right: props.right, zIndex: props.appearence , height:props.height }}
        >
            <img src={planet} className="card-img-top" />
            <div className="card-body p-5 position-relative">
                <div className="position-absolute bg-danger text-white pt-2 status"><i class="fas fa-check"></i></div>
                <div className="imgContainer position-absolute bg-danger ">
                    <img src={person} className="rounded-circle h-100" />
                </div>
                <div className="position-absolute bg-white text-dark shadow  pt-2 rating ">{props.rating}</div>
                <h5 className="card-title fw-bolder">{props.name}</h5>
                <h6 className="text-danger">{props.title}</h6>
                <div className="d-flex">
                    <a className="quickView">Quick view </a>
                    <i class="fas fa-angle-down pt-1"></i>
                </div>
            </div>
        </div>
    );
};

export default Card;