import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCart = ({serv}) => {
    const {_id,title,img,price}=serv;
    return (
            <div className=" card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-left text-red-600 font-bold'>Price:$ {price}</p>
                <div className="card-actions justify-end ">
                <Link to={`/cheakout/${_id}`}>
                <button className="btn btn-primary">CheakOut</button>
                </Link>
                </div>
            </div>
        </div> 
    );
};

export default ServiceCart;