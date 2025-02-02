import {motion} from 'framer-motion';

function ErrorPage() {
    return (
        <>
        <main 
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>An error occured!</h1>
            <motion.p
            initial={{y: 500, opacity: 0}} 
            animate={{y: 0, opacity: 1, duration: 3}}
            >This page not found</motion.p>
        </main>
        </>
    );
}

export default ErrorPage;