import React, { useEffect, useState } from 'react';
import ProductCart from '../ProductCart/ProductCart';

const Pproduct = () => {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetch("product.json")
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className=''>
             <div className='text-center'>
                <h1 className='text-red-600 text-xl font-bold'>Popular Products</h1>
                <h1 className='font-bold text-5xl my-2'>Browse Our Products</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
             </div>
             <div className='my-14 gap-4 grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    product.map(pd=><ProductCart key={pd._id} pd={pd}></ProductCart>)
                }
             </div>
        </div>
    );
};

export default Pproduct;