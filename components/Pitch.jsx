import { urlFor } from '@/sanity';
import React from 'react'
import Chart from "../public/analytics.svg";



const Pitch = ({desc, pitchLine, pitchImage}) => {
  return (
    <div className="flex relative md:space-x-14 flex-col justify-center p-2 md:p-10 max-w-4xl md:max-w-6xl mx-auto align-middle ">
      <div className=' flex align-center  w-full  md:flex-row flex-col md:space-x-10 space-y-20 md:space-y-0'>

      <div className=' md:w-[300px] w-[200px] mx-auto'>
      {/* <Chart className="scale-75 mx-auto"/> */}

      <img src={pitchImage} className=" " />
      </div>

      <p className=' flex-1 mx-auto text-center md:text-left flex-grow'>{desc}</p>
      </div>

      
   
   <p className="my-20 w-[95%] text-center mx-auto  text-2xl font-semibold italic text-red-500 ">{pitchLine}</p>
    </div>
  )
}

export default Pitch