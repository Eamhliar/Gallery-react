import { Outlet } from "react-router-dom";
//import classes from './Root.module.css'
import Header from "../components/Header";
import { motion, useScroll, useTransform} from 'framer-motion';

function RootLayout() {
    const { scrollY } = useScroll();
    const mainOpacity = useTransform(scrollY, [0, 200, 300], [0, 0.75, 1]);
    const mainScale = useTransform(scrollY, [0, 100, 200, 300], [0, 0.5, 0.75, 1])

    return (
        <>
        <Header />
        <motion.main 
        style={{
            opacity: mainOpacity,
            scale: mainScale
        }}>
        <Outlet />
        </motion.main>
        
        </>
    ) 
}

export default RootLayout;