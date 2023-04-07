import React from 'react'
import {motion} from "framer-motion";

const Title = ({title, invert, absolute, className}) => {
  return (
    <motion.div
    
    initial={{y: -30, opacity: 0}}
   transition={{duration: 0.8 }}
   whileInView={{opacity: 1, y: 0}}


    className={`w-max mx-auto my-14 ${absolute ? "absolute 0-top" : ""} ${className}`}>
   <h3 className={`text-white text-4xl md:text-5xl font-extrabold  tracking-wide`}>
           {title}
        </h3>

        <div className={`bg-${invert ? "black" : "[#ff0000]"} w-[120px] h-[10px] my-4`}></div>
   </motion.div>
  )
}

export default Title

