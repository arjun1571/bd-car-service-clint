import React from 'react';

const CaroselItem = ({slide}) => {
    const {image,id,next,previous}=slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carosel-image'>
                <img src={image} alt='' className="w-full " />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-0">
                <a href={`#slide${previous}`} className="btn btn-circle mr-5">❮</a> 
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4">
                     <h1 className='text-white text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-1/2 left-24 top-2/4">
                    <p className='text-white text-xl '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-1/2 left-24 top-3/4">
                <button className="btn btn-outline btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-secondary">Button</button>
                </div>
            </div> 
    );
};

export default CaroselItem;