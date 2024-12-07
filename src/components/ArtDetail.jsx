import { Link, useParams } from "react-router-dom";
import { ARTWORKS } from "../imgData";
import {motion} from 'framer-motion'
import classes from './ArtDetail.module.css'

function ArtDetail() {
    const params = useParams();
    const currId = params.artId;
    
    
        const currArtwork = ARTWORKS[currId];
        
    
    return (
        <>
         
        
     
            <div className={classes.details} >
              <h1>About this artwork</h1>
                 <h2>Τίτλος: {`"${currArtwork.title}"`}</h2>
                 <img src={currArtwork.image.src} alt={currArtwork.image.alt} />
                 <p> Διαστάσεις: {currArtwork.description.dimensions}</p>
                 <p> Υλικά: {currArtwork.description.materials}</p>
                 <p> Ημερομηνία: {currArtwork.description.date}</p>
                 <motion.button
                 whileHover={{scale:1.1, backgroundColor:'#3c5d51' }}
                 transition={{ type: 'spring', stiffness: 500, mass: 1}}
                 > <Link to=".." relative="path">Back</Link> </motion.button>
            </div>
        
        
       
         
        </>
    );
}

export default ArtDetail;