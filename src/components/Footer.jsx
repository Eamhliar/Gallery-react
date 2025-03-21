//import { footer } from "framer-motion/client";
import classes from './Footer.module.css';

export default function Footer(){
  const lastUpdate = document.lastModified;
  const date = new Date()
  const currYear = date.getFullYear();
  console.log(lastUpdate);

    return(
        <footer className={classes.footer}>
            
            <p>
             Εμμανουήλ Α. Μηλιαράς © {currYear}
            </p>
        </footer>    
    )
}