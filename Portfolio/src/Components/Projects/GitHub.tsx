import {motion} from 'framer-motion'

export default function GitHub() {
  return <motion.div 
  animate={{
    x: [-100, -50, 0, 50, 0, -50, -100], 
    color: ['red'],
    scale: [0, 0.5, 1, 2, 1, 0.5, 0]
  }}
  transition={{repeat: Infinity, duration: 7}}
  className="flex items-center justify-center mt-12">
    In developing...
  </motion.div>;
}
