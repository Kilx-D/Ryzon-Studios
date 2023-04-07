import React from 'react'

const Proj = ({desc, title, img, url, i, length}) => {
  return (
    <div  className=" w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen">


    <a href={url} target="_blank">
    <img
   
    
   className="w-30 h-auto hover:scale-105 transition-all ease-out"
   src={img}
   />
   </a>

   <div className="space-y-10  md:px-10 w-full md:max-w-6xl ">
       <h4 className="text-2xl md:text-4xl font-semibold text-center"><span className="underline decoration-[#fc0d15]">Project 1 of 3:   </span>   <i>{title}</i></h4>
       
       <p className="md:max-w-2xl text-center">
           {desc}
       </p>
       </div>


   </div>
  )
}

export default Proj