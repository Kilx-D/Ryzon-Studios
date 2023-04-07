import React from 'react'
import Proj from './Proj'
import { urlFor } from '@/sanity';
import {motion} from 'framer-motion';
import Title from "./Title";

const Projects = ({projects}) => {

    
//   return (
//     <div className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
//     {/* <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
//         Projects
//         </h3> */}

// <h3 className="absolute top-0 z-22 text-6xl">Projects</h3>

//         <div className='relative w-full flex overflow-x-scroll overflow-y-hidden  z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a] snap-x snap-mandatory '>
          
//                 <div  className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">

//                     <img
                    

//                     className="w-60 h-60"
//                     src="https://cdn.discordapp.com/attachments/781794429652566056/1069459125983002695/image.png"
//                     />

//                     <div className="space-y-10 px-0 md:px-10 max-w-6xl">
//                         <h4 className="text-4xl font-semibold text-center"><span className="underline decoration-[#fc0d15]">Case Study 1 of 3:   </span>   <i>ICBM dingus</i></h4>
                        
//                         <p>
//                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quae ab et aliquid debitis inventore praesentium reprehenderit natus est. Quos, sequi hic, non ea omnis vel dolor est beatae odio magni soluta iusto eius aliquam rerum cum minima quam officia dolore facilis sit, ipsa corrupti reiciendis? Sapiente vitae, aliquam sunt eos, autem distinctio ratione natus incidunt at ipsam quis dolore.
//                         </p>
//                         </div>


//                     </div>
//                     <div  className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">

// <img


// className="w-80 h-80"
// src="https://cdn.discordapp.com/attachments/781794429652566056/1069459125983002695/image.png"
// />

// <div className="space-y-10 px-0 md:px-10 max-w-6xl">
//     <h4 className="text-4xl font-semibold text-center"><span className="underline decoration-[#fc0d15]">Case Study 1 of 3: </span> dingus alert</h4>
    
//     <p>
//         brrrrr
//     </p>
//     </div>


// </div>
           
            
//         </div>

//         {/* <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div> */}
// </div>
//   )


        return (
            <div className="h-max  relative overflow-hidden w-full  flex justify-center">




{/* <motion.div 
initial={{y: -300, opacity: 0}}
   transition={{duration: 1.4 }}
   whileInView={{opacity: 1, y: 0}} */}
                {/* <div
                className=" w-max mx-auto absolute top-0">
   <h3 className="text-4xl md:text-5xl font-extrabold  tracking-wide">
           {projects?.title}
        </h3>

        <div className="bg-[#ff0000] w-[50%] h-[10px] my-4"></div>
   </div> */}





         <div className='relative w-full flex overflow-x-scroll overflow-y-hidden  scrollbar scrollbar-track-gray-400/20  scrollbar-thumb-[#ff0000] snap-x snap-mandatory max-w-5xl'>


                {projects?.projs?.map(({desc, title, projImage, url}, i) => (

                    <Proj
                    title={title}
                    desc={desc}
                    img={urlFor(projImage).url()}
                    url={url}
                    i={i}
                    length={projects?.projs.length}
                    />
                ))}

                {/* // <Proj
                // title="honestly no clue"
                // desc="its a thing something idk it does stuff"
                // img="https://cdn.discordapp.com/attachments/781794429652566056/1069459125983002695/image.png"
                // />

                //  <Proj
                // title="honestly no clue"
                // desc="its a thing something idk it does stuff"
                // img="https://cdn.discordapp.com/attachments/781794429652566056/1069459125983002695/image.png"
                // />    */}
                    
            </div>
            </div>
        )
}

export default Projects