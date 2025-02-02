import { NavLink } from 'react-router-dom';
import hero from '../assets/hero.jpg';
import styles from './Header.module.css';
import { easeIn, motion, useScroll, useTransform} from 'framer-motion';


export default function Header() {
  const { scrollY }  = useScroll();
  const opacityImg = useTransform(scrollY, [0, 150, 250, 300], [1, 0.8, 0.5, 0]);
  const scaleTitle = useTransform(scrollY, [0, 300], [0.9, 1.05]);
  const opacityNav = useTransform(scrollY, [0, 250, 250, 350], [0, 0.7, 0.85, 1] )

  return (
    <header>
      <motion.img 
      style={{opacity: opacityImg}}
      src={hero} 
      alt="A foto of me" />
      <motion.h1 
      style={{ scale: scaleTitle }}
      initial={{x: "-100vw"}}
      animate={{x: 0, delay: 2, duration: 3.5}}
      transition={{type: "spring", stiffness:150}}
      >
        Εμμανουήλ Α. Μηλιαράς
      </motion.h1>
      <motion.h2
      style={{ scale: scaleTitle }}
      initial={{x: "100vw"}}
      animate={{x: 0, delay: 2, duration: 4.5}}
      transition={{type: "spring", stiffness:150}}
      >
      (Emmanouil Miliaras)
      </motion.h2>
      
      <motion.nav
      style={{opacity: opacityNav}}
      >
        <motion.ul  layoutId='menu' className={styles.list}>
          <li>
            <NavLink to='/' 
            className={({ isActive }) => 
            isActive ? styles.active : undefined
            }
            end
          >   Home  
          </NavLink>
          </li>
          <li>
            <NavLink to='/artworks'
            className={({ isActive }) => 
              isActive ? styles.active : undefined
              }
              end
          >   
          Gallery
          </NavLink>
          </li>
          <li><NavLink to='/bio'   className={({ isActive }) => 
            isActive ? styles.active : undefined
            }
            end>   Bio  </NavLink> </li>
          <li><NavLink to='/contact'   className={({ isActive }) => 
            isActive ? styles.active : undefined
            }
            end>   Contact  </NavLink> </li>
        </motion.ul>
      </motion.nav>
    </header>
  );
}
