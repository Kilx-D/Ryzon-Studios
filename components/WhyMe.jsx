import React from 'react'
import {motion} from "framer-motion";
import Title from "./Title";

const WhyMe = ({title, desc}) => {

  const divSize = 600;

  // return (
  //   <div className="h-screen my-40 relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        
        
  //       <div className={` absolute h-[${divSize}px]  top-[30%] py-6  w-full z-20 flex flex-col justify-center items-center `}>
  //       
  //       </div>


  //       <div  className={`w-full absolute top-[30%] bg-red-600 left-0 md:h-[600px] h-[${divSize}px] skew-y-6`}>

  //       </div>
  //   </div>
  // )

return (
  <div className="h-screen relative w-full  my-80 py-20 flex items-center">

    <div id="why" className=' text-white relative top-0 left-0 w-full md:space-y-20 py-28   flex flex-col justify-center'>
   {/* <motion.div 
   initial={{y: -300, opacity: 0}}
   transition={{duration: 1.4 }}
   whileInView={{opacity: 1, y: 0}} */}

   <Title 
   title={title}
   invert={true}
   
   />
        
        <p className="text-black md:text-2xl text-xl w-[80%] mx-auto font-extrabold ">{desc}</p>
    </div>

      <div className="bg-[#ff0000] h-full skew-y-6 absolute top-0 left-0 w-full -z-10">

      
      </div>
  </div>
)

}

export default WhyMe