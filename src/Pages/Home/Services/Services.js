import React, { useEffect, useState } from 'react';
import ServiceCart from '../../ServiceCart/ServiceCart';

const Services = () => {
    const [service,setService]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className='text-center'>
            <h1 className='text-red-600 text-xl font-bold'>Service</h1>
            <h1 className='font-bold text-5xl my-2'>Our Service Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            <div className='my-14 gap-4 grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    service.map(serv => <ServiceCart key={serv._id} serv={serv}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;