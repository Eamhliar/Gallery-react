import { div, main } from "framer-motion/client";
import classes from './Contact.module.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import treelogo from '../assets/icons8-tree-80.png'

export default function Contact() {

    return (
        <div className={classes.contact}>
            <h2>Contact me</h2>
            <p> <AlternateEmailIcon className={classes.icon}/> mmiliaras82@gmail.com</p>
            <p> <WhatsAppIcon className={classes.icon}/> +30 694 502 2882</p>
            <p> <InstagramIcon className={classes.icon}/>  <a href="https://www.instagramm.com/miliareye">miliareye</a></p>
            <p> <FacebookIcon className={classes.icon}/>  <a href="https://www.facebook.com/Eamiliaras">Eamiliaras</a></p>
            <img src={treelogo} alt="" />
        </div>
    );
}