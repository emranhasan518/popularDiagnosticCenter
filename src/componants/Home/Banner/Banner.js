import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

import banner1 from '../../../images/Banner/banner1.jpg'
import banner2 from '../../../images/Banner/banner2.jpg'
import banner3 from '../../../images/Banner/banner3.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 image"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>system and to lead partners in global health responses.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 image"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>WHO's primary role is to direct international health within the United Nations' </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 image"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>system and to lead partners in global health responses.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>   
        </>
    );
};

export default Banner;