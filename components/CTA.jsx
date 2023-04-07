import React from 'react'
import Title from "./Title";

const CTA = ({title, desc, buttonTitle}) => {
//   return (
//     <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        
    
//     <div className=" absolute md:h-[600px] h-[520px] top-[20%] py-10 md:py-20 w-full z-20 flex flex-col justify-center items-center ">
//     <h3 className="text-2xl z-25 mx-auto">
//         idk lets do stuff
//     </h3>
    
//     <p className="text-black font-medium w-[80%] md:max-w-5xl my-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit quas vel similique dolore eius natus nostrum reprehenderit nisi, iure obcaecati saepe voluptatibus fugiat corporis, neque cum eum ipsum quam incidunt vitae ullam sed accusantium hic veniam? Modi deserunt est totam ad, distinctio velit magnam quo harum, maiores quam excepturi illo, ducimus ipsam et repellendus minus pariatur blanditiis quaerat laboriosam! Laboriosam accusantium praesentium assumenda aspernatur recusandae ipsum eligendi vitae non?</p>
  
//     <a
//        href="https://youtube.com"
//        className="bg-black  text-red-700 hover:bg-red-500 transition-colors  py-4 px-12 font-bold shadow-white shadow-[4px_4px_0_1px_rgba(0,0,0,0.4)] "
//        >something idk</a>
//     </div>


//     <div  className="w-full absolute top-[20%] bg-red-600 left-0 md:h-[600px] h-[520px] skew-y-6">



//     </div>
// </div>
//   )


return (
  <div className="h-screen relative w-full  my-80 py-20 flex items-center">

      <div id="why" className=' text-white relative top-0 left-0 w-full space-y-20 py-20   flex flex-col justify-center'>
         
         <Title 
         title={title}
         invert={true}
         />
        
        <p className="text-black text-3xl w-[80%] mx-auto font-extrabold text-center">{desc}</p>
        <a
         href="#contactMe"
         className="bg-black w-max mx-auto  text-[#ff0000] text-2xl hover:text-black hover:bg-white transition-colors  py-4 px-12 font-extrabold shadow-white hover:shadow-black shadow-[10px_10px_0_0px_rgba(0,0,0,0.4)] "
         >{buttonTitle}</a>
    </div>

      <div className="bg-[#ff0000] h-full skew-y-6 absolute top-0 left-0 w-full -z-10"></div>


  </div>
)

}

export default CTA