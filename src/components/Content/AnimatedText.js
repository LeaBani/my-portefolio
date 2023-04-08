import './style.scss';
import { motion } from 'framer-motion';

function AnimatedText({ text, isDark }) {

// h1 animation with framermotion
const words = text.split("");

const container = {
    hidden: { opacity: 0 },
    visible: (i=1) => ({
        opacity: 1,
        transition: {staggerChildren: 0.14, delayChildren: 0.04 * i},
    }),
}

const child = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type:"spring",
            damping: 12,
            stiffness:100,
        },
    },
    hidden: {
        opacity: 0,
        y: 20,
        transition: {
            type:"spring",
            damping: 12,
            stiffness:100,
        },  
    }
}
  return (
    <motion.h1 className={isDark ? "Content-title Content-title-dark" : "Content-title Content-title-light" }  variants={container} initial="hidden" animate="visible">

        {words.map((word, index) => (
            <motion.span 
                key={index}
                variants={child}
            >
                {word}
            </motion.span>
        ))}

    </motion.h1>
  );
}

export default AnimatedText;
