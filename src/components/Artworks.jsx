//import { useEffect, useRef } from 'react';
//import { createPortal } from 'react-dom';
import { ARTWORKS } from "../imgData.js";
//import ArtDetail from "./ArtDetail.jsx";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArtDetail from "./ArtDetail.jsx";
export default function Artworks() {


    
  return (
    <div className="places-category">
  
      <motion.ul 
      variants={{
        visible: { transition: { staggerChildren: 1} }
      }}
      className="places">
        {ARTWORKS.map((art) => (
          <motion.li 
          variants={{
            hidden: { opacity: 0, scale: 0.5},
            visible: { opacity: 1, scale: 1}
          }}
          key={art.id} className="place-item">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#fcf1a8' }}
              transition={{ type: 'spring', stiffness: 500, mass: 2}}
            >
            <img src={art.image.src} alt={art.image.alt} />
              <h3>
                <Link to={`/artworks/${art.id}`}>{art.title}</Link>

    
              </h3>    
            </motion.button>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};


        