import React, { useCallback, useEffect, useState } from 'react'
import Particles from "react-tsparticles";
import { loadFull, load } from 'tsparticles';
import { loadTrianglesPreset } from 'tsparticles-preset-triangles';
import {motion} from "framer-motion";




const Hero = ({slogan, desc, buttonTitle}) => {

 
    

  const particlesInit = useCallback(async engine => {
    console.log(engine);


    //await loadTrianglesPreset(engine)
    await loadFull(engine);
  }, [])


  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, [])


// let time = 0;
//   useEffect(() => {
//     time ++;
//     const interval = setInterval(() => {
//       // Change the favicon
//       const favicon = document.querySelector('link[rel="icon"]');
//       favicon.href = time % 2 == 0 ? "/thirteen.svg" : "favicon.ico";
//     }, 1000);

// let time = 0;
// useEffect(() => {
//     const interval = setInterval(() => {
//       // Change the favicon
//       const favicon = document.querySelector('link[rel="icon"]');
//       favicon.href = time % 2 == 0 ? "/thirteen.svg" : "favicon.ico";
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);
  




  return (
    <div className="flex justify-center items-center flex-col h-screen overflow-hidden">
      

     <div className="flex justify-content items-center flex-col my-20 md:my-40 overflow-y-hidden text-center">
     <h1
      className="text-[#ff0000] text-4xl md:text-7xl my-20 font-extrabold">{slogan}</h1>
      <p className="text-white text-lg md:text-3xl">{desc}</p>

      <a
       href="#contactMe"
       className="z-10 animate-pulse bg-[#ff0000] text-black font-extrabold py-4 px-12 my-10 md:mt-20 hover:bg-white hover:text-black hover:shadow-[#ff0000] transition-colors text-2xl shadow-white shadow-[12px_12px_0_0_rgba(0,0,0,0.4)]"
       >{buttonTitle}</a>

{/* bg-red-700  text-black hover:bg-red-500 transition-colors my-20 py-4 px-12 font-bold shadow-white shadow-[4px_4px_0_1px_rgba(0,0,0,0.4)]  */}
    
     </div>

      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            
            
            
            options={{
                fullScreen: false,
                background: {
                    color: {
                        value: "black",
                    },
                },
                fpsLimit: 20,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 3,
                        },
                        repulse: {
                            distance: 70,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 120,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    shape: {
                        type: "square",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
                preset: "triangles"
            }}
        />
        
    </div>
  )
}

export default Hero