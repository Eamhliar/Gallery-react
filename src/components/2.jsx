import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import { motion} from 'framer-motion';
import classes from './ImageSlider.module.css'
//import { div } from "framer-motion/client";

export default function ImageSlider2({ imgUrls, imageIndex } ) {
  const [imageIndex, setImageIndex] = useState(0);


    return (
        <div className={classes.slider}>
        
             {imgUrls.map((url, idx) => {
              return (
                <motion.div
                key={idx}
                style={{
                  backgroundImage: `url(${url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                animate={{
                  scale: imageIndex === idx ? 0.95 : 0.85
                }}
                transition={{
                   type: "spring",
                   mass: 3,
                   stiffness: 400,
                   damping: 50,
                }}
                className={classes.sliderImg}
                >
                </motion.div>
             )})}      
            <div 
              style={{
                position: "absolute",
                bottom: "0.5rem",
                left: "50%",
                translate: "-50%",
                display: "flex",
                gap: "0.3rem"
              }}>
              {imgUrls.map((_,index) => (
                <button 
                key={index}
                className={classes.sliderDotBtn}
                onClick={() =>  setImageIndex(index)}
                >
                    {index === imageIndex ? <CircleDot /> : <Circle />}
                </button>
              ))}
            </div>
        </div>
    )

} 