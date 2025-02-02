import foto from '../assets/foto.jpg'
import styles from './Bio.module.css'

export default function Bio(){
    return(
        <>
        <h3 style={{textAlign: "center"}}> Some words for the artist</h3>
        < div className={styles.bio}>
            <img src={foto} alt="A foto of me" />
                
            <p className={styles.p}>
                  Manolis Miliaras is a self-taught painter from Heraklion, Crete in Greece. 
                 He study applied mathematics in the University of Crete. Painting was a hobby from the childhood and become necessity as growing up. 
                 Salvador Dali, Vincent van Gogh, and Domenikos Theotokopoulos was the main artistic inspiration. 
                 He uses soft pastels, oils and graphite as medium.
                 He mainly paints landscapes that either exists or from imagination. 
                 He also paints portraits. He is not a professional painter nor has he done any painting exhibition yet.
            </p>
            <p className={styles.p}>
                  Manolis Miliaras is a self-taught painter from Heraklion, Crete in Greece. 
                 He study applied mathematics in the University of Crete. Painting was a hobby from the childhood and become necessity as growing up. 
                 Salvador Dali, Vincent van Gogh, and Domenikos Theotokopoulos was the main artistic inspiration. 
                 He uses soft pastels, oils and graphite as medium.
                 He mainly paints landscapes that either exists or from imagination. 
                 He also paints portraits. He is not a professional painter nor has he done any painting exhibition yet.
            </p>
        </div>
        </>
    );
}

