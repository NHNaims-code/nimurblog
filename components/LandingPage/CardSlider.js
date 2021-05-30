import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ItemCard from '../Shared/ItemCard';
import styles from '../../styles/CardSlider.module.css'

const CardSlider = () => {


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
     
        <div className={styles.container}>
          <Slider {...settings} className={styles.CardSlider}>
        
          <div className={styles.ItemCard}>
            <div>
              <ItemCard/>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <ItemCard/>
          </div>
          <div className="d-flex justify-content-center">
            <ItemCard/>
          </div>
          <div className="d-flex justify-content-center">
            <ItemCard/>
          </div>
          <div className="d-flex justify-content-center">
            <ItemCard/>
          </div>
          
          
          
        </Slider>
        </div>

    );
};

export default CardSlider;