import React from 'react';
import "./Carosel.css"
import img1 from "../../../../assets/images/banner/1.jpg"
import img2 from "../../../../assets/images/banner/2.jpg"
import img3 from "../../../../assets/images/banner/3.jpg"
import img4 from "../../../../assets/images/banner/4.jpg"
import img5 from "../../../../assets/images/banner/5.jpg"
import img6 from "../../../../assets/images/banner/6.jpg"
import CaroselItem from './CaroselItem';

const Carosel = () => {
    const bannerData=[
        {
            image: img1,
            previous: 6,
            id: 1,
            next: 2,
        },
        {
            image: img2,
            previous: 1,
            id: 2,
            next: 3,
        },
        {
            image: img3,
            previous: 2,
            id: 3,
            next: 4,
        },
        {
            image: img4,
            previous: 3,
            id: 4,
            next: 5,
        },
        {
            image: img5,
            previous: 4,
            id: 5,
            next: 6,
        },
        {
            image: img6,
            previous: 5,
            id: 6,
            next: 1,
        }
    ]
    return (
        <div className="carousel w-full">

            {
                bannerData.map(slide=> <CaroselItem key={slide.id} slide={slide}></CaroselItem>)
            }
            {/* <CaroselItem image={img1}></CaroselItem> */}
            {/* <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Carosel;