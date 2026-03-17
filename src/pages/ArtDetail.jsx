import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ARTWORKS } from "../imgData";
import { motion } from 'framer-motion'
import classes from './ArtDetail.module.css';
import palete from '../assets/palete.png';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


function ArtDetail() {
    const params = useParams();
    const currId = Number(params.artId);
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
                 <h2> Σχετικά με το έργο- < br/>  About this artwork: </h2>
                 <p> Τίτλος-(Title): {`"${currArtwork.title}"`} </p>
                 <p> Διαστάσεις-Dimentions: {currArtwork.description.dimensions} </p>
                 <p> Υλικά-Materials: {currArtwork.description.materials} </p>
                 <p> Ημερομηνία-Date: {currArtwork.description.date} </p>
                 </div>

                 <div className={classes.details_img}>
                    <img 
                     src={currArtwork.image.src} 
                     alt={currArtwork.image.alt}
                     style={{
                        border:`${border}px solid ${borderColor}`,
                        outline:`15px solid ${outColor}`,
                        transition: "250ms ease"
                     }} 
                    />
                    { currId > 0 && 
                     <motion.div
                      whileHover={{scale: 1.25, x:-5, backgroundColor:'#004d2d'}}
                      whileFocus={{scale: 1.25, x:-5}} 
                      className={classes.details_arrow_left}
                      aria-label='See previous artwork'
                     >
                        { currId > 0 &&  <Link to={`/artworks/${currId - 1}`} > <ArrowBackIosNewOutlinedIcon /> </Link>}
                       
                      {/* <img src={leftcrayon} alt="prev-image" /> */}
                     </motion.div>}
                   { currId !== ARTWORKS.length-1 && 
                     <motion.div
                      whileHover={{scale:1.25, x:5, backgroundColor:'#004d2d'}}
                      className={classes.details_arrow_right}
                      aria-label='See next artwork'
                     >
                     { currId < ARTWORKS.length-1 && <Link to={`/artworks/${currId + 1}`} > <ArrowForwardIosOutlinedIcon /> </Link>}
                            
                    </motion.div>}
                 </div>
                
                  <details>
                    <summary><h2> Create your own frame <img src={palete} alt="" /></h2></summary>
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
                    className={classes.bottom_btn}
                   >
                       <Link to=".." relative="path">Back</Link> 
                   </motion.button>
            </div>
        </>
    );
}

export default ArtDetail;