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
import { use } from 'framer-motion/client';

const CAROUSEL = [april, kalamies, rodo, rodi, detis, ruinsImg];
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;


export default function Carousel() {
  const [imgIndex, setImgIndex] = useState(0);
  const [dragging, setDragging] = useState(false);

  const dragX = useMotionValue(0);
  const dragXProgress = useMotionValue(0);

  useMotionValueEvent(dragX, "change", (latest) => {
    if(typeof latest === "number" && dragging){
      dragXProgress.set(latest);
    } else {
      dragXProgress.set(0);
    }
  })

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragXProgress.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === CAROUSEL.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  function onDragStart() {
    setDragging(true);
  }

  function onDragEnd() {
    setDragging(false);
     const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < CAROUSEL.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

 
  
  


    return(
        <div 
        className={classes.container}
          style={{
             
              x: dragX,
          }}> 
            <motion.div
               drag="x"
               dragConstraints={{
                  left: 0,
                  right: 0
                }}
               animate={{
                  translateX: `-${imgIndex * 100}%`
                }}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                className={classes.carousel}>
                  <ImageSlider  imgIndex={imgIndex}/>
            </motion.div>
                <ImageDots imgIndex={imgIndex} setImgIndex={setImgIndex} />
        </div>
    )
}



const ImageSlider = ({ imgIndex }) => {
    return (
      <>
        {CAROUSEL.map((imgSrc, idx) => {
          return (
            <motion.div
              key={idx}
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              animate={{
                scale: imgIndex === idx ? 0.95 : 0.85,
                opacity: imgIndex === idx ? 1 : 0.75
              }}
              transition={{
                type: "spring",
                mass: 1,
                stiffness: 300,
              }}
              className={classes.imageSlider}
            />
          );
        })}
      </>
    );
  };

  const ImageDots =  ({ imgIndex, setImgIndex }) => {
    return (
      <div className={classes.dots}>
        {CAROUSEL.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setImgIndex(idx)}
              className={idx === imgIndex ? classes.dotBtn : classes.dotBtnInactive}
            />
          );
        })}
      </div>
    );
  };