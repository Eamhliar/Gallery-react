import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ARTWORKS } from "../imgData";
import { motion } from 'framer-motion'
import classes from './ArtDetail.module.css';
import palete from '../assets/palete.png';


function ArtDetail() {
    const params = useParams();
    const currId = params.artId;
    const currArtwork = ARTWORKS[currId];

    const[borderColor, setBorderColor] = useState("#d6d6c7");
    const[outColor, setOutColor] = useState("#2e231f");
    const[border, setBorder] = useState(60);

    function handleColorBorderChange(event) {
        setBorderColor(event.target.value);
    }
    function handleColorOutChange(event) {
        setOutColor(event.target.value);
    }
    function handleBorderChange(event) {
        setBorder(event.target.value);
    }

    return (
        <>
            <div className={classes.details} >
             
                 <div className={classes.infos} >
                 <h2> About this artwork: </h2>
                 <p> Τίτλος: {`"${currArtwork.title}"`} </p>
                 <p> Διαστάσεις: {currArtwork.description.dimensions} </p>
                 <p> Υλικά: {currArtwork.description.materials} </p>
                 <p> Ημερομηνία: {currArtwork.description.date} </p>
                 </div>
                 <img 
                     src={currArtwork.image.src} 
                     alt={currArtwork.image.alt}
                     style={{
                        border:`${border}px solid ${borderColor}`,
                        outline:`12px solid ${outColor}`,
                        transition: "250ms ease"
                     }} 
                 />
                  <details>
                    <summary><h2>Create your own frame <img src={palete} alt="" /></h2></summary>
                        <div className={classes.colorPickerContainer}>
                             <label htmlFor=""> Select border color:</label>
                             <input type="color" value={borderColor} onChange={handleColorBorderChange} />
                             <label htmlFor=""> Select frame color:</label>
                             <input type="color" value={outColor} onChange={handleColorOutChange} />
                             <label htmlFor=""> Select border length:</label>
                             <div 
                             style={{display: 'inline-flex', justifyContent: 'center', width: '100%'}}>
                                <input type="number" value={border} min={0} max={200} onChange={handleBorderChange} /> <span style={{color: "#00331e"}}>pixels</span> 
                             </div>
                       </div>
                  </details>
                 
                   <motion.button
                    whileHover={{ scale:1.1, backgroundColor:'#004d2d' }}
                    transition={{ type: 'spring', stiffness: 200, mass: 1}}
                   >
                       <Link to=".." relative="path">Back</Link> 
                   </motion.button>
            </div>
        </>
    );
}

export default ArtDetail;