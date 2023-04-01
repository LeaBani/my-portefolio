import './style.scss';
import { motion } from 'framer-motion';

function AnimatedText({ text }) {

// h1 animation woth framermotion
const words = text.split("");

const container = {
    hidden: { opacity: 0 },
    visible: (i=1) => ({
        opacity: 1,
        transition: {staggerChildren: 0.20, delayChildren: 0.08 * i},
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
    <motion.h1 className="Content-title" variants={container} initial="hidden" animate="visible">

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
