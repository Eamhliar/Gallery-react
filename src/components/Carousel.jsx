import april from '../assets/April.jpg';
import kalamies from '../assets/kalamies.jpg';
import rodo from '../assets/Rose eclipse.jpg';
import rodi from '../assets/Pomegranate.jpg';
import detis from '../assets/Detis.jpg';
import ruinsImg from '../assets/Ruins and roses.jpg';
//import ImageSlider from './2';
import classes from './Carousel.module.css'
import {motion, useMotionValue, useMotionValueEvent} from 'framer-motion';
//import { div } from 'framer-motion/client';
import { useState, useEffect } from 'react';
//import { use } from 'framer-motion/client';

const CAROUSEL = [april, kalamies, rodo, rodi, detis, ruinsImg];

export default function Carousel() {
  const [imgIndex, setImgIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut = autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 5000);
  });

  const slideRight = () => {
    setImgIndex(imgIndex === CAROUSEL.length - 1 ? 0 : imgIndex + 1);
  };

  const slideLeft = () => {
    setImgIndex(imgIndex === 0 ? CAROUSEL.length - 1 : imgIndex - 1);
  };
  console.log(imgIndex);



  return (
    <div
      className={classes.carousel}
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className={classes.carousel_wrapper}>
        {CAROUSEL.map((imgSrc, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={
                index === imgIndex
                  ? `${classes.carousel_card}  ${classes.carousel_card_active}`
                  : classes.carousel_card
              }
            >
              <img className={classes.card_image} src={imgSrc} alt="" />
          
            </div>
          );
        })}
        <motion.div
        whileHover={{scale:1.1, backgroundColor:'#324d43' }}
         className={classes.carousel_arrow_left}
         onClick={slideLeft}>
          &lsaquo;
        </motion.div>
        <motion.div
        whileHover={{scale:1.2}}
         className={classes.carousel_arrow_right}
         onClick={slideRight}>
          &rsaquo;
        </motion.div>
        <div className={classes.carousel_pagination}>
          {CAROUSEL.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == imgIndex
                    ? `${classes.pagination_dot} ${classes.pagination_dot_active}`
                    : classes.pagination_dot
                }
                onClick={() => setImgIndex(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
  };