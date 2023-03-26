import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCart = ({pd}) => {
    const {img,title,price}=pd;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="imag" className="rounded-xl w-40" />
            </figure>
            <div className="card-body items-center text-center">
            <div className='flex  flex-row text-orange-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
                <h2 className="card-title">{title}</h2>
                <p>price:{price}</p>
            </div>
        </div>
    );
};

export default ProductCart;