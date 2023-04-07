import React from 'react';
import { FaLocationArrow,FaCalendarAlt,FaPhoneAlt } from 'react-icons/fa';
const Contact = () => {
    return (
        <div className='bg-slate-900 h-40 text-white  grid sm:grid-cols-1 lg:grid-cols-3'>
            <div className='flex items-center'>
                <div className='mr-5'>
                    <FaCalendarAlt></FaCalendarAlt>
                </div>
                <div>
                    <p><small>We are open monday-friday</small></p>
                    <p>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='mr-5'>
                    <FaPhoneAlt></FaPhoneAlt>
                </div>
                <div>
                    <p><small>Have a question</small></p>
                    <p>+2546 251 2658</p>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='mr-5'>
                    <FaLocationArrow></FaLocationArrow>
                </div>
                <div>
                    <p><small>Need a repair? our address</small></p>
                    <p>Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;