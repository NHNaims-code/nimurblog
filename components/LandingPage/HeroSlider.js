import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from '../../styles/Hero.module.css'

const HeroSlider = () => {


        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };

    return (
     
        <Slider {...settings} className={styles.container}>
          <div>
            <img src="/assets/Video.svg" alt=""/>
          </div>
          <div>
            <img src="/assets/Video.svg" alt=""/>
          </div>
          <div>
            <img src="/assets/Video.svg" alt=""/>
          </div>
          <div>
            <img src="/assets/Video.svg" alt=""/>
          </div>
          <div>
            <img src="/assets/Video.svg" alt=""/>
          </div>
          <div>
            <img src="/assets/Video.svg" alt=""/>
          </div>
          
        </Slider>

    );
};

export default HeroSlider;